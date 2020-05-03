function student(){

this.name="Zeeshan";
this.gender="male"

}

student.prototype.age=31;

stu=new student();
console.log(stu.name,stu.gender,stu.age);

stu1=new student();
console.log(stu1.name,stu1.gender,stu1.age);