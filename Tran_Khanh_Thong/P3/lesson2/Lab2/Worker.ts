import { Gender }  from "./Officer"; 
import Officer from "./Officer";
class Worker extends Officer{
    level : number;
    constructor(name: string, age: number, gender: Gender, address : string, level: number){
        super(name, age, gender, address);
        this.level = level;
    }

}
export default Worker;