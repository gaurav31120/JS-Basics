// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id == anotherId);

// const bigNumber = 34679877908758768768976 // will give error
const bigNumber = 34679877908758768768976n; // will work fine ---- no error

// Reference type (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "gaurav",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber); // bigInt
console.log(typeof myFunction); //function
console.log(typeof heros); //object
console.log(typeof id); // symbol
console.log(typeof anotherId); //symbol
