export class Position{
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

function printForPosition(Position): void{
    console.log("Id: " + Position.getId() + " | " + " Position: " + Position.getName());
}

var pos1 = new Position(1 , 'Kỹ Sư'); 
var pos2 = new Position(2 , 'Teacher'); 

console.log();
console.log('------------- THÔNG TIN CHỨC VỤ TRÊN HỆ THỐNG  ---------');


printForPosition(pos1) ; 
printForPosition(pos2) ; 

