const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);    //{}

console.log(gameName.length);
console.log(gameName.toUpperCase());    //HITESH-HC-COM   this is the output as you can see toUpperCase() method does not changes the original string because of the stack and heap memory concept
console.log(gameName);      //[String: 'hitesh-hc-com']   this is the output

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    hello      hjjjj"
console.log(newStringOne);
console.log(newStringOne.trim());
// trim() method only works on the end of the string but not in the middle therefore the output is :->[hitesh    hello      hjjjj]

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))    //https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

console.log(url);       //https://hitesh.com/hitesh%20choudhary