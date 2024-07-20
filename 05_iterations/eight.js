// Reduce method
// this method is used to flattens an array without changing the original array and returns a new one
// using this method we can convert a twod or a 3d array into one dimensional array or a 1d array into a single variable
// it consists of a variable in itself called an accumulator whose initial value we can assign after the callback function as a second argument in the reduce method itself as shown below
const myNums = [1, [2,3], 4]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    // this condition works when any other array comes inside the array myNums so that it will give the sum of the array inside and we will add it to the accumulator of the main array myNums to get the sum of all the arrays and their element individually present inside the myNums array
    if(currval.length>1){
        return acc + currval.reduce((inacc,e)=> inacc+e,0);
    }
    return acc + currval
}, 3)

console.log(myNums);
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);