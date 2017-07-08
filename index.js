#!/usr/bin/env node
'use strict';
/**
 * Module dependencies.
 */

function simulateData() {
	console.log("as");
}

var program = require('commander');

program
  .version('0.0.1')
  .command('start [optional]')
  .description('Begins start send data sensors.')
  .option('-a, --all','Send all parameters sensores in package.')
  .option('-l, --long','')
  .action(simulateData);
program.parse(process.argv);