// if statement

//Syntax
// if(condition) {
//     //execute
// }

if (true) {
  // this line will always execute
}

if (false) {
  // this line will never execute
}

// const isUserLoggedIn = true;

// if(isUserLoggedIn) {

// }

//Comparision operator
// < ,>, <= , >=, ==, !=, ===

if (2 == "2") {
  console.log("executed");
}
if (2 === "2") {
  console.log("will not be executed");
}

// for typechecking and value checking both we use -----  ===
// for only value checking we use -----  ==

const temperature = 41;

if (temperature < 50) {
  console.log("less than 50"); //less than 50
}
console.log("temperature is greater than 50"); //temperature is greater than 50
//this line will also get executed because herer there is no else statement

if (temperature < 50) {
  console.log("less than 50"); //less than 50 ----- this line will execute
} else {
  console.log("temperature is greater than 50"); // ----- this line will not execute because this is in else condition
}

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // ReferenceError: power is not defined ---- because power is declared inside the scope and we wnat to use outside the scope

const balance = 1000;

if (balance > 500) console.log("test"), console.log("test2");
// we can write single statement after if. There is no any {} requred for single line statement. If we
//want multiple lines then we will use comma(,)

if (balance < 500) {
  console.log("less than");
} else if (balance < 750) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in");
}


