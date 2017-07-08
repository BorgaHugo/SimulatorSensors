"use strict";
exports.__esModule = true;
var Sensor = (function () {
    function Sensor(element, typeSensor, value, temperatureUnit) {
        this._element = element;
        this._typeSensor = typeSensor;
        this._value = value;
        this._temperatureUnit = temperatureUnit;
    }
    Sensor.prototype.getElement = function () {
        return this._element;
    };
    Sensor.prototype.setElement = function (element) {
        this._element = element;
    };
    Sensor.prototype.getTypeSensor = function () {
        return this._typeSensor;
    };
    Sensor.prototype.setTypeSensor = function (typeSensor) {
        this._typeSensor = typeSensor;
    };
    Sensor.prototype.getValue = function () {
        return this._value;
    };
    Sensor.prototype.setValue = function (value) {
        this._value = value;
    };
    Sensor.prototype.getTemperatureUnit = function () {
        return this._temperatureUnit;
    };
    Sensor.prototype.setTemperatureUnit = function (temperatureUnit) {
        this._temperatureUnit = temperatureUnit;
    };
    Sensor.prototype.sensorToString = function () {
        var sensorToString = "####################\n";
        sensorToString.concat("Sensor Data:\n");
        sensorToString.concat("element: '", this._element.toString(), "'\n");
        sensorToString.concat("type sensor: '", this._typeSensor.toString(), "'\n");
        sensorToString.concat("value: '", this._value.toString(), "'\n");
        sensorToString.concat("temperature unit: '", this._temperatureUnit.toString(), "'\n");
        return sensorToString;
    };
    return Sensor;
}());
exports.Sensor = Sensor;
