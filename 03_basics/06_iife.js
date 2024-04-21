// Immediately Invoked Function Expressions (IIFE)
//1. Pollution from global scope - if something is declared in global scope and I don't want that
// variable to be called from local scope (child) ----- to remove this IIFE is used

//2. Want to immediately execute

//IIFE Syntax    -----    ()()    ----- (function definition)(function execution)

//Named IIFE
(function chai() {
  console.log(`DB CONNECTED`);
})(); // DB CONNECTED

(function aurcode() {
  console.log(`DB CONNECTED2`);
})(); // DB CONNECTED2

// Unnamed IIFE
(() => {
  console.log(`DB CONNECTED3`);
})(); // DB CONNECTED3

((name) => {
  console.log(`DB CONNECTED4 ${name}`);
})("gaurav"); // DB CONNECTED4 gaurav
