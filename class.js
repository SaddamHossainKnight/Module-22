class student{
    constructor(sid=0,sname='Saddam'){
        this.id = sid;
        this.name = sname;
        this.school = "feni victoria collrge"
    }
}
const student1 = new student(21,'Doli');
const student2 = new student(20,'Nazifa');
console.log(student1.id,student2.school);