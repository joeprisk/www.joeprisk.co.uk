---
title: kitchen showcase app (part 1)
date: 2016-01-16T13:19:09.000Z
tags:
  - node
  - angular
banner: raspberry-pi.jpg
---
### The problem

In our house we never know what to cook, so this is followed by googling for some recipe, then taking the laptop into the already cramped kitchen to work from.

Having a laptop n the side when you're cooking, I'm sure you can imagine, is far from ideal. 

### The solution

Wouldn't it be nice to sit on the sofa and find your recipe you want to make, click on the share to my kitchen button, when you get to the kitchen its displayed on the wall!

This would be like living in the future!

Yes I could buy a tablet and carry it into the kitchen, and hook it to the wall, but where is the fun in that?

I've got a raspberry pi sat around not doing a lot at the moment so the idea began to gain traction.

I would fit a small touch screen onto one of the cupboard doors, and hide the rest of the pi away. During non cooking times I thought this could display a slideshow.

### Software

Obviously the first thing for me to tackle was the the software, I had lots of ideas from using node to open and close chrome instances, to finally settling on using node + socket.io to send the url to the browser and display in an iframe.

Technologies I intend on using

* NodeJs
* Express
* socket.io
* angularjs

Having not written a full node webapp before this was my perfect excuse.

So far I have created the most overly complicated slider ever, iframed overlay to come soon. 

### Code

I wanted to load all images from a given directory, and thus be able to add new ones to the mix as and when I want.

Image loader function, that can take a callback to be executed after loading has completed

```javascript
/**
* Load the images from within a folder into an array
* @param callback
*/
function load(callback) {

	reset();

	fs.readdir(
		config.imageDir, function (error, files) {

			files.forEach(addImageToList);
				
			typeof callback == 'function' && callback();
		}
	);
}
```

on connection each client will be added to a list and sent out the relevant information

```javascript
// Socket.io Server
io.sockets.on('connection', function (client) {

	addClient(client);

});

function addClient(client) {

	clients.push(client);
	client.emit('images', Images.list);
}
```

More coming soon, or you can check out the full code on [github](http://github.com/kernowjoe/kitchenShowCase)
