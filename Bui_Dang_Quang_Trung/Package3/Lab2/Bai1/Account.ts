import { Department } from "./Department";
import { Position } from "./Position";
class Account{
    private id :number;
    private email : string;
    private username: string;
    private fullname: string;
    private department: Department;
    private position: Position;
    private createDate: Date;

    //Ham khoi tao
	constructor(id: number, email: string, username: string, fullname: string, department: Department, position: Position, createDate: Date) {
		this.id = id;
		this.email = email;
		this.username = username;
		this.fullname = fullname;
		this.department = department;
		this.position = position;
		this.createDate = createDate;
	}


    /**
     * Getter id
     */
	public getId(): number {
		return this.id;
	}

    /**
     * Getter email
     */
	public getEmail(): string {
		return this.email;
	}

    /**
     * Getter username
     */
	public getUsername(): string {
		return this.username;
	}

    /**
     * Getter fullname
     */
	public getFullname(): string {
		return this.fullname;
	}

    /**
     * Getter department
     */
	public getDepartment(): Department {
		return this.department;
	}

    /**
     * Getter position
     */
	public getPosition(): Position {
		return this.position;
	}

    /**
     * Getter createDate
     */
	public getCreateDate(): Date {
		return this.createDate;
	}

    /**
     * Setter id
     */
	public setId(value: number) {
		this.id = value;
	}

    /**
     * Setter email
     */
	public setEmail(value: string) {
		this.email = value;
	}

    /**
     * Setter username
     */
	public setUsername(value: string) {
		this.username = value;
	}

    /**
     * Setter fullname
     */
	public setFullname(value: string) {
		this.fullname = value;
	}

    /**
     * Setter department
     */
	public setDepartment(value: Department) {
		this.department = value;
	}

    /**
     * Setter position
     */
	public setPosition(value: Position) {
		this.position = value;
	}

    /**
     * Setter createDate
     */
	public setCreateDate(value: Date) {
		this.createDate = value;
	}
}
//Ham in thong tin
function printAccount(account:Account) : void {
    console.log("id: " + account.getId() + " email: " + account.getEmail() + " username: "+ account.getUsername() + " fullname: " + account.getFullname() + " department: " + account.getDepartment().getname() + " position: " + account.getPosition().get_name());
}
//export
export{Account, printAccount}