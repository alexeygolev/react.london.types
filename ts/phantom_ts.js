"use strict";
var Data = (function () {
    function Data(value) {
        this.value = value;
    }
    return Data;
}());
var Validated = (function () {
    function Validated() {
    }
    return Validated;
}());
var Unvalidated = (function () {
    function Unvalidated() {
    }
    return Unvalidated;
}());
function make(input) {
    return new Data(input);
}
exports.make = make;
var checkLength = function (length, str) {
    return str.length <= length;
};
function validate(data) {
    return checkLength(3, data.value) ? new Data(data.value) : null;
}
exports.validate = validate;
function use(data) {
    console.log('using ' + data.value);
}
exports.use = use;
