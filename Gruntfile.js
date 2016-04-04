/*
 * grunt-flipcss
 * https://github.com/behrang/grunt-flipcss
 *
 * Copyright (c) 2013 Behrang Noruzi Niya
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    flipcss: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options.css': ['test/fixtures/one.css', 'test/fixtures/two.css'],
        }
      },
      flipPseudo: {
        options: {
          flipPseudo: true
        },
        files: {
          'tmp/flipPseudo.css': 'test/fixtures/flipPseudo.css',
        }
      },
      flipUrls: {
        options: {
          flipUrls: true
        },
        files: {
          'tmp/flipUrls.css': 'test/fixtures/flipUrls.css',
        }
      },
      flipSelectors: {
        options: {
          flipSelectors: true
        },
        files: {
          'tmp/flipSelectors.css': 'test/fixtures/flipSelectors.css',
        }
      },
      cleanDirection: {
        options: {
          cleanDirection: 'rtl'
        },
        files: {
          'tmp/cleanDirection.css': 'test/fixtures/cleanDirection.css',
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'flipcss', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
