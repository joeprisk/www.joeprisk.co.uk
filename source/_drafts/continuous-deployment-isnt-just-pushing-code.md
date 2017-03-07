---
title: Continuous Deployment isn't just pushing code
description: creating real continuous deployment with gitlab JAMstack set up
date: 2017-03-07 12:27:56
tags: 
- continuous deployment
- gitlab
banner: continuous-delivery-graphic.png
---

# continuous deployment

Continuous deployment isn't just pushing code!

On the surface it sounds a simple idea, make lots of small changes and always push them direct to live.

In reality there is a lot more to it than just pushing code, it takes a long time of messing with different methods 

continuous deplyment takes a long time to get right if you are working on a shoestring budget.

you have to be inventive

never try and do everything at once, you'll blow all the budget it will be wrong

## Build process

An important part, for obvious reasons is the build pipeline, some may argue it is continuous deployment, in my thoughts this is just a part of it. gone are the old days, and rightly so, of manually ftping files to a server. Thesse days, with the glorious rise of nodejs creating an automated build is a relatively straight forward thing.

## Automated testing

This is the key part and what makes the whole thing possible. As pushing code to a server is relativley simple thing, but pushing code irect to live with the confidence that it's not going to break, now that is something awesome!
Lots of different sorts of testing and many projects will require different levels depending on the project. I tend to think a heavy load on unit testing

## Deployment 

The act of automatically getting code to arrive on to a production server in a working state.

php simple - just drop the files
nodejs/ruby/python living breathing application requires building/starting of application
docker
blue/green deployment

front end JAMstack use of netlify


