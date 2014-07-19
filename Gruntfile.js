'use strict';
module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-shell');
  // grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-rev');
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
        assetsDirs: ['sites']
      },
      html: ['sites/**/*.html'],
      // css: ['<%= config.dist %>/styles/{,*/}*.css']
    },
    shell: {
      listFolders: {
        options: {
          stderr: false
        },
        command: './compile'
      }
    },
    // filerev: {
    //   dist: {
    //     files: {
    //       src: [
    //         'sites/css/*.css',
    //         'sites/js/*.js'
    //       ]
    //     }
    //   }
    // },
    rev: {
      dist: {
        files: {
          src: [
            'sites/css/*.css',
            'sites/js/*.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('build', [
  'shell',
  'less',
  'useminPrepare',
  'concat',
  'cssmin',
  'uglify',
  // 'filerev',
  'rev',
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
