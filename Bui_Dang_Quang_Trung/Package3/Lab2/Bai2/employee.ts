import { Officer } from "./officer";
class Employee extends Officer{
    private job : string;


	constructor(fullname:string, age: number, gender: string, address: string, job: string) {
		super(fullname,age,gender,address);
        this.job = job;
	}

    public printEmployee(){
        console.log("Thông tin nhân viên:");
        super.printOficcer();
        console.log("Công việc: " + this.job);
    }
    
}
export{Employee};