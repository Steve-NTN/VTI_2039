import { officers } from "./Officers"

export class staff extends officers  {
    private job: string ; 
    
    constructor (name: string , age: number , gender: string , address: string , job : string){
        super(name , age , gender , address) ; 
        this.job = job ; 
    }

    public printForStaff(){
        console.log("");
        console.log("----------   THONG TIN STAFF TREN HE THONG   ---------");
        super.printForOficers ; 
        console.log(" job: " + this.job);
    }
}