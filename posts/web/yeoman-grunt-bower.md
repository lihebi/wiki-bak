---

layout: hebi-post
title: Yeoman & Grunt & Bower
location: 合肥
time: 08:49:25
categories: 框架
---

## Grunt

```
grunt --help # list all available tasks
```

#### Workflow

```
# Preview an app you have generated (with Livereload).
grunt serve

# Run the unit tests for an app.
grunt test

# Build an optimized, production-ready version of your app.
grunt
```

<!--more-->

#### grunt wildcard

```
* # matches any number of characters, but not /
? # matches a single character, but not /
** # matches any number of characters, including /, as long as it's the only thing in a path part
{} # allows for a comma-separated list of "or" expressions
! # at the beginning of a pattern will negate the match
```

Examples:

```
// You can specify single files:
{src: 'foo/this.js', dest: ...}
// Or arrays of filges:
{src: ['foo/this.js', 'foo/that.js', 'foo/the-other.js'], dest: ...}
// Or you can generalize with a glob pattern:
{src: 'foo/th*.js', dest: ...}

// This single node-glob pattern:
{src: 'foo/{a,b}*.js', dest: ...}
// Could also be written like this:
{src: ['foo/a*.js', 'foo/b*.js'], dest: ...}

// All .js files, in foo/, in alpha order:
{src: ['foo/*.js'], dest: ...}
// Here, bar.js is first, followed by the remaining files, in alpha order:
{src: ['foo/bar.js', 'foo/*.js'], dest: ...}

// All files except for bar.js, in alpha order:
{src: ['foo/*.js', '!foo/bar.js'], dest: ...}
// All files in alpha order, but with bar.js at the end.
{src: ['foo/*.js', '!foo/bar.js', 'foo/bar.js'], dest: ...}

// Templates may be used in filepaths or glob patterns:
{src: ['src/<%= basename %>.js'], dest: 'build/<%= basename %>.min.js'}
// But they may also reference file lists defined elsewhere in the config:
{src: ['foo/*.js', '<%= jshint.all.src %>'], dest: ...}
```

```
exports.warnOn = 'Gruntfile.js';        // Warn on a Gruntfile.js file.
exports.warnOn = '*.js';            // Warn on any .js file.
exports.warnOn = '*';               // Warn on any non-dotfile or non-dotdir.
exports.warnOn = '.*';              // Warn on any dotfile or dotdir.
exports.warnOn = '{.*,*}';          // Warn on any file or dir (dot or non-dot).
exports.warnOn = '!*/**';           // Warn on any file (ignoring dirs).
exports.warnOn = '*.{png,gif,jpg}'; // Warn on any image file.

// This is another way of writing the last example.
exports.warnOn = ['*.png', '*.gif', '*.jpg'];
```

## 杂

```
# Not only will this install <module> locally,
# but it will automatically be added to the devDependencies section, using a tilde version range.
npm install <module> --save-dev.
# 会同时把它加入bower.json
bower install bootstrap --save
```

## Bower

```
npm install -g bower

bower help
bower search xxx
bower install xxx
bower install xxx#version

bower install # in bower.json

bower uninstall xxx

bower init # create bower.json

bower list
bower update xxx
bower info bootstrap
bower uninstall jquery
```

## Yeoman

```
npm install -g yo
npm install -g generator-webapp
cd myapp
yo webapp


for angularjs app:
npm install -g generator-angular
yo angular
```

#### Workflow

```
yo webapp
grunt serve
grunt test
grunt
```

#### Use bower with yeoman

```
# Scaffold a new application.
yo webapp

# Search Bower's registry for the plug-in we want.
bower search jquery-pjax

# Install it and save it to bower.json
bower install jquery-pjax --save

# If you're using RequireJS...
# (be aware that currently the webapp generator does not include RequireJS and the following command only applies to generators that do)
grunt bower
> Injects your Bower dependencies into your RequireJS configuration.

# If you're not using RequireJS...
grunt bowerInstall
> Injects your dependencies into your index.html file.
```
