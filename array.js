let cars=["BMW","AUDY","MARUTI"];

let car=new Array("aaa","aaaa","aa");

console.log(cars);
console.log(car);
console.log(cars[2]);// accessing elements


car[1]="ops";
console.log(car);
//array can have diff type of data
let myarray=["abc","123","String"];
console.log(myarray);

//array can have object also

let person1={
name:"aza",
age:"11"

}
let person2={
    name:"bba",
    age:"31"
    
    }

    let arr=[person1,person2];
    console.log(arr);
    console.log(arr[1]);

    //length of thr array

    console.log(cars.length);

    //looping elements from array

    for(let i=0;i<=cars.length-1;i++){
        console.log(cars[i]);
    }


    //looping elements from array from for off loop.
    for(ele of car){
        console.log(ele);
    }

    //Recognize an array variable --typeof
    console.log(typeof cars);//object

   console.log(Array.isArray(cars));//true


   //Conviting a array in tostring
   console.log(cars.toString());
    // seperate with and character
   console.log(cars.join("*"));    
    // remove the last element
    console.log(cars.pop());
    console.log(cars);

    let fruit=["apple","mango","jaskfruit"];
    //Add new element
    console.log(fruit.push("kivi"));
    console.log(fruit);

    //shift
    let fruits=["apple","mango","jaskfruit"];
    console.log(fruits.shift());

    //slice
    let fruitss=["apple","mango","jaskfruit"];
    console.log(fruitss.slice(1));

    //sort
    let fruitsss=["apple","mango","jaskfruit"];
    console.log(fruitsss.sort());

