import { Worker } from "./worker";
import { Engineer } from "./engineer";
import { Employee } from "./employee";

//Worker
let w1 = new Worker("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội", 5);
let w2 = new Worker("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội", 4);
let w3 = new Worker("Hoàng Kim Đức", 21, "Nam", "Hà Nội", 3);
//Tao mang luu thong tin worker
let workerArray : Worker[];
workerArray = [w1,w2,w3]; 
//Su dung vong for de in thong tin cac cong nhan
for(let i = 0; i < workerArray.length ; i++){
    workerArray[i].printWorker();
}
//Co the su dung foreach
// workerArray.forEach(item => {
//     item.printWorker();
// })

console.log("--------End printWorker--------");

//Engineer
let en1 = new Engineer("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội","Dev");
let en2 = new Engineer("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội","Test");
let en3 = new Engineer("Hoàng Kim Đức", 21, "Nam", "Hà Nội","BA");
//Tao mang Set luu thong tin ky su
let enset = new Set();
enset.add(en1);
enset.add(en2);
enset.add(en3);
//In thong tin engineer
enset.forEach(item => {
    console.log(item);
});

console.log("--------End printEngineer--------");

//Employee
let em1 = new Employee("Nguyễn Minh Hiếu", 21, "Nam", "Hà Nội", "Job1");
let em2 = new Employee("Nguyễn Quốc Đạt", 21, "Nam", "Hà Nội", "Job2");
let em3 = new Employee("Hoàng Kim Đức", 21, "Nam", "Hà Nội", "Job3");
//Tao mang luu thong tin nhan vien
let employeeArray : Employee[];
employeeArray = [em1,em2,em3];
//in thong tin nhan vien
employeeArray.forEach(item => {
    item.printEmployee();
});

console.log("--------End printEmployee--------");
