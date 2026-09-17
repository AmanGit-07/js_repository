// promise is an object in js
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})
// this promisOne.then will work only when the task is resolved, and we need to call the resolve() method inside the promise to execute the code present inside the .then (i.e., resolve() method acts as a connector that will connect the .then and the promise)
promiseOne.then(function(){
    console.log("Promise consumed");
})


// this is another way of makin a promise (i.e., without storing it in the variable)
// this will execute automatically after one second once the page loads
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


// this is another way of making a promise and using resolve() method , here we are passing the parameters in the resolve() method
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log("Promise three is resolved -> ",user);  //full object will be passed here as passed in the resolve object.
})


// this is another way of making a promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username    //iska return next then ka parameter jataa hai
}).then((username) => {     //therefore, yaha pe user.username = username hai
    console.log(username);
}).catch(function(error){   //ye to normally error handle krega
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")); //finally to chalega hi chalega jo kuch bhi ho




// handling promise response with async & await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// async & await mai hume try & catch block use krna padta hai
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
// here, we are calling the function that is handling the resolve & reject of the promise
consumePromiseFive()



// example of using fetch api with async & await, with try & catch block.... 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()   //this works perfectly, bus yaha bhi await include krna padega wrna chalega nahi kyunki response data ko bhi json mai convert hone ke lie time lagta hai...
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.


// example of promise 
new Promise( (resolve, reject) => {
    const res = true;
    setTimeout( () => {
        if(res){
            resolve(user);
        } else {
            reject(`Promise rejected..`);
        }
    }, 1000);
})
.then( function(user){
    console.log(`user has been fetched.`);
    return user["name"];
})
.then( function(username){
    console.log(`username has been fetched`);
    return username["firstname"];
})
.then( function(name){
    console.log(`${name} is the first name of the user`);
})
.catch( function(error){
    console.log(error);
});

// SUMMARY / IMP :-
// To know about fetch watch vid = 41
// fetch() → Promise deta hai → await us Promise ke resolved result ko lene ke liye use hota hai.
// The Fetch API provides an interface for fetching resources(means data) (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.

// working of fetch
/*
Haan, **concept roughly aisa samajh sakte ho**, but ek important correction hai: **`fetch()` ke liye koi separate "priority queue" nahi hoti** jise browser hamesha normal task queue se pehle execute kare.

Easy way mein:

### 🧠 JavaScript ko ek waiter samjho

JavaScript ka **main thread** ek waiter hai jo ek time par ek hi kaam karta hai.

Tumne 3 kaam diye:

```js
setTimeout(() => {
  console.log("Timer");
}, 0);

fetch("/api")
  .then(() => {
    console.log("Fetch");
  });

console.log("Normal");
```

Pehle synchronous kaam:

```text
JavaScript
   ↓
console.log("Normal")
   ↓
Normal
```

Uske baad asynchronous kaam complete hone par unke callbacks queues mein aate hain.

### `fetch()` ka actual flow

`fetch()` khud browser/Node ke networking system ko request de deta hai:

```text
fetch()
  ↓
Browser/Node networking
  ↓
Request complete hone ka wait
  ↓
.then() callback queue mein
```

Aur:

```text
setTimeout()
   ↓
Timer system
   ↓
Timer complete
   ↓
callback queue mein
```

### ⚠️ Main difference

Yahan ye mat socho:

```text
Priority Queue
     ↓
fetch()  ← hamesha pehle
     
Normal Queue
     ↓
setTimeout()
setInterval()
DOM events
```

Actually JavaScript mein **multiple types ki queues/microtask mechanisms** hoti hain, aur unki priority/order environment aur API ke according depend karti hai.

Sabse important rule yaad rakho:

```text
Synchronous code (execute hoga)
      ↓
Microtasks         (ye execute honge)
(Promise .then/.catch/.finally, queueMicrotask)
      ↓
Task / macrotask    (end mai ye execute honge agar teeno tasks sath mai execute hone hai to)
(setTimeout, DOM events, etc.)
```

`fetch()` ka **Promise callback** (`.then()`) microtask hota hai **jab fetch complete ho jata hai**.

So:

```js
fetch("/api").then(() => console.log("fetch"));

setTimeout(() => console.log("timer"), 0);
```

Agar **fetch response already complete ho chuka hai** aur uska `.then()` microtask queue mein aa gaya hai, to microtask generally timer callback se pehle run hoga.

### Ek line mein

**`fetch()` ko priority queue mein directly mat samjho.**
Instead yaad rakho:

> `fetch()` ka network kaam background mein hota hai, aur response aane ke baad uska Promise callback **microtask queue** mein jaata hai. Microtasks ko JavaScript event-loop processing mein tasks (jaise `setTimeout`) se pehle process kiya jaata hai.

Aur ek interesting point: **`fetch()` ka network operation aur `.then()` callback — dono ko same cheez mat samajhna.** `fetch()` network request hai; `.then()` us request ke complete hone ke baad execute hone wala Promise callback hai.
*/