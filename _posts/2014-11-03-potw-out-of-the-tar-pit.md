---
layout: post
title: "PotW: Out of the Tar Pit"
date: 2014-11-03 14:14
---

*Wondering what PotW is? Check out my [first Read Along][first-paper].*

This week's [Hacker School][hs] paper is [Out of the Tar Pit][paper] by Ben
Moseley and Peter Marks.

This paper discusses sources of complexity in programs. The paper is divided in
two parts: the first part discusses types and flavors of complexity and the
second part presents a system, which would enforce programmers to structure
programs in a much simpler way.

In the first part authors divide complexity in two types: *accidental* and
*essential* and argue that most of complexity is, in fact, accidental and we
would be better off without it. They also give overview of common programming
models (OOP, functional and logic) and their take on fighting complexity.

Complexity comes from two sources: (mutable) state and control. There are a lot
of other sources, but they just consequences of these two.

This might sound very familiar or not, depends on your background. For me it
does. I was constantly recalling Rich Hickey talks while reading this part, 
especially "[Simple Made Easy][simple-made-easy]". You should watch it if
you still didn't. It is very good.

The second part was more interesting and novel to me. That's were I experienced
a couple of *Whoa!* moments when recognized some of the techniques that are
implemented in existing systems. I believe that most of them didn't consciously
aimed to implement them, but retrospectively you can see a similar design
decisions.

One example of this is popular library for building user interfaces called
[React]. Essentially, it allows developers to treat state as global ground truth
and specify how to render UI from it. It is very similar to the concept of
treating your essential state as constant and deriving accidental state from it.
[Flux] architecture style takes it one step further by introducing
unidirectional flow. It resonate with the idea from the paper of restricting
data flow between parts of the system that implement essential state, accidental
state & control and user interaction stuff. Which makes reasoning about your
program much simpler.

Another great library from the UI stack is [DataScript] which brings database
into your browser. It is useful to represent your essential state in a way that
don't need to know anything about your query paths in advance. The paper's
system uses relational model for this, but the idea is the same.

For dessert, interesting citations from the paper.

Conclusion:

> So, what is the way out of the tar pit? What is the silver bullet? ...it may
> not be FRP<sup>\*</sup>, but we believe there can be no doubt that it is *simplicity*.
> 
> <footer>
> \* *FRP here means Functional Relational (not Reactive!) Programming*
> </footer>

Words of Tony Hoare from his 1980 Turing award speech:

> I conclude that there are two ways of constructing a software design: One way
> is to make it so simple that there are *obviously* no deficiencies and the
> other way is to make it so complicated that there are no *obvious*
> deficiencies. The first method is far more difficult.


And, as always, if you're interested in gaining more rigorous understanding -
[go read the paper][paper]!



[hs]: https://www.hackerschool.com/blog/51-paper-of-the-week-out-of-the-tar-pit
[first-paper]: {% post_url /2014-10-11-potw-data-abstraction %}
[paper]: https://github.com/papers-we-love/papers-we-love/raw/master/design/out-of-the-tar-pit.pdf
[simple-made-easy]: http://www.infoq.com/presentations/Simple-Made-Easy
[React]: http://facebook.github.io/react/
[Flux]: https://facebook.github.io/flux/
[DataScript]: https://github.com/tonsky/datascript
