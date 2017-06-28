---
title: webpack angular2 environments - normal module replacement plugin
description: Enabling seperate environments within an angular app with webpack
tags:
  - webpack
  - angular
  - angular2
banner: angular-webpack.png
date: 2017-06-28 12:30:56
-------------------------


After a lot of messing with angular2 we have got to the point of releasing things into the wilds #exciting

We knew we would need separate environment much like that on offer with angular-cli, which was not at a stable enough state to use when we started the project, so we went with a webpack approach, but in true agile fashion we left this until it was actually needed.

Now at the point of needing, I have looked around and able to produce something of use using [Webpacks built in normalmodulereplacementplugin](https://webpack.github.io/docs/list-of-plugins.html#normalmodulereplacementplugin)

This can take regex to find and a function || string to replace with.

Having seperate webpack configs for dev and production you can define the plugin to do as you need in each.

```javascript

module.exports = {
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /environment$/, result => {
    
                result.request = result.request.replace(/environment$/, 'environment.dev');
            }
        ),
    ]
}

```

We then have an environments folder that we can switch between in the build. With separate webpack files for common, development and production configurations

+-- config
|   +-- webpack.common.js
|   +-- webpack.dev.js
|   +-- webpack.prod.js
+-- src
|   +-- environment
|   |   +-- environment.ts
|   |   +-- environment.prod.ts
|   |   +-- environment.dev.ts

The environment.ts is used as an interface, so that in development we can include this one and everything works as it should in the ide, and then is seemlessly switched out when we come to running the code.

environment.prod.ts
```typescript

import {environment} from "./environment";

export constant environment: environment = {
    ...
}

```

then in your service/component or whereever you need environment variables, which will be flipped out for the appropriate file.

```typescript
import {environment} from '../environment/environment';

...


```
