// array

// const myArr = [0, 1, 2, 3, 4, 5];

// console.log(myArr[0]); // 0

const myHeros = ["shaktiman", "naagraj"];

const myArr = new Array(1, 2, 3, 4);
// console.log(myArr[0]) // 1

// Array methods

myArr.push(6); // [ 1, 2, 3, 4, 6 ]
console.log(myArr);
myArr.push(7); // [ 1, 2, 3, 4, 6, 7 ]
console.log(myArr);

myArr.pop();
console.log(myArr); // [ 1, 2, 3, 4, 6 ]

//-----------------------------------------------------

myArr.unshift(0);
console.log(myArr); // [ 0, 1, 2, 3, 4, 6 ] --------- inserts element in fromt of the array ------- and shifts other values to the right

myArr.shift();
console.log(myArr); // [ 1, 2, 3, 4, 6 ] ------ same like pop shifts(removes) the first element of the array

//--------------------------------

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1

console.log(myArr.includes(2)); // true
console.log(myArr.indexOf(2)); // 1

//----------------------------------------

const newArr = myArr.join(); //   changes the array values to string

console.log(myArr); // [ 1, 2, 3, 4, 6 ]
console.log(newArr); // 1,2,3,4,6

// -----------------------------------------------

// slice, splice

console.log("A", myArr); // A [ 1, 2, 3, 4, 6 ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 2, 3 ]
console.log("B", myArr); // B [ 1, 2, 3, 4, 6 ]

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2); // [ 2, 3 ]
