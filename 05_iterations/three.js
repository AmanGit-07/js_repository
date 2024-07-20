// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


// Maps
// It is similar to objects.
// Maps has unique key,value pairs and it stores the value in the same order in which it is entered.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
// OUTPUT
// Map(3) {
//   'IN' => 'India',
//   'USA' => 'United States of America',
//   'Fr' => 'France'
// }


// Now, Applying for of loop on maps
for (const key of map) {
    console.log(key);       // will give an array of the key and value pair like, [ 'IN', 'India' ]
}
// for (const [key, value] of map) {
//     console.log(key, ':-', value);       //whereas, this gives key and value separately of a particular pair
// }


// ON OBJECTS
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for of on objects does not work it gives error:- that it is not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }