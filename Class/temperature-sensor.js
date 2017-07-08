"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sensor_1 = require("./sensor");
var TemperatureSensor = (function (_super) {
    __extends(TemperatureSensor, _super);
    function TemperatureSensor(element, typeSensor, value, temperatureUnits, max_value, min_value) {
        var _this = _super.call(this, element, typeSensor, value, temperatureUnits) || this;
        _this._MAX_VALUE = max_value;
        _this._MIN_VALUE = min_value;
        return _this;
    }
    TemperatureSensor.prototype.temperatureSensor = function () {
        var sensorToString = _super.prototype.sensorToString.call(this);
        sensorToString.concat("-----------------------------\n");
        sensorToString.concat("TemperatureSensor Data:\n");
        sensorToString.concat("MAX_VALUE: '", this._MAX_VALUE.toString(), "'\n");
        sensorToString.concat("MIN_VALUE: '", this._MIN_VALUE.toString(), "'\n");
        return sensorToString;
    };
    TemperatureSensor.randomValue = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    return TemperatureSensor;
}(sensor_1.Sensor));
exports.TemperatureSensor = TemperatureSensor;
