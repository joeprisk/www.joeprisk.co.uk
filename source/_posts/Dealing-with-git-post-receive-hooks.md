---
title: Dealing with git post receive hooks
date: 2016-10-11 01:00:28
description: Git post-receive hooks, to check out code on a production server. 
tags:
- git
- development
banner: hook.jpg
---
Git hooks can be used for a number of different uses, The main things we use them for are unit testing prior to a commit (pre-commit) and, checking out code on a remote repository after it receive a push (post-receive).

*-- We have since moved away from this method of using post-recieve hooks to check out code, as it only allows you to move forward and not backwards --*

I'm going to briefly run through how we set up our post receive hook, on a remote repository, of a production server.

We set it up as a bare repository as it is one that will not be worked in, but purely receive code from a push.

A post-receive hook receives arguments from stdin as `<oldrev> <newrev> <refname>` not from stdout arguments. so to get these arguments we must use 

```bash
while read oldrev newrev ref; do
...
done
```

A post receive is run irrelevant of which branch is received, so we need to determine what the action should be. We use gitflow to keep our branching organised and in order, and stick to [semantic versioning](http://semver.org/) for our tags. 
This makes it easy to rollback if any issues ever arise.

On a production server we would only check out a tagged version, as we have a clear point in code history to roll back to if at some point this is needed.

```bash

#!/bin/bash
export GIT_WORK_TREE=/var/www/mywebsite.co.uk

while read oldrev newrev ref; do

    branch=`echo $ref | cut -d/ -f3`

    # Only ever check out a tag so there is always a clear roll back route
    if [[ $branch =~ ^[^0-9]*(([0-9]+\.)*[0-9]+)$ ]]; then
        
        # match a tag eg. 1.1.1
        git checkout -f $branch
    else
        # Some other branch that should not be actioned on a live/production server
        # No action should be taken here
        echo " -- NOT pushingchecking out $branch"
    fi
done
```
[github](https://gist.github.com/kernowjoe/436ee79cf95b1b1d8514d430892645c0)

As you can see the regex matches any tag, and will recurse through. 

You could quite easily call a checkout function from here to perform build tasks etc, this is just a skeleton example of checking out the right branch at the right time.

small gotcha, alway remember to make the file executable otherwise you will be pulling your hair out trying to work out why nothing is happening!

```bash
chmod +x my-repository/hooks/post-receive
```