class Position {
    private __id: number;
    private __name: string;

    //Ham khoi tao
    constructor(__id:number, __name:string){
        this.__id = __id;
        this.__name = __name;
    }

    /**
     * Getter _id
     */
	public get_id(): number {
		return this.__id;
	}

    /**
     * Getter _name
     */
	public get_name(): string {
		return this.__name;
	}

    /**
     * Setter _id
     */
	public set_id(value: number) {
		this.__id = value;
	}

    /**
     * Setter _name
     */
	public set_name(value: string) {
		this.__name = value;
	}
 }
 //Ham in thong tin position
 function printPosition (position:Position) :void {
    console.log("Id:"+ position.get_id() + "Name:" + position.get_name());
 }
 //Export
 export{Position, printPosition}