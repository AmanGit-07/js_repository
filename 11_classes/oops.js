// object literals
const user = {
    name: "Aman Bhatia",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details.");
        console.log(this.name);
    }
}

// console.log(user.name);
// console.log(user.getUserDetails());


const user2 = Object.assign({}, user);
// console.log(user2);

// new keyword
// const pobj = new Promise();
const date = new Date();
/*
new → operator
Promise → constructor function
pobj → Promise ka instance
new operator kisi constructor function ya class ko call karke uska naya instance/object create karta hai.

For example:

class User {
    constructor(name) {
        this.name = name;
    }
}

const user1 = new User("Aman");
const user2 = new User("Rahul");

Yahan:

             User (class/constructor)
                  |
            +-----+-----+
            ↓           ↓
         user1        user2
         Aman         Rahul

User blueprint/constructor hai, aur new User() se us blueprint ka new instance banta hai.
*/

function juser(username, loggedInCount, isLoggedIn){
    this.username = username;
    this.loggedInCount = loggedInCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const juserOne = juser('Aman', 12, true);   //yaha abhi humne new keyword use nahi kia hai
const juserTwo = juser('Bhatia', 11, false);    //to ye override krega

// console.log("juserOne --->>> ", juserOne);  //this will give bhatia, 11, & false, because jusertwo override krdega values ko

// that is why we use classes & new operator
// ab new lagane se kya hoga constructor function har baar aapko ek new alag instance dega, mtlb juserOne ka apna instance hoga & juserTwo ka apna instance hoga
// what actually happens when we use new keyword :-
// step1 : ek empty object create hota hai, jisko instance bola jaata hai.
// step2 : constructor function call hota hai new keyword ke kaaran joki sare args ko pack krdeta h.
// step3 : jitne bhi arguments hote hai wo this keyword ke andar inject hojate hai
// step4 : apko return krdeta hai

const userOne = new juser('AMAN', 12, true);
const userTwo = new juser('Bhatia', 11, false);

console.log(userOne)
// console.log(userTwo)    //Now with the help of new keyword we have created the separate new instances of the object juser.. so it doesn't overrides the userOne with the values of userTwo
// ab ye jo naye objects/instances bane hai inka constructor function same hoga as of the juser
/*
CONCEPTUALLY what happens behind the scene:-
new juser(...)
      ↓
new empty object
      ↓
object ka prototype → juser.prototype
      ↓
juser constructor execute
      ↓
this → new object
      ↓
properties set
      ↓
new object returned
*/

// also, constructor property hoti kya hai.. reference hoti hai aapke khud hi ke baare mai
// or ye inbuilt property hoti hai joki aise access ho skti hai islie given below
console.log(userOne.constructor);
console.log(userOne instanceof juser);  //means userOne juser ka instance hai kya ?



/*
QUESTION :-
so this means that every normal function in the js has it's own constructor function? that can be used to create another instance/copy of that function?

SOLUTION :-
Not exactly. **Ye ek very common confusion hai.**

### ❌ This is NOT true:

> "Every normal function has its own constructor function."

Instead:

> **Every normal function is itself a function object, and many normal functions can be used as constructors with `new`.**

For example:

```js
function User(name) {
    this.name = name;
}
```

Here **`User` khud constructor function hai** when you use:

```js
const user1 = new User("Aman");
const user2 = new User("Rahul");
```

There isn't another hidden constructor function called `UserConstructor`.

---

### What does `new User()` actually mean?

Think:

```text
User
 ↓
Function
 ↓
can be called normally
       OR
can be called with new keyword
```

Normal call:

```js
User("Aman");
```

Constructor call:

```js
new User("Aman");
```

When you use `new`, JavaScript roughly does:

```text
new User("Aman")
       ↓
Create empty object {}
       ↓
Connect object → User.prototype
       ↓
Call User with this = new object
       ↓
User sets properties
       ↓
Return new object
```

So:

```js
const user1 = new User("Aman");
```

creates an **instance of `User`**.

---

### And it's NOT a copy of the function

This is also important.

```js
const user1 = new User("Aman");
```

does **not** create a copy of the `User` function.

It creates a **new object/instance based on that constructor**.

```text
             User function
                  |
            User.prototype
             /          \
            ↓            ↓
         user1          user2
        name=Aman     name=Rahul
```

Both `user1` and `user2` are separate objects, but their prototype points to `User.prototype`.

---

### One more important distinction

Not every function can necessarily be used with `new`.

For example, arrow functions:

```js
const User = (name) => {
    this.name = name;
};

const user = new User("Aman"); // ❌ TypeError
```

Arrow functions are **not constructable**.

But a normal function:

```js
function User(name) {
    this.name = name;
}

const user = new User("Aman"); // ✅
```

can be used as a constructor.

### 🧠 Remember this

```text
Normal function
     |
     ├── function()
     │      → normal function call
     │
     └── new function()
            → constructor call
            → creates a new instance
```

So **"constructor function" isn't a separate function automatically created for every function**.

It's basically a **normal constructable function being used with `new`**.


so matlab, hum ek normal function ko normally call kr skte hai & new keyword ke sath bhi call kr skte hai jise constructor function kehte hai. normal function mai koi new object nahi create hota balki constructor function call mai har baar new object create hota hai and this keyword us function ke andar uss newly created object ko call krta hai.








///// ANOTHER DOUBT & CLEARANCE 
Your understanding is almost correct! You're thinking in the right direction, but there's one important distinction to understand:

**When you call a constructor function using `new`, JavaScript creates a new object and a new Function Execution Context (FEC) for that particular function call.** The new object and the new execution context are two different things.

Let's understand this step by step.

## 1. Normal Function Call

Consider this example:

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}

User("Aman", 25);
```

Here, we call `User()` as a normal function.

### What happens internally?

**Step 1: Global Execution Context (GEC)**

When JavaScript starts executing your script, it creates a Global Execution Context.

The function `User` is created during the creation phase and becomes available for execution.

**Step 2: Function call**

When JavaScript encounters:

```javascript
User("Aman", 25);
```

It creates a new Function Execution Context for this invocation.

Conceptually, that execution context contains the function's local environment, including its parameters:

```javascript
name = "Aman";
age = 25;
```

Because this is a normal function call, JavaScript does not automatically create a new object for the function.

In a regular, non-strict function call, `this` refers to the global object (`window` in browsers). In strict mode, `this` is `undefined`.

Consequently, the assignments to `this.name` and `this.age` behave differently depending on the execution environment.

**Step 3: Function execution finishes**

Once the function finishes executing, its Function Execution Context is popped off the call stack.

The important point is that the function definition still exists, but its execution context for that invocation is gone.

---

## 2. Constructor Function Call Using `new`

Now consider the same function:

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new User("Aman", 25);
const user2 = new User("Rahul", 30);
```

Here, we're calling the same function twice using the `new` keyword.

### What happens internally?

Let's break down the execution of:

```javascript
const user1 = new User("Aman", 25);
```

**Step 1: JavaScript creates a new object.**

Conceptually, JavaScript creates an empty object:

```javascript
const newObject = {};
```

This is just a simplified illustration of what happens internally.

**Step 2: JavaScript connects the new object to the constructor's prototype.**

The new object's internal `[[Prototype]]` is set to the constructor's `prototype` property, provided that property is an object.

Conceptually:

```javascript
Object.setPrototypeOf(newObject, User.prototype);
```

**Step 3: JavaScript calls the constructor function with the new object as `this`.**

The constructor function executes with `this` referring to the newly created object.

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;
}
```

The parameters receive their respective values:

```javascript
name = "Aman";
age = 25;
```

Then these statements execute:

```javascript
this.name = name;
this.age = age;
```

Because `this` refers to the new object, the assignments produce the equivalent of:

```javascript
newObject.name = "Aman";
newObject.age = 25;
```

The resulting object is:

```javascript
{
    name: "Aman",
    age: 25
}
```

**Step 4: JavaScript returns the new object.**

If the constructor doesn't explicitly return another object, JavaScript automatically returns the newly created instance.

Therefore:

```javascript
const user1 = new User("Aman", 25);
```

assigns the new object to `user1`.

Now, when we execute:

```javascript
const user2 = new User("Rahul", 30);
```

JavaScript creates another object and invokes `User` again in a separate Function Execution Context.

The result is two independent objects:

```javascript
user1 = {
    name: "Aman",
    age: 25
};

user2 = {
    name: "Rahul",
    age: 30
};
```

Changing one object's properties doesn't automatically change the other object's properties.

```javascript
user1.name = "Amit";

console.log(user1.name); // "Amit"
console.log(user2.name); // "Rahul"
```

---

## 3. Your Main Question: Is a New Execution Context Created?

**Yes! Every time you invoke a function, JavaScript creates a new Function Execution Context for that invocation, regardless of whether you use `new`.**

Compare these two calls:

```javascript
User("Aman", 25);
User("Rahul", 30);
```

And:

```javascript
new User("Aman", 25);
new User("Rahul", 30);
```

Both sets of calls create a new Function Execution Context for each invocation.

The difference is what JavaScript does when invoking the function.

| Behavior                                      | Normal function call                | Constructor function call (`new`)                             |
| --------------------------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| New Function Execution Context                | Yes                                 | Yes                                                           |
| New object automatically created              | No                                  | Yes                                                           |
| `this` refers to                              | Depends on the call and strict mode | The newly created instance                                    |
| Arguments passed to the function              | Yes                                 | Yes                                                           |
| Automatically returns the new instance        | No                                  | Yes, unless the constructor explicitly returns another object |
| Object's prototype linked to `User.prototype` | No automatic instance creation      | Yes, when `User.prototype` is an object                       |

Notice that **creating a new Function Execution Context and creating a new object are separate operations.**

A normal function call creates a new execution context without necessarily creating a new object.

A constructor call creates a new execution context and, as part of the `new` operation, creates a new object.

---

## 4. Let's Visualize Both Calls

Consider the following code:

```javascript
function User(name) {
    this.name = name;
}

User("Aman");

const user1 = new User("Rahul");
const user2 = new User("Priya");
```

Conceptually, the execution proceeds as follows:

### First call: `User("Aman")`

```text
GLOBAL EXECUTION CONTEXT
        |
        | Calls User("Aman")
        v
FUNCTION EXECUTION CONTEXT #1
        |
        | name = "Aman"
        | this = global object (in non-strict mode)
        |
        | Function finishes
        v
CONTEXT REMOVED FROM CALL STACK
```

No new instance is automatically created.

### Second call: `new User("Rahul")`

```text
GLOBAL EXECUTION CONTEXT
        |
        | Calls new User("Rahul")
        |
        +----> NEW OBJECT CREATED
        |             |
        |             | [[Prototype]]
        |             v
        |         User.prototype
        |
        v
FUNCTION EXECUTION CONTEXT #2
        |
        | name = "Rahul"
        | this = newly created object
        |
        | this.name = "Rahul"
        |
        | Function finishes
        v
CONTEXT REMOVED FROM CALL STACK
        |
        v
New object returned and assigned to user1
```

The same process occurs again for `new User("Priya")`, creating another object and another Function Execution Context.

The execution contexts are temporary, but the objects can remain in memory as long as they're reachable.

---

## 5. One More Important Concept: The Function Is Not Copied

This is particularly important for your understanding of JavaScript objects and functions.

Consider:

```javascript
function User(name) {
    this.name = name;
}

const user1 = new User("Aman");
const user2 = new User("Rahul");
```

Does JavaScript create two copies of the `User` function?

**No.**

There is one function definition, `User`, which is invoked twice.

Each invocation creates:

* A new Function Execution Context.
* A new instance object.
* A new `this` binding that refers to that instance.

Conceptually:

```text
                    User FUNCTION
                    /           \
                   /             \
             Invocation 1     Invocation 2
                  |                 |
                  v                 v
          Execution Context 1  Execution Context 2
                  |                 |
                  v                 v
              user1 object      user2 object
              name: "Aman"      name: "Rahul"
```

Both objects are instances created by the same constructor function.

You can verify this:

```javascript
console.log(user1 instanceof User); // true
console.log(user2 instanceof User); // true

console.log(user1 === user2); // false
```

The first two expressions return `true` because both objects have `User.prototype` in their prototype chains.

The last expression returns `false` because the two variables reference different objects.

---

## 6. Bonus: What If You Use `new` With a Function That Returns Something?

Consider:

```javascript
function User(name) {
    this.name = name;

    return {
        name: "Different User"
    };
}

const user1 = new User("Aman");

console.log(user1.name); // "Different User"
```

Why?

Normally, a constructor returns the newly created instance automatically.

However, if a constructor explicitly returns another object, that object becomes the result of the `new` expression.

If the constructor returns a primitive value instead, such as a string or number, JavaScript ignores that return value and returns the newly created instance.

This is another reason to understand that the `new` keyword does more than simply call a function.

---

### Final takeaway

Your original understanding was nearly correct. Just remember these three points:

1. **Every function invocation creates a new Function Execution Context**, whether it's a normal call or a constructor call.
2. **The `new` keyword additionally creates a new object**, links its prototype, and invokes the constructor with that object as `this`.
3. **The function itself isn't copied.** The same function definition can be invoked repeatedly to create separate execution contexts and, when called with `new`, separate instances.

In one sentence: **A new Function Execution Context is created for each invocation; `new` additionally creates and initializes an object instance associated with that invocation.**

*/