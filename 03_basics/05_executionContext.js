/*
Javascript execution context :- iska matlab js mai hai ki ye code kaise execute hoga aur ye code kaise run hoga ye sab execution context mai hota hai.
jab bhi koi file hoti hai js ki execute hoti hai to sabse pehle uska global execution context banta hai or ye har baar banega hi banega. isko this keyword se access kia jaa skta hai.
Har environment ka execution context alag hota hai jaise ki browser ka execution context alag hota hai or node ka execution context alag hota hai.
browser ka execution context mai window object hota hai or node ka execution context mai global object hota hai. or ye dono object alag alag hote hai.

JS code is executed in two phases :-
1. Memory Creation phase :- is phase mai js code ko read kia jaata hai or uske liye memory allocate kia jaata hai.
2. Execution phase :- is phase mai jo bhi variables ki memory allocate hui hai uski value assign kia jaata hai or jo bhi function hai usko execute kia jaata hai.


For example if you execute the below code :-
STEP 1 :- GEC banega jisko this se access kia jaa skta hai.
STEP 2 :- (CYCLE ONE) THEN comes the Memory Creation Phase, val1, val2, result1, result2 sabki memory allocate hogi or usmai undefined ayga and functions(addNums()) ki memory allocate hogi usmai aygi function definition.
STEP 3 :- (CYCLE TWO) Execution phase val1 = 10 val2 = 5 values store hogi ab, function definition ko koi fark nahi padega jab tk wo call na ki gayi ho. Now result1 - called function execute hoga, ab jo function call kia hai uska apna execution context banega.
STEP 4 :- FUNCTION EXECUTION CONTEXT banega. ab iska new variable environment banegaaaaaa. ab iske execution context mai do phases firse banenge MCP & EC of this particular function.
    STEP 4.a) :- ab jaha se function call hua hai uske arguments se leke definition ke params se leke andar ke variables tak sabki memory allocate hogi is particular EC mai(val1, val2, num1, num2, total).
    STEP 4.b) :- ab is particular EC ka second phase ayga Execution phase ab variables mai value aygi, num1 = 10, num2 = 5, total =15. and then returned value GEC mai return hojaygi.
STEP 5:- ab jo functional execution context bana tha wo delete hogaaa.
STEP 6 :- (CYCLE TWO) Execution phase jo chal rha tha usmai ab result1 - value update hogi i.e., 15.
STEP 7 :- result2 ke lie bhi same hoga iska apna FUNCTIONAL EXECUTION CONTEXT banega and then uski MCP & EC banega memory allocate hogi, values enter hogi then at the end return hogi value GEC mai and result2 mai store hogi.
STEP 8 :- execution end 


JS Call stack
-> LIFO 
-> global exec, one(), two(), two() removed, one() removed, then GEC removed
*/

let val1 = 10;
let val2 = 5;
function addNums(num1, num2){
    let total = num1 + num2;
    return total;
};
let result1 = addNums(val1, val2);
let result2 = addNums(10, 30);