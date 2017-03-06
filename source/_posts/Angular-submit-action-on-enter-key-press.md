---
title: Angular submit action on enter key press
description: AngularJs press enter key directive to call action.
date: 2016-01-25 12:27:56
tags: angular
banner: enter-key.jpg
---

I've faced an issue previously whilst attempting to call an action from pressing enter inside an input box.

This can be done if the input is inside a form using ngSubmit

```html

<form ng-submit="Controller.action()">
    <input type="text" data-ng-model="Controller.data.field" />
</form>
```

but outside of a form, this has no use.

so enter the enter directive...
````js
/**
 * angular press enter call a function
 *
 * Logic exported from ng-click function as largely foes the same thing
 */
(function() {
	angular.module('MyApp')
		.directive("pressEnter", pressEnter);

    pressEnter.$inject = ['$parse'];

    function pressEnter($parse) {

        return {
	    restrict: 'A',
	    compile: function ($element, attr) {

		var fn = $parse(attr['pressEnter'], /* interceptorFn */ null, /* expensiveChecks */ true);
		return function ngEventHandler(scope, element) {
		    element.on('keydown', function(event) {

			if(event.which == 13 && event.shiftKey == false) {
			    var callback = function () {
	    			fn(scope, {$event: event});
			    };

			    scope.$apply(callback);
			}
		    });
		};
	    }
	};
    }
})();
````
[Gist on github](https://gist.github.com/kernowjoe/8d464fee9b890cf434bd)

The logic is the same as the ngClick directive, taken from core, then repurposed for this.

You can now use this in your html as you would ngClick

```html
<input type="text" data-press-enter="Controller.action()" data-ng-model="Controller.data.field" />
```
