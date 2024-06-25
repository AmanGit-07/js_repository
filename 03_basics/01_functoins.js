function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

//                    here number1 and number2 are called parameters
function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

// here we are passing the arguments
addTwoNumbers(3,4)      //7
addTwoNumbers(3, "4")   //34
addTwoNumbers(3, "a")   //3a

function addNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addNumbers(3, 5)

console.log("Result: ", result);



function loginUserMessage(username){
    return `${username} just logged in`;
}

loginUserMessage("hello");      //this will not display anything as there is no output to show in console window
console.log(loginUserMessage("aman"));  //it will show return statement in the console window
console.log(loginUserMessage()) //{undefined just logged in} because we've not taken any argument and there is nothing inside username variable

// loginUser function 1
// function loginUser(username){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// loginUser function 2
function loginUser(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// output for loginUser 1
// console.log(loginUser("hitesh"))   //will show {hitesh just logged in}
// console.log(loginUser())        //will show {Please enter a username and undefined} as we've not passed anytng
// output for loginUser 2
console.log(loginUser("hitesh"))//will show {hitesh just logged in}, this arg value will overwrites paravalue
console.log(loginUser())       //will show {sam just logged in}, but if not passed any arg it will take paravalue

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000, 23, 232, 2343456))    //this will show{[ 500, 2000, 23, 232, 2343456 ]} because first two values has been stored in params val1, val2 and the rest of other args will be stored in rest operator num1 i.e., no matter how many args are getting passed after the first two params all will be stored in the form of array in num1 parameter with the help of rest operator
// though it is a spread operator actually but it depends on its usecase that how it is used inside the code, here it is using as rest operator and accumulating all the data or the args in it in a single array


// passing object as an argument in a function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)  //{Username is hitesh and price is undefined} this is the output
handleObject({
    username: "sam",
    price: 399
})                  //{Username is sam and price is 399} this is the output

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[3]
}

console.log(returnSecondValue(myNewArray));      //{600} is the output here because myNewArray has been passed here as an arg
console.log(returnSecondValue([200, 400, 500, 1000]));      //{1000} is the output here because we are passing an array and with the elements here specifically
