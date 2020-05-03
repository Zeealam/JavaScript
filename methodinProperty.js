let employee={
employeename:"Zeeshan",
empid:12,
bascisal:5000000,

bonus: function()
{
    return((this.bascisal *10)/100);
}

}

console.log(employee["employeename"]);
console.log(employee.bonus());