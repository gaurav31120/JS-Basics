// for in loop
// Syntax:
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }

//  Note: for for objects ---- for in loop
//   for for arrays ---- for of loop and other more loops also

const myObject = {
  js: "javascript",
  cpp: "C++",
  rbL: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  console.log(key);
}
// js
// cpp
// rbL
// swift
console.log("--------------------------------------------------");

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for C++
// rbL shortcut is for ruby
// swift shortcut is for swift by apple
// Here key is key
//      value is myObject[key]

console.log("---------------------------------");

const programming = ["js", "rb", "py", "java", "cpp"];
for (const key in programming) {
  console.log(key);
}
// 0
// 1
// 2
// 3
// 4

//  in for in loop if we print key then array keys are printed like above done. ---- 0,1,2,3,4
//  but in for of loop if we print key then array keys are not printed instead of that array values are printed directly

console.log("------------------------------");
for (const key in programming) {
  console.log(programming[key]);
}
// js
// rb
// py
// java
// cpp

console.log("----------------------------------");

// Can we use for in loop in maps?

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("FR", "France");

for (const key in map) {
  console.log(key); // this line will not be printed and will not give any error as it was giving error in for of loop
}

// Note: map is not iterable
