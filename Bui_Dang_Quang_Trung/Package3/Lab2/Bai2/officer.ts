class Officer {
    private fullname : string;
    private age : number;
    private gender: string;
    private address : string;


	constructor(fullname: string, age: number, gender: string, address: string) {
		this.fullname = fullname;
		this.age = age;
		this.gender = gender;
		this.address = address;
	}
    

    /**
     * Getter fullname
     */
	public getFullname(): string {
		return this.fullname;
	}

    /**
     * Getter age
     */
	public getAge(): number {
		return this.age;
	}

    /**
     * Getter gender
     */
	public getGender(): string {
		return this.gender;
	}

    /**
     * Getter address
     */
	public getAddress(): string {
		return this.address;
	}

    /**
     * Setter fullname
     */
	public setFullname(value: string) {
		this.fullname = value;
	}

    /**
     * Setter age
     */
	public setAge(value: number) {
		this.age = value;
	}

    /**
     * Setter gender
     */
	public setGender(value: string) {
		this.gender = value;
	}

    /**
     * Setter address
     */
	public setAddress(value: string) {
		this.address = value;
	}

    public printOficcer(){
        console.log("Fullname: " + this.fullname + "Age: " + this.age + "Gender: " + this.gender + "Address: " + this.address);
    }
}
export {Officer};