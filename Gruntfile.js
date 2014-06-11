'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-gh-pages');
  var config = {
    app: 'sites',
    dist: 'dist'
  };
  // Define the configuration for all the tasks
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
    },
    less: {
      development: {
        files: {
          "sites/css/main.css": "less/main.less"
        }
      }
    },
    watch: {
      less: {
        files: ['less/main.less'],
        tasks: ['less'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        },
      }
    },
    'gh-pages': {
      options: {
        base: 'sites'
      },
      src: ['**']
    }
  });

  grunt.registerTask('default', [
  'connect',
  'watch'
  ]);
};
