// Immediately Invoked Function Expressions (IIFE)
// IIFE is basically used to remove the pollution caused by the global scope variable
// so IIFE, is basically used to immediatly call the content of the paranthesis just after its declaration

// named IIFE because it is named here as chai()
(function chai(){
    console.log(`DB CONNECTED`);
})();   //if you will not put the semicolon here then the IIFE will get confused that where it should stop the context and it will give error if another IIFE is made below that is y semicolon is imp

// this is unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')