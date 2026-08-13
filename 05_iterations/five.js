const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)         //here we are giving the reference of the function (printMe) that we are using rather than calling that function and executing it here which is printMe() X

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

/*
SUMMARY :-
forEach( function(){} ) -> method ke andr jo fun hai it's called callback func().
& hum callback function ka name nahi dete kabhi bhi, agar wo bahr defined ho to uska ref pass krdete only.
& this forEach() method does not return any value, even if you tries to return something it'll still give undefined. 
*/