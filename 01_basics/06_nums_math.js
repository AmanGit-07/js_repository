const score = 400
console.log(score);

const balance = new Number(100)
const strnum = new String("200");
// console.log(balance);
// console.log(strnum);

console.log(typeof Number(strnum));
console.log(typeof String(balance));
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));        //will set decimal places upto 2 :-> 100.00

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString());     //by default gives value according to USA standards

// Values present inside js already of a Number object
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //give the random number between the range from min to max