class Test{

    static a=10;
    b=20;

    static m1(){
        console.log("this is m1 static method")
    }

    m2(){
        console.log("This is m2 non-static method")
    }
}
console.log(Test.a);
Test.a=100;
console.log(Test.a);
console.log(Test.b);

Test.m1();
let t=new Test();
t.b;
t.m2();