let person=
{
    Fname:"Zeeshan",
    lname:"Alam",
    age:"31",
    weight:"90"
};
//Accessing object properties
console.log(person["Fname"]);
console.log(person["lname"]);
console.log(person["age"]);

//Add new property in the existing object
person.height=5.5;  //persion["height"]=5.5

console.log(person["height"]);

// To update the peoperty

person["weight"]=100;
console.log(person["weight"]);

//Remove the property from the object

delete person["age"];
console.log(person["age"]);


// Print only property name
//for in loop

for(let x in person)
    {
        //console.log(x);// print only the property
        //console.log(person[x]);// print only value of property
        console.log(x+" "+person[x]);//print property and value together
    }


    