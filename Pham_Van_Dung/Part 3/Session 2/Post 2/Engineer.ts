import { officers } from "./Officers"

export class engineer extends officers {
    private training : string ; 

    constructor (name: string , age: number , gender: string , address: string , training: string  ){
        super(name , age , gender , address ) ;
        this.training = training ;  
    }

    public printForEngineer(){
        console.log();
        console.log("-----------  THONG TIN CUA ENGINEER TREN HE THONG  ----------");
        super.printForOficers ; 
        console.log(" Trainning : " + this.training);
    }
}

