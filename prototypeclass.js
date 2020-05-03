class Employee{
    constructor(eid,name){
        this.eid=eid;
        this.name=name;
    }
}

Employee.prototype.sal=200;
Employee.prototype.display=function(){
    console.log(this.eid,this.name);
}


emp1=new Employee(101,"Zee");
console.log(emp1.eid,emp1.name,emp1.sal);
emp1.display();

emp2=new Employee(108,"Alam");
console.log(emp2.eid,emp2.name,emp2.sal);
emp2.display();