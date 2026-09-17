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
can be called with new
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

*/