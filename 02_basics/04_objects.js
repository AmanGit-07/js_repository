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

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //will tell whether this property is available or not true or false

// +++++++++++++++++++OBJECT DESTRUCTURING++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
};

// console.log(course.courseInstructor);

// const {courseInstructor} = course;       //for ouptput 1
const {courseInstructor: instructor} = course;      //for output 2

// console.log(courseInstructor);           //of expression 1
console.log(instructor);                    //of expression 2


// OBJECT DESTRUCTRING INSIDE A FUNCTION PARAMETER IN REACT
// const navbar=({companyName})=>{ //here we are destructring the companyName 

// };
// navbar(company="Name");     //here we are passing the company name key of an object 


// API comes in this format called json which is actually an object type
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

// url of the API: 'https://randomuser.me/api/'
// A sample API example
// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }
