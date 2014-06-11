# 安装

安装`grunt-cli`

```
npm install -g grunt-cli
```
grunt-cli运行时调用本地的grunt来执行，所以npm本地依赖中也要有grunt。

# 使用

列出所有可用的task

```
grunt --help
```

执行grunt的task

```
grunt [task [task ...]]
```
不加参数运行default任务。可以加很多任务。

添加插件时，使用如下命令加入package.json的devDependencies

```
npm install <module> --save-dev.
```

# Gruntfile.js

基本摹本

```js
'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  var config = {
    app: 'sites',
    dist: 'dist'
  };
  grunt.initConfig({
    config: config,
    connect: {
      server: {
        options: {
          livereload: true,
          base: 'sites',
          port: 9000,
          open: true
        }
      }
    }
  });
  grunt.registerTask('serve', [
  'connect',
  'watch'
  ]);
  grunt.registerTask('default', [
  'serve'
  ]);
};
```

## 常用的插件包

### grunt-contrib-concat
### grunt-contrib-connect

load task

```
grunt.loadNpmTasks('grunt-contrib-connect');
```
config

```
connect: {
  server: {
    options: {
      livereload: true,
      base: 'sites',
      port: 9000,
      open: true
    }
  }
}
```
task name: `connect`

### grunt-contrib-cssmin
### grunt-contrib-less
load task

```
grunt.loadNpmTasks('grunt-contrib-less');
```
config

```
less: {
  development: {
    files: {
      "sites/css/main.css": "less/main.less"
    }
  }
}
```
task name: `less`

### grunt-contrib-uglify
### grunt-contrib-watch
load task

```
grunt.loadNpmTasks('grunt-contrib-watch');
```
config

```
watch: {
  less: {
    files: ['less/main.less'],
    tasks: ['less'],
    options: {
      // Start a live reload server on the default port 35729
      livereload: true,
    },
  }
}
```

task name: `watch`
### grunt-gh-pages
load task

```
grunt.loadNpmTasks('grunt-gh-pages');
```
config

```
'gh-pages': {
  options: {
    base: 'sites'
  },
  src: ['**']
},
```

task name: `gh-pages`
### grunt-shell
load task

```
grunt.loadNpmTasks('grunt-shell');
```
config

```
shell: {
  listFolders: {
    options: {
      stderr: false
    },
    command: 'ls'
  }
}
```

task name: `shell`
### grunt-usemin
config

```
useminPrepare: {
  options: {
    dest: 'sites'
  },
  html: 'sites/index.html'
},
usemin: {
  options: {
    // assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
  },
  html: ['sites/**/*.html'],
  // css: ['<%= config.dist %>/styles/{,*/}*.css']
},
```
task flow:

```
grunt.registerTask('build', [
'useminPrepare',
'concat',
'cssmin',
'uglify',
// 'filerev',
'usemin'
]);
```
会在运行时生成concat, cssmin, uglify的配置文件，所以不需要写它们的配置文件。
但是要自己写task的流程。

html的写法

```html
<!--build:css /css/app.css-->
<link href="../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="../bower_components/google-code-prettify/src/prettify.css" rel="stylesheet">
<link href="/css/main.css" rel="stylesheet">
<!--endbuild-->
<!--build:js /js/app.js-->
<script src="../bower_components/jquery/dist/jquery.js"></script>
<script src="../bower_components/bootstrap/dist/js/bootstrap.js"></script>
<script src="../bower_components/google-code-prettify/src/prettify.js"></script>
<script src="../bower_components/keymaster/keymaster.js"></script>
<script src="../js/main.js"></script>
<!--endbuild-->
```
grunt会将此句子替换为生成的`app.css`和`app.js`
# 通配符
```
* # matches any number of characters, but not /
? # matches a single character, but not /
** # matches any number of characters, including /, as long as it's the only thing in a path part
{} # allows for a comma-separated list of "or" expressions
! # at the beginning of a pattern will negate the match
```

例子:

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
