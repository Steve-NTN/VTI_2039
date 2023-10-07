export class Department{
    private id: number | string ; 
    private name: string ; 

    constructor (id: number | string , name: string){
        this.id = id ; 
        this.name = name ; 
    }
    // id 
    public getId() {
        return this.id ; 
    }
    public setId(value: number | string){
        this.id = value ; 
    }
    // name 
    public getName(){
        return this.name ; 
    }
    public setName(value: string){
        this.name = value ; 
    }
}

function printForDepartment(department: Department) : void {
    console.log("Id: " + department.getId() + " * " + "Department: " + department.getName());
}


var dep1 = new Department(1 , 'Dev') ; 
var dep2 = new Department(2 , 'doctor') ; 
console.log("");
console.log('-------------  THÔNG TIN PHÒNG BAN TRÊN HỆ THỐNG ! --------------');
printForDepartment(dep1); 
printForDepartment(dep2); 


