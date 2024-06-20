"use strict"; // treat all JS code as newer version

// alert(3+3);  //we are using node.js not browser engine

console.log(3 
    +   // will work but should not write like this
     3) // code readability should be high

console.log('aman')

// official documentation
//mdn docs are not the official documentation for js they are developed by mozilla instead "tc39.es" is the official documentation for js standards

// DATATYPES
// number => 2 to power of 53
// bigInt
// string =>" "
// boolean => true/false
// null => standalone value
// undefined
// symbol => unique
// objects

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;      //it is undefined

console.log(typeof name);
console.log(typeof(age));

onsole.log(typeof undefined); //this will give undefined
console.log(typeof null); //this will give object as output