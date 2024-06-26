// datatypes are categorized into two types primitive and non-primitive (i.e., basically how the data is stored in the memory and accessed)
// primitive    (call by value)
//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail=undefined; // or let userEmail; both same

const id=Symbol('123');
const anotherId=Symbol('123');
console.log(id===anotherId);    //false which means that whether you take same type of data and same data Symbol() method will make them different
console.table([id, anotherId]);

const bigNumber = 3456543576654356754n  //when you put n after the number it will become bigInt type and works
console.log(bigNumber);


// Reference type (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);  //symbol
console.log(typeof myFunction); //function but it is called as object function

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap (non-primitive)

// stack memory example
// here copy of the variable myYoutubename is passing to the anothername variable that is why only the anothername value remains same
let myYoutubename="AmanBhatiadotcom";

let anothername=myYoutubename;
anothername="helloworld";

console.log(myYoutubename);
console.log(anothername);

// heap memory example
// here changes that we are doing in the userTwo are changing the actual key of the object which is userOne
let userOne={
    email: "hello@yahoo.com",
    id: 12324
}

let userTwo=userOne;
userTwo.email="hitesh@google.com";
console.log(userOne.email);
console.log(userTwo.email);