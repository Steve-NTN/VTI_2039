import Department from "./Department";
import Position from "./Position";
class Account{
    id: number;
    email : string;
    userName: string;
    fullName: string;
    department: Department;
    position : Position;
    createDate: Date;
    constructor(id: number, email:string, userName:string, fullName: string, department: Department, position:Position, createDate:Date ){
        this.id = id;
        this.email = email;
        this.userName = userName;
        this.fullName = fullName;
        this.department = department;
        this.position = position;
        this.createDate = createDate;        
    }
    
    public getId() : number {
        return this.id
    }
    public getEmail() : string {
        return this.email
    }
    public getUserName() : string {
        return this.userName
    }
    public getFullName() : string {
        return this.fullName
    }
    public getDepartment() : object {
        return this.department
    }
    public getPosition() : object {
        return this.position
    }
    public getCreateDate() : Date {
        return this.createDate
    }
    public setId(id: number) : number {
        return this.id =id
    }
    public setEmail(email : string) : string {
        return this.email = email
    }
    public setUserName(userName : string) : string {
        return this.userName =userName;
    }
    public setFullName(fullName :string) : string {
        return this.fullName =fullName
    }
    public setDepartment(value : Department) : object {
        return this.department = value;
    }
    public setPosition(value: Position) : object {
        return this.position =value;
    }
    public setCreateDate(value : Date) : Date {
        return this.createDate =value;
    }
    
}
export default Account;
