let score = "33abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" =-> NaN
// true => 1
// false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1=> true
// " => false"
// "gaurav" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(stringNumber);

console.log(typeof stringNumber);

// ***********************************Operations *******************************************************

// let value = 3
// let negValue = -value
// console.log(negValue)
// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "hello";
let str2 = " gaurav";

let str3 = str1 + str2;
console.log(str3); // hello gaurav

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 ====>   operation calculation starts from left to right

console.log(3 + ((4 * 5) % 3)); // =====> 3 by bodmas rule

console.log(true); //true
console.log(+true); //1
// console.log(true+)  //error
console.log(+""); //0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
