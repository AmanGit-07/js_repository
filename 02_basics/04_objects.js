// const tinderUser = new Object()  //creating object using object Constructor called Singleton
const tinderUser = {};              //can be created like this as well

// console.log(tinderUser);            //this will output empty object :-> {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);            //now the id, name and isLoggedIn keys with there respective value has been added inside tinderUser object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
};

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //method 1 of defining it 
// obj3 = Object.assign({}, obj1, obj2, obj4)  //method 2 of defining it using assign
// console.log(obj3);

const obj3 = {...obj1, ...obj2}     //method 3 of defining it using spread operators
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     //[ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser));    //[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //will tell whether this property is available or not

