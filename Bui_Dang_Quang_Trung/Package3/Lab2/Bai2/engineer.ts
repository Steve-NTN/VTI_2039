import { Officer } from "./officer";
class Engineer extends Officer{
    private specialized : string;

	constructor(fullname:string, age: number, gender: string, address: string, specialized: string) {
		super(fullname,age,gender,address);
        this.specialized = specialized;
	}
    
    public printEngineer(){
        console.log("Thông tin kỹ sư:");
        super.printOficcer();
        console.log("Ngành đào tạo: " + this.specialized);
    }
}
export{Engineer}