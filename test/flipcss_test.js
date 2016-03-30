'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.flipcss = {
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.css');
    var expected = grunt.file.read('test/expected/default_options.css');
    test.equal(actual, expected, 'should replace left with right and vice versa, ltr with rtl and vice versa, flip margin and padding and ...');

    test.done();
  },
  flipPseudo: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flipPseudo.css');
    var expected = grunt.file.read('test/expected/flipPseudo.css');
    test.equal(actual, expected, 'should flip :before and :after pseudo classes.');

    test.done();
  },
  flipUrls: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flipUrls.css');
    var expected = grunt.file.read('test/expected/flipUrls.css');
    test.equal(actual, expected, 'should flip right and left in url().');

    test.done();
  },
  flipSelectors: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/flipSelectors.css');
    var expected = grunt.file.read('test/expected/flipSelectors.css');
    test.equal(actual, expected, 'should flip right and left in selectors.');

    test.done();
  },
  cleanDirection: function(test) {
    test.expect(1);

    //think just need something like a jasmine spy to see if clean function has been run with option.cleanDirection

    test.done();
  }
};
