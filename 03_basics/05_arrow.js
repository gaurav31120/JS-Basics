const user = {
  username: "gaurav",
  price: 999,
  welcomwMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // gaurav, welcome to website
  },
};

// this = this keyword is used to access current context {whatever is in the scope}

user.welcomwMessage(); // gaurav, welcome to website
// {
//   username: 'gaurav',
//   price: 999,
//   welcomwMessage: [Function: welcomwMessage]
// }
user.username = "sam"; // here context got change for username
user.welcomwMessage(); // sam, welcome to website
// {
//     username: 'sam',
//     price: 999,
//     welcomwMessage: [Function: welcomwMessage]
//   }

// console.log(this) //{}

function chai() {
  console.log(this); //<ref *1> Object [global]
}

chai();

function chai2() {
  let username = "gaurav";
  console.log(this.username); //undefined
}

chai2();

// this keyword can only be used inside a not n object inside a function

//================================================================

//Declare a function using using arrow functions

const chai3 = function () {
  let username = "gaurav";
  console.log(this.username); //undefined
};
chai3();

const chai4 = () => {
  let username = "gaurav";
  console.log(this.username); //undefined
  console.log(this); // {}
};
chai4();

//Arrow function syntax
// () => {}

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4)); // 7

//----------------------------------------------

// Implicit return - here we will not use a return and {} else we will use parenthesis ()

// If you use ---- {} curly braces -- write return
// If you use ---- () small braces -- don't write return

const addTwo2 = (num1, num2) => num1 + num2;

console.log(addTwo2(23, 4)); // 27

//----------------------------------------------

// Explicit return - here we will  use a small braces () to cover the curly braces {} object

const addTwo3 = (num1, num2) => {
  username: "gaurav";
}; // undefined
const addTwo4 = (num1, num2) => ({ username: "gaurav" }); // undefined
// To return an object we need to put it in a parenthesis ()

console.log(addTwo3(2, 5)); // undefined
console.log(addTwo4(2, 5)); // { username: 'gaurav' }

// Example of arrow function
