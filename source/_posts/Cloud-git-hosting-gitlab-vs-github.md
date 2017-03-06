---
title: Cloud git hosting - gitlab vs github
date: 2016-07-27 12:00:14
description: Which git hosting solution is best for a medium sized consultancy firm - github vs gitlab.
tags:
- git
- development
banner: gitlab-github-comparison.png
---

We're currently undergoing merger with our sister company, and as a result of this will be moving offices.
We will be taking this as an opportunity to put some sense back into our mess of internal set ups, which has grown and grown into an unwieldy beast, which is far to complicated.
Part of our planned process is to move as much as we can into the cloud and do away with our internal set up completely, if possible.
and as such will be moving a lot of services away from in house.

# Our current set up
At the moment we're running self hosted gitlab server, although it turns out it is slightly out of date and things have moved on from when it was commissioned. This offers everything we currently think we need. source control on a nice visible platform, which can be grouped and dev's added to each project group.

# Reasons for looking to move to cloud?
One of the major downsides of having self hosted services, like a GitLab server, is the overhead of maintaining the servers. It's not just a server to run the service on either, but this has then morphed into many virtual servers with separate services running, an internal dns server, with its own overheads and then all the hardware and back ups on top of this.
Moving away to cloud based solutions pushes that maintenance/backups onto others and out of our hands, and would also make things easier for remote working, and just generally a more flexible working environment.

Our initial stance was to adopt GitHub as it's seen, by us, as the industry standard and we didn't see a reason to go elsewhere.
After taking a look around I realised how GitHub is supplied as is, and with little support or change requests available, whereas GitLab seems very actively supported, with features and bugs taken like any other normal project would be. This in itself was a massive plus point before even getting to the pricing, GitLab is completely FREE!

[Why GitLab will be free forever](https://about.gitlab.com/gitlab-com/#why-gitlab-com-will-be-free-forever)

[GitLab Pricing structure](https://about.gitlab.com/2016/05/11/git-repository-pricing/)

# Some interesting features for GitLab

We found a few interesting features, we probably already had, but being in house without external access, meant that these where not feasible.

More granular access control:
So these means project owner can have access to a repo as a guest, meaning they only get access to the issue tracker, which can then plug straight into jira, meaning they can be a lot more actively involved in an easier way.

Issue tracking:
Also you can upload any file with an issue, this is great when it come to being able to actually reproduce the most critical error ever.

These are just a couple I have picked up on, there are alot of other interesting ways that we can see enabling more collaboration between client and developers in a seamless way from allowing some access to issue trackers and other features.

## final thought
I definitely would not want to drop using GitHub at all, as I think the open source community is amazing, and this is not something to lose. 
We are taking the stance to put all out open source work onto GitHub, and all private repos on GitLab. 