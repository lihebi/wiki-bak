'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin')
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
    },
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
  });

  grunt.registerTask('build', [
  'useminPrepare',
  'concat',
  'cssmin',
  'uglify',
  // 'filerev',
  'usemin'
  ]);

  grunt.registerTask('serve', [
  'connect',
  'watch'
  ])

  grunt.registerTask('default', [
  'connect',
  'watch'
  ]);
};
