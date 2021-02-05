class Parent{
    constructor(){
        this.fatherName = "Knight";
        this.id = "21";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const childName = new Child('Nazifa');
console.log(childName);
