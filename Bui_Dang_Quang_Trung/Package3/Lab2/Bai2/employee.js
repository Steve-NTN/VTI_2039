"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var officer_1 = require("./officer");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fullname, age, gender, address, job) {
        var _this = _super.call(this, fullname, age, gender, address) || this;
        _this.job = job;
        return _this;
    }
    Employee.prototype.printEmployee = function () {
        console.log("Thông tin nhân viên:");
        _super.prototype.printOficcer.call(this);
        console.log("Công việc: " + this.job);
    };
    return Employee;
}(officer_1.Officer));
exports.Employee = Employee;
