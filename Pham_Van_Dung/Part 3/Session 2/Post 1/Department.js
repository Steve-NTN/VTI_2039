"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
    }
    // id 
    Department.prototype.getId = function () {
        return this.id;
    };
    Department.prototype.setId = function (value) {
        this.id = value;
    };
    // name 
    Department.prototype.getName = function () {
        return this.name;
    };
    Department.prototype.setName = function (value) {
        this.name = value;
    };
    return Department;
}());
exports.Department = Department;
function printForDepartment(department) {
    console.log("Id: " + department.getId() + " | " + "Department: " + department.getName());
}
var dep1 = new Department(1, 'Dev');
var dep2 = new Department(2, 'doctor');
console.log("");
console.log('-------------  THÔNG TIN PHÒNG BAN TRÊN HỆ THỐNG ! --------------');
printForDepartment(dep1);
printForDepartment(dep2);
