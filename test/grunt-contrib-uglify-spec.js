/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var fs = require('fs');
var answers = require('../test_helpers/prompt-answer-factory')({
	"gruntModules":[
		"grunt-contrib-uglify"
	]
});

describe('grunt-contrib-uglify', function () {
	var helperPath = "helpers/";

	beforeEach(function (done) {
		helpers.run(path.join(__dirname, '../generators/app'))
			.inDir(path.join(__dirname, 'tmp'))
			.withOptions({
				'skip-install': true,
				'skip-welcome-message': true
			})
			.withPrompts(answers)
			.on('end', done);
	});

	it('adds references to package.json', function () {
		assert.fileContent('package.json', /grunt-contrib-uglify/);
	});

	it('creates helper files', function () {
		assert.file(helperPath + "_grunt/uglify.js");
	});

});