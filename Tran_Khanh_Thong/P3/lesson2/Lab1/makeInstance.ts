import Account from "./Account";
import Position from "./Position";
import Department from "./Department";
const NhanVien = new Position(1,"nhan vien");
const HanhChinh = new Department(1, "hanh chinh");
const Account1 = new Account(1,"nguyenvana@gmail.com","A", "Nguyen Van A", NhanVien, HanhChinh, new Date('2-3-2023'));


// console log ra man hinh:
console.log(`Account1 : ${Account1.fullName} ; Nhan vien : ${NhanVien.name} ; phong Hanh Chinh : ${HanhChinh.name}`);

