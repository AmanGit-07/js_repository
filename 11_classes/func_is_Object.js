// QUESTION :- means everything in js is an object eventually ?

// SOLUTION :- 
/*
Almost — but **not everything in JavaScript is an object**.

This is an important distinction.

### JavaScript has two broad categories

**1. Primitives** — these are **not objects**

```js
string
number
boolean
undefined
null
bigint
symbol
```

For example:

```js
const age = 25;
const name = "Aman";
const isLoggedIn = true;
```

`25`, `"Aman"`, and `true` are primitive values.

---

**2. Objects**

```js
const user = {
    name: "Aman"
};

const arr = [1, 2, 3];

const date = new Date();

function User() {}
```

And here's the interesting part:

### Functions are objects too! 🔥

```js
function User(name) {
    this.name = name;
}
```

`User` is:

```text
Function
   ↓
also an Object
```

That's why you can do things like:

```js
User.myProperty = "Hello";

console.log(User.myProperty);
```

A function can have **properties and methods**, just like an object.

---

### But primitives are not objects

```js
const age = 25;

console.log(typeof age);
// "number"
```

Whereas:

```js
const user = {};

console.log(typeof user);
// "object"
```

And:

```js
function test() {}

console.log(typeof test);
// "function"
```

Although `typeof` says `"function"`, functions are still **objects in JavaScript's object model**.

---

### One useful mental model

Think of JavaScript like this:

```text
JavaScript Values
│
├── Primitive values
│   ├── string
│   ├── number
│   ├── boolean
│   ├── undefined
│   ├── null
│   ├── bigint
│   └── symbol
│
└── Objects
    ├── plain objects
    ├── arrays
    ├── functions
    ├── dates
    ├── promises
    ├── maps
    └── etc.
```

So your statement:

> **"Everything in JS is eventually an object."**

❌ Not quite.

Better:

> **"Almost everything apart from primitive values is an object, and functions are special objects that can be called."**

And this connects directly to what we were discussing: **a constructor function is itself an object, and `new` uses that function to create another object (an instance).**
*/