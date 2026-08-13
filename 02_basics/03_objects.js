// singleton
// Object.create //object created through constructors 


// object literals
const mySym = Symbol("key1");


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    // mySym: "mykey1",         //this is not the correct way(or correct syntax) of writing symbol type data inside the object though it will not give error but not the correct way
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// Object keys are stored in the form of string (like this -> "name") in the background, whether you write them inside the double quotes or not.
// that is why they can be accessed like this object_name["key_name"]. Also, we can say that this is the more correct way of accessing the keys of an object.

console.log(JsUser.email)
console.log(JsUser["email"])    //email key can be accessed like this as well
console.log(JsUser["full name"])    //this value cannot be accessed through .(dot) as shown below
// console.log(JsUser.full name);      //this will give error
console.log(JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)        //this freezes the object JsUser that means now you cannot change the values of the keys present inside the object JsUser 
JsUser.email = "hitesh@microsoft.com"   //therefore this change is not reflected in the object JsUser
console.log(JsUser);        //{
                            //     name: 'Hitesh',
                            //     'full name': 'Hitesh Choudhary',
                            //     age: 18,
                            //     location: 'Jaipur',
                            //     email: 'hitesh@chatgpt.com',
                            //     isLoggedIn: false,
                            //     lastLoginDays: [ 'Monday', 'Saturday' ],
                            //     [Symbol(key1)]: 'mykey1'
                            //   }
// in the above output as you can see mykey1 is the Symbol type Datatype due to its way of declaration i.e., {[mySym]: "mykey1"}, rather than {mySym: "mykey1",} doing it like this which makes it a string type key
// you can see it by declaring the mySym key like this and display the object in the console window



// declaring a function as a key in a object
JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
    console.log(`Hello JS user, ${this["full name"]}`); //ye jo this keyword hai wo us object ko refer krega jismai ye grretingTwo() function banaya gaya hai i.e., JsUser
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);    //{
                        //     name: 'Hitesh',
                        //     'full name': 'Hitesh Choudhary',
                        //     age: 18,
                        //     location: 'Jaipur',
                        //     email: 'hitesh@microsoft.com',
                        //     isLoggedIn: false,
                        //     lastLoginDays: [ 'Monday', 'Saturday' ],
                        //     greeting: [Function (anonymous)],
                        //     greetingTwo: [Function (anonymous)],
                        //     [Symbol(key1)]: 'mykey1'
                        //   }
                        // as you can see now the greeting() and greetingTwo() methods has been added inside the object user


// another example of using this keyword in nested object and assigning a function after declaring an object
const user = {
    name: {
        firstname: "Aman",
        "last name": "Bhatia"
    },
    age: 25,
    email: "amanbhatia43a@gmail.com"
};

const userMore = {...user, gender: "Male"};

console.log(userMore);
user.getDetails = function({age: a}){

    switch(a){
        case 24: console.log("Age is 24.");
                 break;
        case 25: console.log("Age is 25.");
                 break;
        default: console.log("Age is neither 24 nor 25.");
                 break;
    }
    if(this === user){
        return `User name is ${this["name"]["firstname"]} ${this.name["last name"]} & ${this === user}.`;
    }
    return `Another object.`;
};

console.log(user);
console.log(user.getDetails(userMore));