//  while loop

let index = 0;
while (index <= 10) {
  console.log(`Value of index is ${index}`);
  index = index + 2;
}

console.log("----------------------------------------------");

let myArray = ["flash", "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
  console.log(`Value is ${myArray[arr]}`);
  arr = arr + 1;
}

console.log("---------------------------------------------------");

//do while
// Syntax:
// do {

// } while (condition);

score = 11;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);
