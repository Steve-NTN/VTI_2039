import { officers } from "./Officers"

export class Worker extends officers {
    private rank: number ;
    constructor(name: string , age: number , gender: string , address: string , rank: number ){
        super(name , age , gender , address);
        this.rank = rank ;  
    }
    public printForWorker (){
        console.log("------  THONG TIN CUA WORKER TRÊN HỆ THỐNG   --------");
        super.printForOficers() ; 
        console.log(" Rank : " + this.rank);
    }
}