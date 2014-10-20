# grunt-flipcss

> Flips LTR-based CSS files to RTL, or the opposite.
> This repository is a replication of behrang/grunt-flipcss for the sake of correct installation by npm. In fact installation of "grunt-flipcss" npm package results in installation of incorrect version of this repository which used "inverter" library not "flipcss" library.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-flipcss2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-flipcss2');
```

## The "flipcss" task

### Overview
This plugin is using [flipcss](https://github.com/operasoftware/flipcss).

In your project's Gruntfile, add a section named `flipcss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  flipcss: {
    options: {
      // Task-specific options go here.
      warnings: false,
      flipPseudo: false,
      flipUrls: true,
      flipSelectors: true
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.warnings
Type: `boolean`
Default value: `false`

If output warnings should be printed to console.

#### options.flipPseudo
Type: `boolean`
Default value: `false`

If :before and :after pseudo selectors should be flipped.

#### options.flipUrls
Type: `boolean`
Default value: `true`

If words left and right inside url() should be flipped.

#### options.flipSelectors
Type: `boolean`
Default value: `true`

If words left and right inside selectors should be flipped.


### Usage Examples

#### Flip one file
In this example, a single file is flipped.

```js
grunt.initConfig({
  flipcss: {
    app: {
      files: {
        'css/main-rtl.css': 'css/main.css'
      }
    }
  }
})
```

#### Flip multiple files
In this example, multiple files are flipped.

```js
grunt.initConfig({
  flipcss: {
    app: {
      files: {
        'css/main-rtl.css': 'css/main.css',
        'css/theme-rtl.css': 'css/theme.css'
      }
    }
  }
})
```

#### Flip multiple files to one file
In this example, multiple files are flipped and concatenated to a single file.

```js
grunt.initConfig({
  flipcss: {
    app: {
      files: {
        'css/rtl.css': ['main.css', 'theme.css']
      }
    }
  }
})
```

#### Flip multiple file groups to multiple files
In this example, files in two directories are flipped.

```js
grunt.initConfig({
  flipcss: {
    options: {},
    app: {
      files: [
        {
          expand: true,
          cwd: 'build/css',
          src: '*.css',
          dest: 'build/app/css'
        },
        {
          expand: true,
          cwd: 'build/theme',
          src: '*.css',
          dest: 'build/app/theme'
        }
      ]
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
