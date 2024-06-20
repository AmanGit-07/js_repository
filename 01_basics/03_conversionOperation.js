let score="anystring"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber=Number(score);
console.log(typeof valueInNumber);  //score converted to Number from string
// console.log(valueInNumber); //33
// console.log(valueInNumber); //NaN when score="33abc"
// console.log(valueInNumber); //1 when score = true
// console.log(valueInNumber); //NaN when score = "anystring"




let isLoggedIn="aman"

let booleanIsLoggedIn=Boolean(isLoggedIn);      //converts number to boolean with the help of inbuilt Boolean method
console.log(booleanIsLoggedIn); //true
console.log(booleanIsLoggedIn); //false when isLoggedIn is empty
console.log(booleanIsLoggedIn); //true even if the variable is filled with string

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// OPERATIONS

let value = 3
let negValue = -value
// console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);   //122
console.log(1 + 2 + "2");   //32

// console.log( (3 + 4) * 5 % 3);

console.log(+true);     //1
console.log(+"");       //0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion