'use strict';
let person ={
    name : "Chandni",
    age : "Tushar Sharma"
}

// const personFunction = () =>{
//    console.log(person.name + " " + person.age)
// }

function personFunctionmain() {
    console.log(this.name + " " + this.age)
 }

 personFunctionmain.bind(person)();

// const myFunction = () => {
//     console.log(this);
//   };

  function myFunction(){
    console.log(this);
  };
  

  myFunction();

  let undefined = 5;
var Infinity = 5
console.log(undefined)

let myObject = {
    myMethod: function () {
      console.log(this);
    }
  };

  myObject.myMethod();


  var myMethod = function () { 
    console.log(this.a);
  };
  
  var obj1 = {
    a: 2,
    b: 3,
    myMethod: myMethod
  };
  
  var obj2 = {
    a: 3,
    myMethod: myMethod
  };
//   obj2.__proto__ = obj1;
  obj1.myMethod(); // 2
  obj2.myMethod(); // 3
  myMethod.apply( obj1 ); //2
  
myMethod =  myMethod.bind( obj2 ); //3
myMethod()
//  myMethod.call( obj1 ); //2
 
// bind polyfill
let person1 ={
    name : "Chandni",
    age : 26
}

let personFunction = function (classm, attendence) {
    console.log(this.name + " " + this.age + " " + classm + " " + attendence)
 }


 const personFunction1 = personFunction.bind(person1, "one")
 personFunction1("yes");

Function.prototype.personBindFunc = function(...arg){
    let test = this;
    const newarg = arg.slice(1);
    return function(...arg1){
        test.apply(arg[0], [...newarg,...arg1]);

    }
}


const personFunction2 = personFunction.personBindFunc(person1, "two")
personFunction2("no"); 

//Currying

const add = function add(i,j){
    console.log(i+j);
}

const add1 = add.bind(this, 2, 4);
add1();

// SUm-
// add(1)(2)(3) to (n)

// const sum = function(x){
//     return function(y){
//         return y ? sum(x + y) : x
//     }
// }

const sum = x  => y =>  y ? sum(x + y) : x;
console.log(sum(10)(20)(90)())

let string = "TUSHAR";

string = string.split('');

console.log(string);
