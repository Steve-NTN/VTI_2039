"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDepartment = exports.Department = void 0;
var Department = /** @class */ (function () {
    //Hàm khởi tạo (Constructor)
    function Department(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    /**
     * Getter id
     */
    Department.prototype.getid = function () {
        return this._id;
    };
    /**
     * Getter name
     */
    Department.prototype.getname = function () {
        return this._name;
    };
    /**
     * Setter id
     */
    Department.prototype.setid = function (value) {
        this._id = value;
    };
    /**
     * Setter name
     */
    Department.prototype.setname = function (value) {
        this._name = value;
    };
    return Department;
}());
exports.Department = Department;
//Khai báo hàm in thông tin phòng ban:
//sử dụng kiểu dữ liệu tùy chỉnh (Department) làm kiểu dữ liệu cho một biến hoặc tham số. 
//Trong trường hợp này, Department là một lớp (class) đã định nghĩa trước đó để biểu diễn các đối tượng phòng ban trong hệ thống của bạn.
function printDepartment(department) {
    console.log("ID:" + department.getid() + "Name:" + department.getname());
}
exports.printDepartment = printDepartment;
