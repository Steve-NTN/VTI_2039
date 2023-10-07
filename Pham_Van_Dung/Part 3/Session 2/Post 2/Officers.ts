export class officers{
    private name: string ; 
    private age: number ; 
    private gender: string ; 
    private address: string; 

    constructor (name: string , age: number , gender: string , address: string){
        this.name = name ; 
        this.age = age ; 
        this.gender = gender ; 
        this.address = address; 
    }
    // name
    
    public getName (){
        return this.name ; 
    }
    public setName(value: string){
        value = this.name ; 
    }

    // age 
    public getAge (){
        return this.age ; 
    }
    public setAge(value: number){
        value = this.age ; 
    }

    // gender 
    public getGender(){
        return this.gender ; 
    }
    public setGender(value: string){
        value = this.gender ; 
    }

    // address 
    public getAddress (){
        return this.address ; 
    }
    public setAddress(value: string| number){
        value = this.address ; 
    }
    // print 
    public printForOficers (){
        console.log('Name: ' + this.name + ' Age: ' + this.age + ' Gender: ' + this.gender + ' Address: ' + this.address);
    }
} 

