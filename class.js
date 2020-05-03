class Student{

    //Created constructure
    constructor(id,name,grade){
        //local variable, this used to make variable belong to the class
        this.sid=id;
        this.sname=name;
        this.sgrade=grade;
    }

    //created method
    // setDetails(id,name,grade){
    //     this.sid=id;
    //     this.sname=name;
    //     this.sgrade=grade;
    // }

    display(){
        console.log(this.sid,this.sname,this.sgrade);
    }
}

let stu=new Student(101,"Zeehan Alam","B+");
//stu.setDetails(21,"Zeeshan Alam","A+");
stu.display();