<p align="center"><img src="http://prototype-generator.com/img/logo-pg.png" height="94"></p>

<p align="center">Visit the PG-website to learn how to use PG: http://prototype-generator.com </p>

> [Yeoman](http://yeoman.io) generator for Web Apps and Prototypes.

[![NPM version](https://badge.fury.io/js/generator-prototype.svg)](http://badge.fury.io/js/generator-prototype) [![Build Status](https://travis-ci.org/Prototype-Group/generator-prototype.svg)](https://travis-ci.org/Prototype-Group/generator-prototype)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](http://en.wikipedia.org/wiki/MIT_License)
[![NPM](https://nodei.co/npm/generator-prototype.png?mini=true)](https://nodei.co/npm/generator-prototype/)

## Getting started

### Requirements

* Node.js & Node Package Manager
* Grunt Command Line Interface – npm install -g grunt-cli

### Installation 

- Install Yeoman:
  `npm install -g yo`

- Install the Generator-Prototype via:
  `npm install -g generator-prototype`

### Update
- Update the Generator-Prototype via:
  `npm update -g generator-prototype`

### Usage

#### Scaffold your new prototype project.

```bash
yo prototype
```

##### Options

* `-s` alias `--skip-install`
  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

#### Quick Start
You can scaffold your project in an instance. The first question is:

```
"Choose your installation routine"
```

If you choose `Minimal installation` you skip the rest of the questions and get the default values with:
* Libsass (grunt-sass)
- Task Runner: Grunt
* Grunt modules: `grunt-combine-mq`, `grunt-dr-svg-sprites`
* Assemble as template engine

## Structure

``` bash
├───helpers
│   ├───configs
│   ├───templates
│   │   ├───grunticon-template
│   │   └───svg-sprites
│   ├───_grunt
│   └───_gulp
├───resources
│   ├───ajax
│   ├───assets
│   │   ├───fonts
│   │   ├───img
│   │   │   ├───svg
│   │   │   │   └───icons
│   │   └───media
│   ├───bower-components
│   ├───js
│   ├───scss
│   │   ├───global
│   │   ├───icons
│   │   └───utils
│   │       ├───extends
│   │       └───mixins
│   └───templating
│       ├───data
│       ├───helpers
│       ├───layouts
│       ├───pages
│       └───partials
├───_dist
└───_output
```

## Task Runners

PG supports `Grunt` and/or `Gulp` as task runner. Our primary task runner is `Grunt`, so when you have some ideas to improve our `Gulp` workflow just open an issue. 

### Grunt

For Grunt and our Gruntfile we use the grunt module [load-grunt-configs](https://github.com/creynders/load-grunt-configs/) to split up the file in multfniple task files. 
You can find these task files in the following directory:

 * helpers/_grunt
 
#### Grunt Modules

There are standard grunt modules we use. These are:

 * [grunt-combine-mq](https://github.com/frontendfriends/grunt-combine-mq) - When you use mixins for media queries in your SASS files, you can combine your media queries with this module
 * [grunt-concurrent](https://github.com/sindresorhus/grunt-concurrent) - Run grunt tasks concurrently .
 * [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) - Clean your directories.
 * [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Minify your CSS.
 * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) - Check your js for errors.
 * [grunt-htmlhint](https://github.com/yaniswang/grunt-htmlhint) - Check your html for errors.
 * [grunt-jsbeautifier](https://github.com/vkadam/grunt-jsbeautifier) - Format your js and html files.
 * [grunt-sass-globber](https://github.com/Sebastian-Fitzner/grunt-sass-globber) - This module provides a simple globbing functionality for sass files like the ruby gem sass-globbing.
 * [jit-grunt](https://github.com/shootaroo/jit-grunt) - A JIT(Just In Time) plugin loader for Grunt.
 * [time-grunt](https://github.com/sindresorhus/time-grunt) - Displays the execution time of grunt tasks.
 
**Optional Grunt modules**

_But you can also apply additional addons and gulp modules to your project. Just choose specific ones:_

 * [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) - Autoprefixer parses CSS and adds vendor-prefixed CSS properties using the Can I Use database.
 * [grunt-bless](https://github.com/stefanjudis/grunt-bless) - Split your css after you reach size limit for ie9
 * [grunt-browser-sync](https://npmjs.org/package/grunt-browser-sync) - Sync and auto-reload your local server over multiple devices
 * [grunt-browserify](https://github.com/jmreidy/grunt-browserify) - Use a node-style require() to organize your browser code and load modules installed by npm.
 * [grunt-connect-proxy](https://github.com/drewzboto/grunt-connect-proxy) - a preconfigured proxy for developing clientside API interfaces in your prototype, with CORS, Basic Authentication support and http methods
 * [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin) - Minify your HTML files.
 * [grunt-contrib-requirejs](https://github.com/gruntjs/grunt-contrib-requirejs) - Optimize RequireJS projects using r.js.
 * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) - Minify files with UglifyJS.
 * [grunt-csscomb](https://github.com/csscomb/grunt-csscomb) - The grunt plugin for sorting CSS properties in specific order.
 * [grunt-dr-svg-sprites](https://github.com/drdk/grunt-dr-svg-sprites) - Generate SVG Sprites with scss files. We provide a custom template to generate mixins and extends.
 * [grunt-grunticon](https://github.com/filamentgroup/grunticon) - Generate SVG-URI-SASS files with png fallbacks
 * [grunt-image-size-export](https://github.com/Sebastian-Fitzner/grunt-image-size-export) - Pass a folder of images to this module and get infos like width, height, filename, path and breakpoints.
 * [grunt-jsdoc](https://github.com/krampstudio/grunt-jsdoc) - This plugin enables you to integrate the generation of comments based documentation into your Grunt build.
 * [grunt-modernizr](https://github.com/Modernizr/grunt-modernizr) - grunt-modernizr sifts through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.
 * [grunt-packager](https://github.com/bobbor/grunt-packager) (only executable when your project.jspackcfg is configured) - package your js.
 * [grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas) - PhantomJS-based web performance metrics collector and monitoring tool.
 * [grunt-photobox](https://github.com/stefanjudis/grunt-photobox) - Take snapshots from homepage
 * [grunt-postcss-separator](https://github.com/Sebastian-Fitzner/grunt-postcss-separator) - Split up your Data-URI or anything else into a separate CSS file.
 * [grunt-responsive-images](https://github.com/andismith/grunt-responsive-images) - Produces images at different sizes (be sure you have installed GraphicsMagick)
 * [grunt-svgmin](https://github.com/sindresorhus/grunt-svgmin) - Minify SVG using SVGO.
 * [grunt-version](https://github.com/kswedberg/grunt-version) - Grunt task to handle versioning of a project.

### Gulp

For Gulp and our Gulpfile we use the node module [require-dir](https://www.npmjs.com/package/require-dir) to split up the file in multiple task files. 
You can find these task files in the following directory:

 * helpers/_gulp
 
#### Gulp Modules

There are standard Gulp modules we use. These are:

* del - Clean your directories.
* run-sequence - Run gulp tasks in a sequence.
* browser-sync - Sync and auto-reload your local server over multiple devices
* gulp-notify - Add notifications.
* gulp-minify-css - Minify your CSS.
* gulp-htmlhint - Check your html for errors.
* gulp-jshint": - Check your js for errors.
* gulp-filesize - Return the filesize in your console.
 
**Optional Gulp modules**

_But you can also apply additional addons and gulp modules to your project. Just choose specific ones:_




### Gulp And Grunt 

When you want to use both at the same time, do it to your own risk. You will probably have to change a few settings. 
Furthermore Gulp will be your primary task runner. 

## Template Engines

### Assemble
We use Assemble as template engine. Assemble is a component and static site generator that makes it dead simple to build modular sites, documentation and components from reusable templates and data.
You want to know more? Here you go: [assemble.io](http://assemble.io)

In your installation routine you can choose specific modules for Assemble:

 * assemble-contrib-permalinks
 * assemble-contrib-sitemap
 * assemble-related-pages
 
#### Custom Helpers
We provide some custom helpers to speed up your Assemble workflow. These helpers provide:

* repeating elements
* limiting JSON output
* partials with multiple contexts
* factories for grid systems
* and a few more ... 

You want to know more? See [PG Custom Helpers](http://prototype-generator.com/templating-in-pg/template-helpers.html)

## Features
PG supports different features. Just check/uncheck them in the __custom installation routine__:

* You want to add a separate distribution folder? - Check!
* You want to add a CSS Styleguide and Assemble Development Documentation? - Check! (See "Developer Documentation")

## JS Libraries and CSS Frameworks
You can choose JS Libraries like:

* jQuery
* BackboneJS
* Exoskeleton
* Ampersand

And you can also choose SCSS Frameworks like:

* Foundation
* Bourbon and Bourbon Neat
* SASS Bootstrap

All files will be included and configured. Have fun!

## PG Methodology 
You can scaffold your project with our [PG Methodology](http://www.prototype-generator.com/pg-methodology/pg-methodology-overview.html). 

Furthermore you can add different bower components we provide: 

* [pg-scss](https://github.com/Sebastian-Fitzner/pg-scss)
* [pg-js](https://github.com/Sebastian-Fitzner/pg-js)
* [pg-components](https://github.com/Sebastian-Fitzner/pg-components)

## Sub Generators
We integrated some sub generators for you:

### Grunt Modules:
You forgot a grunt module?
* Install further grunt modules: `yo prototype:grunt`

### Handlebars Template Helpers:
You want to install custom handlebars helpers for templating from `PG`? 
* Here you go: `yo prototype:templating`

### BackboneJS:
 * Create a Backbone Model: `yo prototype:bm`
 * Create a Backbone View: `yo prototype:bv`
 * Create a Backbone Collection: `yo prototype:bc`

Others will follow.

## Developer Documentation
PG provides a way to document your assemble modules via markdown and a separate docs folder. 
Just use the custom installation route and check `Create Developer Documentation`.

## Alternative
* [generator-assemble](https://github.com/assemble/generator-assemble)

## Release History
see: [Changelog.md](CHANGELOG.md)

[![NPM](https://nodei.co/npm-dl/generator-prototype.png?height=3)](https://nodei.co/npm/generator-prototype/)

## TODO: 
- Own template wrapper for handlebars