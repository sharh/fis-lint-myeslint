'use strict';
var eslint = require('eslint');
var CLIEngine = eslint.CLIEngine;
var path = require('path');
var fs = require('fs');

module.exports = function (content, file, conf) {
	fis.log.notice('config primary is: option > .eslintrc.js > .eslintrc.json > package.json.eslintConfig');
	fis.log.notice('get more options：https://eslint.org/docs/developer-guide/nodejs-api#cliengine');
	var projectPath = fis.project.getProjectPath();
	var eslintrcjs = path.resolve(projectPath, '.eslintrc.js');
	var eslintrcjson = path.resolve(projectPath, '.eslintrc.json');
	var packageJson = path.resolve(projectPath, 'package.json');
	var config;
	if(!conf || !conf.eslintConfig){
		fis.log.info('using eslint default config.');
		config = {
			useEslintrc: true,
			cwd: projectPath
		}
	}else{
		fis.log.info('using fis-plugin.options as a config.');
		config = conf.eslintConfig;
	}
	var cli = new CLIEngine(config);

	var report = cli.executeOnText(content, file.realpath);
	var formatter = cli.getFormatter();
	if(conf && conf.formatter){
		formatter = conf.formatter;
	}
	fis.log.warn(formatter(report.results));
};