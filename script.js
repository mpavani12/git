
// console.log(2*3);
//variables
// var x = 51;
// var y = 61;
// var z = x + y;
// console.log(z)


// var x=12;
// var y="hii";
// console.log(x+y)

//Operators
// console.log(4**2);
//  var x=10;
//  var y="10";
//  console.log(x==y);
//  console.log(x===y);

 //conditionals
//  var x=10;
//  var y=20;
//  if(x<y){
//     console.log("x is less than y")
//  }
//  else{
//     console.log("y is greater then x")
//  }

//loops
// for(var i=0;i<=5;i++){ 
//     console.log(i);
// }


//ES6
//var
// var a=10;
// var a=20;
// console.log(a);

//let
// let b=10;
// b=20; // here can't redeclare with same value ,but perform reinitilize
// console.log(b);

//const
// const c=10;
// const d=20; //can't perform re-initilization and re-declaration
// console.log(d);
// let-can resign,can't re-declare
//const -can't re-assign,re-declare

//functions
// function myFun(){
//     console.log("hii"); 
// }
// myFun();

// function myFun(a,b){
//     return a+b; 
// }
// //myFun(2,5);
// console.log(myFun(2,5))

//normal 
// const addition=function myFun(a,b){    
//     return a+b; 
// }
// console.log(addition(2,5))
//anonymous
// const sub=function (a,b){    
//     return a-b; 
// }
// console.log(sub(2,5))
//Arrow func
// const mul=(a,b) => {    
//     return a*b; 
// }
// console.log(mul(2,5))
//Arrow func using singlie line/shorter version
// const div=(a,b) => a/b;
// console.log(div(2,5))

//Arrays
let arr=[101,"hi",89.0,true]
let arr2=[100,200]
arr[0]=10;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
let newArr=[...arr , ...arr2];
console.log(newArr);
let obj={
    id:101,
    name:"riya",
    age:23
}
console.log(obj);
console.log(obj.age);

let data=[
    {
        id:101,
        name:"riya"
    },
    {
        id:102,
        name:"vincent"
    }
]
console.log(data[0].name);

