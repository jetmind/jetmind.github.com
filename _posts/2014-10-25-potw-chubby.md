---
layout: post
title: "PotW: The Chubby Lock Service for Loosely-Coupled Distributed Systems"
date: 2014-10-25 13:00
---

*Wondering what PotW is? Check out my [first Read Along][first-paper].*

This week’s [HackerSchool][hs] paper is [The Chubby Lock Service for
Loosely-Coupled Distributed Systems][paper] by Mike Burrows from Google.

It describes design of distributed lock service called Chubby. In addition to
locks it provides capabilities for sharing small pieces of state (configuration,
name information, etc) and event mechanism to notify clients about changes.
There are no low level details in the paper, just description of high level
design and overview of its use at Google.

The main design goals:

- reliability
- availability to moderately large # of clients (tens of thousands)
- easy to understand semantics

Throughput and storage capacity were considered secondary.

Chubby provides FS-like interface for clients. You have hierarchy of directories
and files and operations to read and write a whole file. Also, client can
subscribe to notifications of file modifications and acquire locks.

Essentially, Chubby was designed to allow developers at Google write their own
distributed system without worrying much about common problems like
synchronization, leader election, etc. For example [GFS] and [BigTable] use Chubby
in several ways. Also, it is used as naming service internally with what they
call protocol-conversion server to make it integrate with DNS.  

I was thinking "probably it's like [ZooKeeper][zk]" all the time while reading
this paper. And in some sense it is.  They both provide CP system with FS-like
interface. Though, ZooKeeper did not provide locks initially, but added them
later on top of it's primitives.  You can read more about it [here][zoo].

My takeaways:

- client library is almost as complicated as a server, which makes sense, since
  **client is a part of distributed system** itself
- client uses extensive caching to reduce load on Chubby cell and it works!
- caching of absence of a file was even more important than caching of file
  contents

And, as always, if you're interested in gaining more rigorous understanding -
[go read the paper][paper]!



[hs]: https://www.hackerschool.com/blog/49-paper-of-the-week-the-chubby-lock-service-for-loosely-coupled-distributed-systems
[paper]: https://static.googleusercontent.com/media/research.google.com/en/us/archive/chubby-osdi06.pdf
[zoo]: https://developer.yahoo.com/blogs/hadoop/apache-zookeeper-making-417.html
[zk]: http://zookeeper.apache.org/
[first-paper]: {% post_url /2014-10-11-potw-data-abstraction %}
[GFS]: http://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf
[BigTable]: http://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf
