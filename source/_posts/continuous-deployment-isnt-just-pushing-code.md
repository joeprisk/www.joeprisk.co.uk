---
title: Continuous Deployment isn't just pushing code
description: creating real continuous deployment without massive up front costs
tags:
  - continuous deployment
  - gitlab
banner: continuous-delivery-graphic.png
date: 2017-03-07 12:27:56
---


# continuous deployment

Continuous deployment isn't just pushing code!

On the surface it sounds a simple idea, make lots of small changes and always push them direct to live.

In reality there is a lot more to it than just pushing code to live. Personally it has taken a long time with messing with different methods and tools to find a suite that I'm happy with and that works in a way that fits around other working practices.

A large part of the problem I've faced, is the lack of budget when it comes to implementing a continuous deployment pipeline. Fear not, You can implement a Continuous Deployment pipeline on a shoestring budget, but it takes time, and don't think a client is going to want to pay for you to set it all up at once.

you have to be inventive, and implement small pieces of the ouzzle at a time, in time you will, hopefully, end up with a better understanding of what you are doing and a better solution had you tried to do it all up front, the same way we don't do prince2 as at the beginning you really don't know what the end will look like, and nor should you.

There are lots of different parts, and then many parts within those parts, just going to outline at a high level some of those steps along the way, if we use a front end stack to run through this is something most people will have some insight into in some way, whether they understand all the intricacies or not.

## Build process

An important part, for obvious reasons is the build pipeline, some may argue it is continuous deployment, in my thoughts this is just a part of it. gone are the old days, and rightly so, of manually ftping files to a server. These days, with the glorious rise of nodejs creating an automated build is a relatively straight forward thing.

I would sway towards webpack at the moment for js + css, but still more au fait with gulp as a task runner, and separate tools to concat and minify the code as needed, along with all the other tools.

Building static front end templates is also relatively painless process, there are many templating engines that can be run server and client side, nunjucks being my favourite this week, with the added bonus of being able to precompile templates on the server, cutting down the file size and work on the client side.

## Automated testing

This is the key part and what makes the whole thing possible. As pushing code to a server is relativley simple thing, but pushing code direct to live with the confidence that it's not going to break, now that is something awesome!

There are different methods for testing, with people favouring different ends of the spectrum, [Testing pyramid](https://martinfowler.com/bliki/TestPyramid.html)

![testing pyramid](https://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)

I would tend to sway towards a heavy load on the unit tests and to use end to end as more smoke tests to test the whole things hasn't fallen, rather than relying heavily on what are pretty fragile tests.
Unit tests by what they are, are a lot quicker to run, and usually more resilient so testing the actual code rather than testing your ability to write tests that can pass. E2E also require a lot more set up to be able to mimicreal world situations so for this purpose end up a lot more expensive to not just implement but to run aswell.

Testing can be implemented on as a standalone before piecing it all together, for a long time I have in the past, when working on a php project, had phpunit tests running on a pre-commit hook and not part of a full pipeline, before we managed to have the time/budget to stitch things together automated.

## Deployment 

Deployment can range from very simple to quite complex depending on the application you are deploying.

One of the simplest deploy's could be a php based api, as this can be deployed with atomic deploy, and no restarts or build steps are needed.

A JAMstack site again can be relatively painless if you are using netlify, they take care of all the build step and deploy for you, let them know the build command, and the distribution folder, and the rest is taken care of, cdn all the fliles on high availability servers distributed globally.

Node/ruby/python apps are all living running applications so will require the step of refreshing/restarting the application adding more complexity.

Then all of these procceses get added fun when they grow and migrate to being hosted on multiple servers that all require restarting/ running simultaneously in unison together.

A well used method for aiding in cutting out downtime is a blue/green deploy, where you have two or more servers, and deply to on outside of the load balancer, fully test this deploy, and then switch it in and the old one out, meaning no down time and able to flip flop forwards between the servers.

The act of automatically getting code to arrive on to a production server in a working state.

# Round up

So From my point of view, the road to achieving Continuous deployment enlightenment os to piece a small piece together at a time, write some tests and run them on a pre-commit hook, write a scss minification job before doing a complete build pipeline, do a small piece at a time untill you can manage to more, and slowly stitch them together until one day before you realise it, you have all the pieces in place to just roll out your code knowing that it will work when it gets to where its going.

As with everything of this nature I am entirely right whilst being entirely wrong about how to do things, everyone will find a slightly different approach and you should find yours, be agile about your approach, find what worked for someone else and change it to make it work for you, keep using it and changing until it works better.



