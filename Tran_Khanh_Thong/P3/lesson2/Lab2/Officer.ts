enum Gender {
    MALE="male",FEMALE ="female",DIFFERENCE ="difference"
}
class Officer{
    name: string;
    age: number;
    gender : Gender;
    address : string;

    constructor(name: string, age: number, gender: Gender, address : string ){
        this.name = name;
        this.age =age;
        this.gender = gender;
        this.address = address;
    }
    
}
export {Gender}
export default Officer; 