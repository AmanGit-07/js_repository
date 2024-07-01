const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);   //this will give the whole context of the user object
    }

}

user.welcomeMessage()           //hitesh , welcome to website
user.username = "sam"
user.welcomeMessage()           //sam , welcome to website

console.log("this keyword",this);           //this will give empty object because we are inside the node environment here
// earlier there was only one way to execute the js in the browser, the engine that was responsible to execute the js inside the browser was only one and now we have distributed that engine in multiple ones. (like node, bun, dnode) now it is stand alone. The engine that works in the browser has the global object window that is why whenever you do console.log(this) in any browser you'll find window object as an output, and here there is only node environment and it does not have any global object that is why it is giving empty object.



// function chai(){
//     let username = "hitesh"
//     // console.log(this.username);     //you cannot access the variable using this keyword inside a function
//     console.log(this)           //but it will give a global object here this means this has some value in a func
// }
// chai()


// here we are actually declaring the function in a variable as an anonymous function
const chai = function () {
    let username = "hitesh"
    console.log(this.username);
}
// chai() this will give undefined because chai is a variable actually that stores anonymous function
console.log(chai)


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);      //{} this will give empty object as an output because we cannot access 'this' inside arrow function here
// }
// chai()


// normal arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 5));       //8 as output

// arrow function as an implicit return function
// const addTwo = (num1, num2) => num1 + num2
// or
// const addTwo = (num1, num2) => (num1 + num2)    // if you write the return statement in paranthesis and not in curly braces thant there is no need to write the return keyword
// or
// const addTwo = (num1, num2) => `${num1 + num2}`     //this will also give but it's type will be STRING
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 5));      //for the last function it will give output as {username: "hitesh"} as num1 and num2 are not used
