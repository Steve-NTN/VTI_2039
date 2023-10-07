import { Position } from "./Position";
import { Department} from "./Department"; 

class Account {
    private id: string | number ; 
    private email: string | number ; 
    private userName: string ; 
    private fullName: string ; 
    private department: Department ; 
    private position: Position ; 
    private createDate: Date ; 
    
    constructor(id: string|number , email:string|number ,
                userName:string , fullName:string ,
                department: Department ,  position: Position , 
                createDate: Date , 
        ){
            this.id = id ; 
            this.email = email ; 
            this.userName = userName ; 
            this.fullName = fullName ; 
            this.department = department ; 
            this.position = position ; 
            this.createDate = createDate ; 
    }
    // Id  
    public getId(){
        return this.id = 0 ; 
    }
    public setId(value: string | number){
        this.id = value ; 
    }
    // email 
    public getEmail(){
        return this.email = '' ; 
    }
    public setEmail(value: string | number){
        this.email = value ; 
    }
    
    // UserName 
    public getUserName(){
        return this.userName = '' ;  
    }
    public setUserName(value: string){
        this.userName = value ; 
    }

    // fullName 
    public getFullName(){
        return this.fullName = '' ; 
    }
    public setFullName(value: string){
        this.fullName = value ; 
    }
    // Department 
    public getDepartment(){
        return this.department  ; 
    }
    public setDepartment(value: Department ){
        this.department = value ; 
    }

    // position
    public getPosition(){
        return this.position  ; 
    }
    public setPosition(value: Position){
        this.position = value ; 
    }
    // Date 
    public getCreateDate(){
        return this.createDate ; 
    }
    public setCreateDate(value: Date){
        this.createDate = value ; 
    }

}

function Instance (Account): void{
    console.log("Id: " + Account.getId() +
                " UserName: " + Account.getUserName() + 
                " FullName: " + Account.getFullName() + 
                " Department: " + Account.getDepartment() +
                " Position: " + Account.getPosition()  
    );   
}

var pos1 = new Position(1 , 'Kỹ Sư'); 
var pos2 = new Position(2 , 'Teacher'); 
var dep1 = new Department(1 , 'Dev') ; 
var dep2 = new Department(2 , 'doctor') ; 

var date: Date = new Date('2003-12-11') ;

var acc1 = new Account(1, "dungmickey03@gmail.com", "DungBn", "PhamVanDung", dep1, pos1, date); 

console.log();  
console.log("--------   THÔNG TIN ACCOUNT TRÊN HỆ THỐNG   ---------");
console.log(acc1);
