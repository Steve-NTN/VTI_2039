import { Department,printDepartment } from "./Department";
import { Position, printPosition } from "./Position";
import { Account, printAccount } from "./Account";

//Khai bao va khoi tao doi tuong Department
let d1 = new Department(1,"Tài Chính");
let d2 = new Department(2, "Kỹ Thuật");
let d3 = new Department(3,"Sale");
console.log("---Thông tin phòng ban---");
printDepartment(d1);
printDepartment(d2);
printDepartment(d3);

//Khai bao va khoi tao doi tuong Position
let p1 = new Position(1,"Dev");
let p2 = new Position(2,"Test");
let p3 = new Position(3,"BA");
console.log("---Thông tin positon---");
printPosition(p1);
printPosition(p2);
printPosition(p3);

//Khai bao va khoi tao doi tuong Account
let date: Date = new Date('06-10-2023');
let acc1 = new Account(1, "vanan@gmail.com", "vanan", "Nguyễn Văn An", d1, p1, date);
let acc2 = new Account(2, "kimlien@gmail.com", "kimlien", "Phạm Kim Liên", d2, p2, date);
let acc3 = new Account(3, "minnhhieu@gmail.com", "minhhieu", "Nguyễn Minh hiếu", d3, p3, date);
console.log("---Thông tin tài khoản---");
printAccount(acc1);
printAccount(acc2);
printAccount(acc3);