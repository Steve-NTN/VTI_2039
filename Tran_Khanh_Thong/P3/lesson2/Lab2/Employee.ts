import { Gender }  from "./Officer"; 
import Officer from "./Officer";
class Employee extends Officer{
    job : string;
    constructor(name: string, age: number, gender: Gender, address : string,job:string){
        super(name, age, gender, address);
        this.job = job;        
    }
    
}
export default Employee;