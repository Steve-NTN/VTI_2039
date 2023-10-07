"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Officer = void 0;
var Officer = /** @class */ (function () {
    function Officer(fullname, age, gender, address) {
        this.fullname = fullname;
        this.age = age;
        this.gender = gender;
        this.address = address;
    }
    /**
     * Getter fullname
     */
    Officer.prototype.getFullname = function () {
        return this.fullname;
    };
    /**
     * Getter age
     */
    Officer.prototype.getAge = function () {
        return this.age;
    };
    /**
     * Getter gender
     */
    Officer.prototype.getGender = function () {
        return this.gender;
    };
    /**
     * Getter address
     */
    Officer.prototype.getAddress = function () {
        return this.address;
    };
    /**
     * Setter fullname
     */
    Officer.prototype.setFullname = function (value) {
        this.fullname = value;
    };
    /**
     * Setter age
     */
    Officer.prototype.setAge = function (value) {
        this.age = value;
    };
    /**
     * Setter gender
     */
    Officer.prototype.setGender = function (value) {
        this.gender = value;
    };
    /**
     * Setter address
     */
    Officer.prototype.setAddress = function (value) {
        this.address = value;
    };
    Officer.prototype.printOficcer = function () {
        console.log("Fullname: " + this.fullname + "Age: " + this.age + "Gender: " + this.gender + "Address: " + this.address);
    };
    return Officer;
}());
exports.Officer = Officer;
