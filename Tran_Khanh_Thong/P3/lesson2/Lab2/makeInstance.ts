import { Gender } from "./Officer";
import Officer from "./Officer";
import Worker from "./Worker";
import Engineer from "./Engineer";
import Employee from "./Employee";
// Worker
const worker1 = new Worker("Le Van A", 30, Gender.MALE, "Ha Noi", 8);
const worker2 = new Worker("Nguyen Thi Ly", 25, Gender.FEMALE, "Ha Nam", 4);
const worker3 = new Worker("Tran Van Nam", 29, Gender.DIFFERENCE, "Ha Noi", 6);
// Engineer
const engineer1 = new Engineer("Pham Hong Phuoc", 30, Gender.MALE, "Thai Nguyen", "Khoa Hoc May Tinh");
const engineer2 = new Engineer("Le Cat Trong Ly", 27, Gender.FEMALE, "Hai Phong", "Am Nhac");
const engineer3 = new Engineer("Nguyen Mai Han", 28, Gender.FEMALE, "Hue", "DEV");
// Employee
const employee1 = new Employee("Tran Van Manh", 26, Gender.MALE, "Ca Mau", "Kiem Toan");
const employee2 = new Employee("Dinh Van Dong", 34, Gender.MALE, "Vung Tau", "Ke Toan");
const employee3 = new Employee("Nguyen Huu Huy",29, Gender.MALE, "Ninh Binh", "Tuyen Dung");

let workSet = new Set();
workSet.add(worker1);
workSet.add(worker2);
workSet.add(worker3);

workSet.forEach((item) =>{
    console.log(item);    
})
let workerArray : object[] =[];
workerArray.push(worker1);
workerArray.push(worker2);
workerArray.push(worker3);

workerArray.forEach((item, index) =>{
    console.log("index", index,"of Array is", item);    
})
// Engineer
let engineerSet = new Set();
engineerSet.add(engineer1);
engineerSet.add(engineer2);
engineerSet.add(engineer3);
engineerSet.forEach((item) =>{
    console.log(item);    
})

let engineerArray : object[] =[];
engineerArray.push(engineer1);
engineerArray.push(engineer2);
engineerArray.push(engineer3);

engineerArray.forEach((item) =>{
    console.log(item);    
});

// Employee Set and Array
let employeeSet = new Set();
employeeSet.add(employee1);
employeeSet.add(employee2);
employeeSet.add(employee3);
employeeSet.forEach((item) =>{
    console.log(item);    
})

let employeeArray : object[] =[];
employeeArray.push(employee1);
employeeArray.push(employee2);
employeeArray.push(employee3);

employeeArray.forEach((item) =>{
    console.log(item);    
});