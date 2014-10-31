---
layout: post
title: "PotW: On Understanding Data Abstraction, Revisited"
date: 2014-10-11 13:00
---

[Hacker School][hs] has this thing called [Paper of the Week][potw], where they
pick a paper, read it during a week and share thoughts and insights about it. I
have no relation to Hacker School but their approach and students and the fact
that such place exists inspires me. I wish I could become Hacker Schooler one
day. So I decided to read those papers by myself and reflect on what I learn.
Kinda participate in a tiny piece of Hacker School activities.

Reading a paper is also a good exercise on concentration. The process can be
very fun if you care about subject, but it may require a lot of mental effort to
get through dense and deep sentences, from which most papers consists of. More
often it could be really frustrating. Especially when you don't understand the
subject well enough or language isn't clear, stuffed with concepts and
abbreviations you not familiar with.

Last week's paper is [On Understanding Data Abstraction, Revisited][paper] by
[William Cook][author]. It's written in pretty comprehensible way. It's a good
one if you only starting.

Cook starts by revealing a common misconception about three related but
different concepts: data abstraction, abstract data types (ADT) and objects.
Most programmers (and even textbooks) describe objects as another form of ADT.
Also data abstraction and abstract data types sometimes used interchangeably.
They both talking about abstraction, right?

Wrong.

Data abstraction describes a general concept of hiding internal representation
from a user. Abstract data types is just one way to do that. Objects - another.

The main difference between objects and ADT is that they hide internal
representation in two different ways. ADT use *type abstraction* to do that, and
objects use *procedural abstraction*.

How do they differ?

Type abstraction hides representation behind, well, types. Usually you need a
good type system to easily define type abstractions and thus, ADT. One
consequence of this is that it allows "complex" operations on your data
abstraction, meaning that they can take more than one value of particular type
and have access to internal representation of all of those values. It allows to
optimize operations based on knowledge of internal representation.

Procedural abstraction hides data representation behind a bunch of functions
(procedures, methods) which define interface of an object, and other objects can
talk to each other only through this interface. Note, they can't have access to
internal representation of another object even if they both represent the same
type! So, it does not allow objects to have "complex" operations like in ADT.
However, it allows more flexibility than ADT: you can always pass another bunch
of procedures with the same interface, but different internal representation.
You can't do that using type abstraction.

In practice, of course this two concepts are intertwined in different languages
in different ways, but it's useful sometimes to step back and feel the
difference by capturing the gist of each concept and comparing the two. It makes
you think more when one concept or another is more appropriate, and
consequently, makes you a better programmer!


I know my writing is not very clear. It's more like reminder to me about what
I've learned from a paper than a tutorial for a reader. If you're interested in
gaining more rigorous understanding - [go read the paper][paper]!


[hs]: https://www.hackerschool.com/
[potw]: https://www.hackerschool.com/blog/41-introducing-paper-of-the-week
[paper]: http://www.cs.utexas.edu/~wcook/Drafts/2009/essay.pdf
[author]: http://www.cs.utexas.edu/~wcook/
