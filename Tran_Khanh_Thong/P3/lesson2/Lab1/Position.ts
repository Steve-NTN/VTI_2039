class Position{
    id : number;
    name: string;

    constructor(id:number, name: string){
        this.id= id;
        this.name =name;
    }
    getId(): number {
        return this.id
    }
    getName() : string{
        return this.name
    }
    setId(id: number){
        return this.id = id;
    }
    setName(name:string){
        return this.name = name;
    }
}
export default Position