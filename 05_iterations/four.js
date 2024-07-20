// whereas in case of OBJECTS "for in" loop is used
const forof_obj={
    name:"ahd",
    age:23,
    email:"ahd@gmail.com"
}
for (const property in forof_obj){
    // console.log(`${property} : ${forof_obj[property]}`);
}


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


// we can use for in loop with array as well, but it gives the index value of an element as a key as shown below. This is because arrays are a type of objects whose keys are numbers from 0 to n and are unchangeable. That is why objects were made such that key of own choice could be made.
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(`${key} & ${programming[key]}`);    //0 & js
}


// since map is not iterable that is why for in loop does not works on map
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }