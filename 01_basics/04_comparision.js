console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 <= 1); // false
console.log(2 == 1); // true
console.log(2 != 1); // true

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); //false
console.log(null >= 0); // true

// The reasonm is that  an equality check == and comparision > < >= <= wor differently.
// Comparisions convert  null to a number, treating it as 0

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

// === (strict check ------>  checks value as well as the type)

console.log("2" === 2); // false
console.log(2 === 2); // true
