"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Department_1 = require("./Department");
var Position_1 = require("./Position");
var Account_1 = require("./Account");
//Khai bao va khoi tao doi tuong Department
var d1 = new Department_1.Department(1, "Tài Chính");
var d2 = new Department_1.Department(2, "Kỹ Thuật");
var d3 = new Department_1.Department(3, "Sale");
console.log("---Thông tin phòng ban---");
(0, Department_1.printDepartment)(d1);
(0, Department_1.printDepartment)(d2);
(0, Department_1.printDepartment)(d3);
//Khai bao va khoi tao doi tuong Position
var p1 = new Position_1.Position(1, "Dev");
var p2 = new Position_1.Position(2, "Test");
var p3 = new Position_1.Position(3, "BA");
console.log("---Thông tin positon---");
(0, Position_1.printPosition)(p1);
(0, Position_1.printPosition)(p2);
(0, Position_1.printPosition)(p3);
//Khai bao va khoi tao doi tuong Account
var date = new Date();
var acc1 = new Account_1.Account(1, "vanan@gmail.com", "vanan", "Nguyễn Văn An", d1, p1, date);
var acc2 = new Account_1.Account(2, "kimlien@gmail.com", "kimlien", "Phạm Kim Liên", d2, p2, date);
var acc3 = new Account_1.Account(3, "minnhhieu@gmail.com", "minhhieu", "Nguyễn Minh hiếu", d3, p3, date);
console.log("---Thông tin tài khoản---");
(0, Account_1.printAccount)(acc1);
(0, Account_1.printAccount)(acc2);
(0, Account_1.printAccount)(acc3);
