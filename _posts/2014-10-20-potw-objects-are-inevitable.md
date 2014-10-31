---
layout: post
title: "PotW: The Power of Interoperability: Why Objects Are Inevitable"
date: 2014-10-20 11:00
---

*Don't know what PotW is? Check out my [first Read Along][prev-paper].*

This week's [Hacker School][hs] paper is [The Power of Interoperability: Why
Objects Are Inevitable][paper] by [Jonathan Aldrich][author]. It is
complementary to the [last week's one][prev-paper]. Some of my thought and
excerpts follow.

The main author's focus is to discover technical reasons of objects tremendous
success in practice. He starts by reviewing Cook's definition of objects and
extending it. Rather than focusing on objects data abstraction capabilities (as
Cook does) Aldrich focuses on more high level aspect of objects, which he calls
*service abstraction*:

**§3**
> The key design leverage provided by objects is the ability to define
> nontrivial abstractions that are modularly extensible, where instances of
> those extensions can interoperate in a first-class way.  

So, three main traits of service abstraction are:

- enables non-trivial abstraction
- extensibility
- interoperability and uniformity

Aldrich argues that these abilities are important using examples of existing
software frameworks and ecosystems: Servlets, LLVM, GTK+, Android and even parts
of Linux kernel (which could be seen as a framework!).  

Also, in a languages that lack objects programmers often simulate service
abstraction by other means to enable big systems to be built of extensible and
interoperable parts. For example, [VFS][vfs] in Linux:

**§4.2**
> Linux uses service abstractions in order to support multiple file systems.
> There are vtable-like structures such as `file_operations` that are used to
> dispatch operations such as read to the code that implements file reading in a
> particular driver.

In this sense, I think, Stuart Sierra's [Component][component-lib] library for
Clojure also can be seen as implementation of objects (i.e. service abstraction)
in their lightweight form. It's widely used (from what I've seen), so this can
be one more example of inventing different forms of objects to enable
interoperable parts.  

**§5**
> I have argued that objects provide a unique form of service abstraction that
> supports interoperable extensions. This interoperability cannot be duplicated
> in other programming paradigms without likewise creating service abstractions,
> thus simulating the essence of objects.

Aldrich also makes some predictions:

> - Lightweight, first-class modules are service abstractions in that they
>   provide unanticipated extension of rich abstractions, and interoperability
>   of the extensions via module signature subtyping. If such a module system is
>   added to a language, such as Standard ML, that does not currently have good
>   support for objects, framework-like designs will begin to show up in the
>   enhanced language.
> - A practical, statically typed object-oriented language can be designed to
>   support Newspeak-style modules that are parametric in their dependencies,
>   provided that all types are given in an object-oriented, rather than an ADT,
>   style.

I think that all of that makes sense. However, I don't think that the way
mainstream OO languages implement service abstraction is necessarily the best
and hoping to see more experiments in this field.

And, as always, if you're interested in gaining more rigorous understanding -
[go read the paper][paper]!



[paper]: https://www.cs.cmu.edu/~aldrich/papers/objects-essay.pdf
[author]: https://www.cs.cmu.edu/~aldrich/
[hs]: https://www.hackerschool.com/blog/48-paper-of-the-week-the-power-of-interoperability-why-objects-are-inevitable
[prev-paper]: {% post_url /2014-10-11-potw-data-abstraction %}
[vfs]: http://en.wikipedia.org/wiki/Virtual_file_system
[component-lib]: https://github.com/stuartsierra/component
