'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  var config = {
    app: 'sites',
    dist: 'dist'
  };
  // Define the configuration for all the tasks
  grunt.initConfig({
    config: config,
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost',
        keepalive: true
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
            connect.static(config.app)
            ];
          }
        }
      }
    }
  });

  grunt.registerTask('default', [
  'connect'
  ]);
};
