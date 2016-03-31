---
layout: post
title: "The tale of Clojure, Heroku and X-Forwarded-For"
date: 2016-03-31 21:30
---

We have this small app running on Heroku. It's a simple HTTP API with dozen of endpoints. One of them is a `vote` endpoint which allows person to vote up or down for some entity. Once person has voted --- she can't vote again for N hours.

This check is implemented using IP address as person's identity, i.e. it's allowed to vote only once in N hours from the same IP. Since app is running on Heroku, every request is passed through proxy (heroku router), so we can't rely on the `:remote-addr` but we can rely on `X-Forwarded-For` header, since [the router guarantees][1] that IP of origin of the request will be the last item in this header.

But. That's not a whole story. Interesting things will happen if client passes more than one `X-Forwarded-For` header, instead of single header with values separated by commas, i.e. this:

~~~sh
curl -H"X-Forwarded-For: 10.10.10.10" -H"X-Forwarded-For: 20.20.20.20" http://host/endpoint
~~~

instead of this:

~~~sh
curl -H"X-Forwarded-For: 10.10.10.10,20.20.20.20" http://host/endpoint
~~~

In this case the router will add client's IP *only* to the end of the *first* header, but will pass *both* headers to the app.

So, what's a big deal? 

On the app side, Clojure's HTTP stack (ring based server) will parse those headers and merge them into one. I don't know if HTTP stacks in other languages are behaving this way, but I'm pretty sure they are.

So, the app will get this:

~~~sh
...
X-Forwarded-For: 10.10.10.10,99.99.99.99    # real IP appended by heroku router
X-Forwarded-For: 20.20.20.20
...
~~~

and parse it into this:

~~~clojure
{"x-forwarded-for" "10.10.10.10,99.99.99.99,20.20.20.20"
~~~

The IP address we want is no longer at the end. It is in the middle! So, somebody mean can vote unlimited number of times if he manages to pass additional `X-Forwarded-For` header with fake IP, changing IPs between every request.

I wrote to Heroku support team and they said it's a "a bug / accidental behavior" and they don't plan to fix it at the moment. So the only option is to handle this on the app side.

Luckily, we use Aleph as HTTP server and it allows us to [get the list of headers separately][2], as they was originally passed, because it retains netty's `HttpHeaders` object internally and exposes Clojure's map API over it (doing merging on the go, when header is requested) instead of converting headers to a map beforehand without any ability to recover their original structure. The fix is simple: we get the last IP from the first `X-Forwarded-For` and we're done. The code looks roughly like this:

~~~clojure
(defn get-all-headers [headers name]
  (if (instance? aleph.http.core.HeaderMap headers)
    (into [] (aleph.http/get-all headers name))
    (vector (get headers (str/lower-case name)))))

(-> (:headers request)
    (get-all-headers "x-forwarded-for")
    first
    get-last-ip)
~~~

We have used Jetty originally and I'm glad we have switched to Aleph before tripping over this. We would have had a hard time with a fix because Jetty ring adapter just [parses headers into plain Clojure map][3] and there seems to be no way to access them separately other then writing own adapter.

[1]: http://stackoverflow.com/a/18517550/4640690
[2]: https://github.com/ztellman/aleph/blob/9b4504b61ff5ab2128c8fc3014fc8c2b63d55a5e/src/aleph/http.clj#L311-L315
[3]: https://github.com/ring-clojure/ring/blob/4a3584570ad9e7b17f6b1c8a2a17934c1682f77d/ring-servlet/src/ring/util/servlet.clj#L11-L22
