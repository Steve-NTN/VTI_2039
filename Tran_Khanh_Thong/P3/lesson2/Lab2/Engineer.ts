import { Gender }  from "./Officer"; 
import Officer from "./Officer";
class Engineer extends Officer {
    trainingIndustry : string;
    constructor(name: string, age: number, gender: Gender, address : string, trainingIndustry:string){
        super(name, age, gender, address);
        this.trainingIndustry = trainingIndustry;
    }
}
export default Engineer;