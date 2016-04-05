/*
 * grunt-flipcss
 * https://github.com/behrang/grunt-flipcss
 *
 * Copyright (c) 2013 Behrang Noruzi Niya
 * Licensed under the MIT license.
 */

'use strict';

var flipcss = require('flipcss');

module.exports = function(grunt) {

  grunt.registerMultiTask('flipcss', 'Flips CSS files.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      warnings: false,
      flipPseudo: false,
      flipUrls: true,
      flipSelectors: true,
      cleanDirection: null
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.linefeed);

      // Flip file.
      src = flipcss.flip(src, options.warnings, options.flipPseudo, options.flipUrls, options.flipSelectors);

      //clean
      if (options.cleanDirection) {
        src = flipcss.clean(src, options.cleanDirection);
      }

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
