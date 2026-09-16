const user = {
    name: {
        firstname: "Aman",
        lastname: "Bhatia"
    },
    age: 25,
    email: "amanbhatia43a@gmail.com"
};

const nums = [1,2,3,4,5];
const str = "Hello world";
const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('UK', 'United Kingdom');
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);

// for(const x of nums){console.log(`${x} is the value of nums.`);}
// for(const x of str){console.log(`${x} is the value of str.`);}
// for(const [key, value] of map){console.log(`${key} -> ${value}`);}
// for(const key in user){
//     if(typeof user[key] === "object"){
//         console.log(`${key}: {`);
//         for(const nestedKey in user[key]){
//             console.log(`${nestedKey}: ${user[key][nestedKey]}`);
//         }
//         console.log(`}`);
//     } else {
//         console.log(`${key}: ${user[key]}`);
//     }
// }
// for(const val of set){console.log(`${val} of set.`);}

const filtered = nums.filter( (e) => e>3 );
console.log("filtered --->>> ",filtered);
const mapped = nums.map( (e) => e*2 );
console.log("mapped --->>> ",mapped);
const reduced = nums.reduce( (acc, e) => acc + e, 10 );
console.log("reduced --->>> ",reduced);
console.log("original --->>> ",nums);


function func(){
    console.log(`func() function is executed.`);
}
func();

const arrow = () => console.log(`arrow function is executed.`);
arrow();

// functions with arguments & parameters
function func2(us){
    us.gender = "Male";
    console.log("us object -> ", us);
    us.addDetails = (x) => {
        us.salary = x
        console.log(`we'll add some details in the user object`);
        console.log(`value of x is ${x}`);
    };
}
func2(user);
console.log("original user object after function call is --->>> ", user);
/*since, we've destructured the user object here, therefore obj creates a NEW object containing the remaining, own enumerable properties of `user`.Therefore, `obj` and `user` refer to different objects.
but obj itself is a new object, but the nested name object is not cloned.This happens because the spread syntax performs a shallow copy.
for example :-
obj.name.firstname = "John"; would also change -> "user.name.firstname", because both obj.name and user.name point to the same nested object.*/
function func3({age: g, ...obj}){
    console.log(`age fetched from the user object is --->>> ${g}`);
    console.log(`& Other details are --->>> `, obj);
    obj.getDetails = () => console.log(`name is ${obj["name"]["firstname"]} ${obj["name"]["lastname"]}, email is ${obj.email} & gender is ${obj.gender}`);
    console.log("obj{} object after changes being done", obj);
}
func3(user);
console.log("original user object after func3() call is --->>> ", user);

user.addDetails(100000);

console.log("After calling addDetails:", user);
console.log("Salary:", user.salary);

function func4(username = "John"){
    let varaible = username;
    return console.log(varaible);
}
func4();    //o/p -> John
func4("Samson"); //o/p -> Samson

const result = function func(a,b){
    return a+b;
}
// func(10,20); //this will give error because: func, when used here, is the function expression's internal name and is not normally available outside the function.
console.log(result(10,20));
/*
result is the variable/reference through which you call the function.
Also, technically result isn't the "calling function". The function is the value stored in result; result is a reference to that function
 */




// promise examples 
// const user = {
//     name: {
//         firstname: "Aman",
//         lastname: "Bhatia"
//     },
//     age: 25,
//     email: "amanbhatia43a@gmail.com"
// }

// const pobj = new Promise( function(resolve, reject){
//     let error = false;
//     setTimeout( () => {
//         if(!error){
//             resolve(user);
//         } else {
//             reject(`Promise rejected.`);
//         }
//     })
// });

// pobj
// .then( function(obj){
//     console.log(obj);
// })
// .catch( function(er){
//     console.log(er);
// })
// .finally( function(){
//     console.log(`function executed.`)
// });

// new Promise( function(resolve, reject){
//     let error = false;
//     setTimeout( () => {
//         if(!error){
//             resolve(user);
//         } else {
//             reject(`Promise rejected.`);
//         }
//     })
// }).then( function(obj){
//     console.log(obj);
//     return obj["name"];
// })
// .then( function(name){
//     console.log(name);
//     return name["firstname"];
// })
// .then( function(name){
//     console.log(name);
//     return name;
// })
// .catch( function(er){
//     console.log(er);
// })
// .finally( function(){
//     console.log(`function executed.`)
// });

const pobj = new Promise( function(resolve, reject){
    let error = false;
    setTimeout( () => {
        if(!error){
            resolve(user);
        } else {
            reject(`Promise rejected.`);
        }
    }, 1000);
});

async function consumePromise(){
    try {
        const result = await pobj;
        console.log(result);
    } catch (er) {
        console.log(er);
    }
}
consumePromise();

