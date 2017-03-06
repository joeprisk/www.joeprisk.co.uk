---
title: Handling ini files with Grunt
description: A simple way to manage properties within an ini file from grunt task runner.
date: 2016-03-01 00:06:45
tags:
- node
- grunt
banner: grunt.jpg
---

I use grunt as a task runner for minification, uglification and concatenation of css and js. 

When deploying to production, grunt build task minify's and names the file with the timestamp, and then references this again from the server side, to alleviate any caching issues with *clever* browsers.

The issue was to get the timestamp from our build tools into our production code. 

I wrote this [Grunt ini handler](https://www.npmjs.com/package/grunt-ini-handler) to solve this very problem, below is how I'd set up a snippet of my grunt file to make use of this.

```javascript

module.exports = function (grunt) {

    var config = {};

    config.timestamp = Date.now();
    config.uglify    = {
        dist:    {
            files: {
                "public_html/js/dist/common.<%= timestamp %>.min.js":    ['public_html/js/src/common.js']
            }
        }
    };

    grunt.initConfig(config);
}
```

You can see here we have set the timestamp available within grunt, and used this to add to the filename.

The next part is using grunt-ini-handler

```javascript
config['ini-handler'] = {
	data: {
		file:   'build.ini',
		values: {
			"gruntBuild": "<%= timestamp %>"
		}
	}
};
```

You are then free to include the ini within your server side code, and easily determine the latest built css and js files to include.