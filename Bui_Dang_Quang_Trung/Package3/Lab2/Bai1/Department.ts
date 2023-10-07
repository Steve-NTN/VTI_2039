class Department{
    private _id: number;
    private _name: string;

    //Hàm khởi tạo (Constructor)
    constructor(_id:number, _name: string){
        this._id = _id;
        this._name = _name;
    }

    /**
     * Getter id
     */
	public getid(): number {
		return this._id;
	}

    /**
     * Getter name
     */
	public getname(): string {
		return this._name;
	}

    /**
     * Setter id
     */
	public setid(value: number) {
		this._id = value;
	}

    /**
     * Setter name
     */
	public setname(value: string) {
		this._name = value;
	}
}
    //Khai báo hàm in thông tin phòng ban:
    //sử dụng kiểu dữ liệu tùy chỉnh (Department) làm kiểu dữ liệu cho một biến hoặc tham số. 
    //Trong trường hợp này, Department là một lớp (class) đã định nghĩa trước đó để biểu diễn các đối tượng phòng ban trong hệ thống của bạn.
function printDepartment(department:Department) : void {       //Kiểu dữ liệu void không trả về giá gtrị mà chỉ in ra kết quả
    console.log("ID:" + department.getid() + "Name:" +department.getname());
}
//export
export {Department, printDepartment}
