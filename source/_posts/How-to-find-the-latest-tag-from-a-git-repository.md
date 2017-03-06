---
title: How to find the latest tag from a git repository
description: A quick way to find the latest tag in a git repository.
date: 2016-03-15 00:36:08
tags: git
banner: git.jpg
---
I seem to be working on many current projects, so remembering the latest tag to roll up for a hotfix is always a pain.

You could be saying use

```bash
git tag
```

and scan through to find the highest one, but thats a complete pain, especially on an established project with many tags.

an excerpt from a current project.

```bash
1.0.4.1
1.0.4.2
1.0.4.3
1.0.4.4
1.0.4.5
1.0.5
1.0.5.1
1.0.6
1.0.7
1.0.8
1.0.9
1.0.9.1
1.0.9.2
1.0.9.3
1.0.9.4
1.0.9.5
1.0.9.6
1.0.9.7
1.0.9.8
1.0.9.9
```

The actual latest tag is 1.0.13.

Through the power of google I bring you the last tag command.

```bash
#!/bin/bash

git describe --abbrev=0 --tags

```
[github](https://gist.github.com/kernowjoe/e8d4a64ebd9a952178ee#file-lasttag)

Save this in /usr/local/bin or to that effect and you need never remember again.

This way you can easily print the latest tagged commit for a repository.