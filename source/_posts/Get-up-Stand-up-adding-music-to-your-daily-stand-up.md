---
title: 'Get up, Stand up! adding music to your daily stand up.'
date: 2016-09-16 00:56:54
description: Little touches to improve your daily productivity can go along way. There are subtle differences between a successful agile stand up and a roll call.
tags:
- agile
- development
banner: get-up-stand-up.jpg
---
So being very interested in working smarter and not harder, I have been reading on ways to improve stand up, or more to the point what makes a good stand up and what does not.

I was reading [http://martinfowler.com/articles/itsNotJustStandingUp.html](http://martinfowler.com/articles/itsNotJustStandingUp.html) and from the example of having Bob Marley's 'Get up, Stand up' play to signify the start of stand up sounded an awesome little feel good way to start the daily meeting.

To me stand up is as much about starting a day with the positive of remembering having achieved something the day before, as it is about setting ourselves on a path of achievement for the current day. What better way of getting everyone in a good mood than some related reggae!
The daily act of bringing all the team together and ensuring that everyone is heading in the right direction together, and no one is stuck on something is the aim, for more information, I'd read the link above as they'll put it a lot better than I ever could. 

Seen as we work on horrible iMac's I thought it would only take 5 minutes to knock up a quick apple script to switch my sound output to speakers and play the song of my request.

After a lot of searching it became apparent that, if you have anything in the headphone jack there isn't an option to output sound through the internal speakers. my short term solution is to leave my headphones out, long term I will buy a usb -> 3.5mm jack and then you are able to switch outputs, I'll update the script when I get round to buying one.

```bash

#!/usr/bin/osascript

# Set the volume to 50%
set volume output volume 50

# Open itunes
tell application "iTunes"
	activate

  	# Play 'Bob Marley Get Up Stand Up'
	play track "Get Up Stand Up"
	
	# After the initial intro dial down the volume to allow for discussion
	delay 40
	set volume output volume 30
	
	# At the end of the song turn iTunes off again
	delay 160
	quit
end tell
view raw

```
[github](https://gist.github.com/kernowjoe/91ab358cc15af1db17cda66e02225bd3)

As you can see pretty simple, turns the volume up high enough, plays the song, after initial intro brings it down a notch, then after the track finishes closes iTunes to not be used until the following day.

Accompanied this with a cronjob and now we have a stand up timer that runs every morning to start the working day. We may have to find alternative track or this one will very quickly get annoying, we will see.