"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("./Position");
var Department_1 = require("./Department");
var Account = /** @class */ (function () {
    function Account(id, email, userName, fullName, department, position, createDate) {
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.department = department;
        this.position = position;
        this.createDate = createDate;
    }
    // Id  
    Account.prototype.getId = function () {
        return this.id = 0;
    };
    Account.prototype.setId = function (value) {
        this.id = value;
    };
    // email 
    Account.prototype.getEmail = function () {
        return this.email = '';
    };
    Account.prototype.setEmail = function (value) {
        this.email = value;
    };
    // UserName 
    Account.prototype.getUserName = function () {
        return this.userName = '';
    };
    Account.prototype.setUserName = function (value) {
        this.userName = value;
    };
    // fullName 
    Account.prototype.getFullName = function () {
        return this.fullName = '';
    };
    Account.prototype.setFullName = function (value) {
        this.fullName = value;
    };
    // Department 
    Account.prototype.getDepartment = function () {
        return this.department;
    };
    Account.prototype.setDepartment = function (value) {
        this.department = value;
    };
    // position
    Account.prototype.getPosition = function () {
        return this.position;
    };
    Account.prototype.setPosition = function (value) {
        this.position = value;
    };
    // Date 
    Account.prototype.getCreateDate = function () {
        return this.createDate;
    };
    Account.prototype.setCreateDate = function (value) {
        this.createDate = value;
    };
    return Account;
}());
function Instance(Account) {
    console.log("Id: " + Account.getId() +
        " UserName: " + Account.getUserName() +
        " FullName: " + Account.getFullName() +
        " Department: " + Account.getDepartment() +
        " Position: " + Account.getPosition());
}
var pos1 = new Position_1.Position(1, 'Kỹ Sư');
var pos2 = new Position_1.Position(2, 'Teacher');
var dep1 = new Department_1.Department(1, 'Dev');
var dep2 = new Department_1.Department(2, 'doctor');
var date = new Date('2003-12-11');
var acc1 = new Account(1, "dungmickey03@gmail.com", "DungBn", "PhamVanDung", dep1, pos1, date);
console.log();
console.log("--------   THÔNG TIN ACCOUNT TRÊN HỆ THỐNG   ---------");
console.log(acc1);
