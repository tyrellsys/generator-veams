/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var fs = require('fs');
var answers = require('../test_helpers/prompt-answer-factory')({
	"testAndQALibs": [
		"webdriver"
	]
});


describe('grunt-webdriver', function () {
	var helperPath = "helpers/";
	var testPath = "test/";

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
		assert.fileContent('package.json', /grunt-webdriver/);
	});

	it('creates helper files', function () {
		assert.file(helperPath + "_grunt/webdriver.js");
	});

	it('creates demo test html document with title "Test Document"', function() {
		assert.fileContent(testPath + "helpers/html/test.html", /<title>Test Document<\/title>/);
	});

	it('creates demo spec and demo js file', function() {
		assert.file(testPath + "spec/e2e/demo.spec.js");
		assert.file(testPath + "helpers/html/demo.test.js");
	});

	it('registers e2e task for grunt', function() {
		assert.fileContent("Gruntfile.js", /grunt\.registerTask\('e2e'/);
		assert.fileContent("Gruntfile.js", /webdriver:e2e/);
	});
});