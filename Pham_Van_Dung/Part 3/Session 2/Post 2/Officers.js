"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.officers = void 0;
var officers = /** @class */ (function () {
    function officers(name, age, gender, address) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    // name
    officers.prototype.getName = function () {
        return this.name;
    };
    officers.prototype.setName = function (value) {
        value = this.name;
    };
    // age 
    officers.prototype.getAge = function () {
        return this.age;
    };
    officers.prototype.setAge = function (value) {
        value = this.age;
    };
    // gender 
    officers.prototype.getGender = function () {
        return this.gender;
    };
    officers.prototype.setGender = function (value) {
        value = this.gender;
    };
    // address 
    officers.prototype.getAddress = function () {
        return this.address;
    };
    officers.prototype.setAddress = function (value) {
        value = this.address;
    };
    officers.prototype.printForOficers = function () {
        console.log('Name: ' + this.name + ' Age: ' + this.age + ' Gender: ' + this.gender + ' Address: ' + this.address);
    };
    return officers;
}());
exports.officers = officers;
