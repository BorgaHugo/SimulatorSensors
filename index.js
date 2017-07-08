#!/usr/bin/env node
'use strict';
exports.__esModule = true;
/**
 * Module dependencies.
 */
var temperature_sensor_1 = require("./Class/temperature-sensor");
function simulateData() {
    setInterval(function () {
        console.log(temperature_sensor_1.TemperatureSensor.randomValue(10, 35));
    }, 2000);
}
var program = require('commander');
program
    .version('0.0.1')
    .command('start [optional]')
    .description('Begins start send data sensors.')
    .option('-a, --all', 'Send all parameters sensores in package.')
    .option('-l, --long', '')
    .action(simulateData);
program.parse(process.argv);
