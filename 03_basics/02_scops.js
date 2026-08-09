// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c=30
    console.log("INNER: ", a);      //100
}
console.log(a);         //300
// console.log(c);         //30 (though var is declard 300 outside the scope but still it gives 30,that is why u should never use var)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    // console.log(website);    //will give error as website is not defined

     two()

}

one()       //will give hitesh as output



if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);        //hitesh youtube <-output
    }
    // console.log(website);
}

// console.log(username);



// ++++++++++++++++++ interesting ++++++++++++++++++

// here we can access the function before the function declaration as this function is not hoisted on any other variable or something
console.log(addone(5))      //this will give output as 6

function addone(num){
    return num + 1
}


// but here we've hoisted addTwo() function in a variable that is why we cannot access the function before the declaration of the function that is why it will give error
// addTwo(5)
const addTwo = function(num){   //ise hum expressions kehte hai
    return num + 2  // ----------------- JS mai varaibles very powerfull can hold anything (func, val, etc.)
}
console.log(addTwo(5))


// in case of above two functions addOne and addTwo we've tried to use the functions before their initialization, but got error in case of addTwo(), why so this is because of hoisting.
// matlab agar function ko initialize krdia kisi variable ke sath to hum use uske baad hi call kr skte hai or agar normally define hi kia hai to use uski definition se pehle use kr skte hai.