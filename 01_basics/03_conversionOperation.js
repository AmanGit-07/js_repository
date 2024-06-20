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


// Operations