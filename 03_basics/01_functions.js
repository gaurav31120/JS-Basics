//Function declaration

// function sayMyName() {
//   console.log("G");
//   console.log("A");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("V");
// }
//Function calling

// sayMyName();
// Parameters - while defining a input in function
// function addTwoNumbers(number1, number2) {
//   // number1 and number 2 ===== Parameters
//   console.log(number1 + number2);
// }

// // Arguments - while calling a function whatever is passed in value is called arguments.

// // addTwoNumbers(); // NaN
// // addTwoNumbers(3, 4); // 7 // 3 and 4 ===== Arguments
// // addTwoNumbers(3, "4"); // 34
// const result = addTwoNumbers(3, 5);
// console.log("Result: ", result); // undefined ----It is undefined because here we need to return the value from a function
// Function will return the value ---- it will not print the value to console

// ------------------------------------------------------------------------

function addTwoNumbers(number1, number2) {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
  console.log("Gaurav"); //will not print anything after return
}

const result = addTwoNumbers(3, 5);
console.log("Result: ", result);

// ================================================================

function logUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(logUserMessage("Gaurav")); // Gaurav just logged in
console.log(logUserMessage("")); // just logged in
console.log(logUserMessage()); // undefined just logged in

console.log("-------------------------------------------------------------");

// Passing default value in the parameter

function logUserMessage2(username = "Sam") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(logUserMessage2("Gaurav")); // Gaurav just logged in
console.log(logUserMessage2("")); // Sam just logged in -- Here, Sam is default value
console.log(logUserMessage2()); // Sam just logged in -- Here, I have an issue

//Issue - Undefined value will take default parameter value or not
