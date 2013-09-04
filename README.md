# grunt-flipcss

> Flips LTR-based CSS files to RTL, or the opposite.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-flipcss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-flipcss');
```

## The "flipcss" task

### Overview
This plugin is using [inverter](https://github.com/coolony/inverter).

In your project's Gruntfile, add a section named `flipcss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  flipcss: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.exclude
Type: `String[]`
Default value: `[]`

A list of filter names to exclude when flipping. Read more at [coolony/inverter](https://github.com/coolony/inverter).

### Usage Examples

#### Filp one file
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

#### Filp multiple files
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

#### Filp multiple files to one file
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

#### Filp multiple file groups to multiple files
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

#### Custom Options
In this example, replacement of ltr/rtl and left/right in urls is excluded.

```js
grunt.initConfig({
  flipcss: {
    options: {
      exclude: ['fixUrlLtrRtl', 'fixUrlLeftRight']
    },
    app: {
      files: {
        'css/main-rtl.css': 'css/main.css'
      }
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/behrang/grunt-flipcss/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

