"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var worker_1 = require("./worker");
var engineer_1 = require("./engineer");
var employee_1 = require("./employee");
//Worker
var w1 = new worker_1.Worker("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội", 5);
var w2 = new worker_1.Worker("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội", 4);
var w3 = new worker_1.Worker("Hoàng Kim Đức", 21, "Nam", "Hà Nội", 3);
//Tao mang luu thong tin worker
var workerArray;
workerArray = [w1, w2, w3];
//Su dung vong for de in thong tin cac cong nhan
for (var i = 0; i < workerArray.length; i++) {
    workerArray[i].printWorker();
}
//Co the su dung foreach
// workerArray.forEach(item => {
//     item.printWorker();
// })
console.log("--------End printWorker--------");
//Engineer
var en1 = new engineer_1.Engineer("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội", "Dev");
var en2 = new engineer_1.Engineer("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội", "Test");
var en3 = new engineer_1.Engineer("Hoàng Kim Đức", 21, "Nam", "Hà Nội", "BA");
//Tao mang Set luu thong tin ky su
var enset = new Set();
enset.add(en1);
enset.add(en2);
enset.add(en3);
//In thong tin engineer
enset.forEach(function (item) {
    console.log(item);
});
console.log("--------End printEngineer--------");
//Employee
var em1 = new employee_1.Employee("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội", "Job1");
var em2 = new employee_1.Employee("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội", "Job2");
var em3 = new employee_1.Employee("Hoàng Kim Đức", 21, "Nam", "Hà Nội", "Job3");
//Tao mang luu thong tin nhan vien
var employeeArray;
employeeArray = [em1, em2, em3];
//in thong tin nhan vien
employeeArray.forEach(function (item) {
    item.printEmployee();
});
console.log("--------End printEmployee--------");
