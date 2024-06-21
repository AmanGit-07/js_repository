const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros)  //will give array inside an array dc_heros will be pushed as an another element inside marvel_heroes

// console.log(marvel_heros);              //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);        //flash <- output

const allHeros = marvel_heros.concat(dc_heros);  //will concat two array and give the output as a new array
console.log(allHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_heros = [...marvel_heros, ...dc_heros];
// here we are using spread operators to access two arrays and as a name suggest it returns the elements of the array as in spreaded form that is only the elements so it combines all together to make a new array

console.log(all_new_heros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity);     //returns a one d array at the end
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));       //checks whether content inside method is isArray or not returns false or true
console.log(Array.from("Hitesh"));      //converts string to array -> [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // interesting    will give empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ] gives an array of these elements