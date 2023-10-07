import { Officer } from "./officer";
class Worker extends Officer{
    private level : number;

	constructor(fullname:string, age: number, gender: string, address: string, level: number) {
		super(fullname,age,gender,address);
        this.level = level;
	}
    
    public printWorker(){
        console.log("Thông tin công nhân");
        super.printOficcer();
        console.log("Level: " + this.level);
    }
}
export{Worker};