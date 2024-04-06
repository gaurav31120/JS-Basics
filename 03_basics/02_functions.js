function calculateCartPrice(num1) {
  return num1;
}

// console.log(calculateCartPrice(2)); // 2
console.log(calculateCartPrice(200, 400, 500)); //200
// --------------------------------------------------------------------------

// ... (triple dots) ----- Rest operator and Spread operator

// Rest operator ---- whaterver is available in opened ----- put in a bundle and give in array

function calculateCartPrice2(...num1) {
  return num1;
}

console.log(calculateCartPrice2(2)); // [2]
console.log(calculateCartPrice2(200, 400, 500)); // [ 200, 400, 500 ]

//   ---------------------------------------------------------------------------------
console.log(
  "================================================================="
);

function calculateCartPrice3(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice3(2)); // [2]
console.log(calculateCartPrice3(200, 400, 500, 200)); // [ 500, 200 ]

console.log(
  "================================================================="
);

const user = {
  username: "gaurav",
  price: 190,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price} `
  );
}

// handleObject(user); // Username is gaurav and price is 190
handleObject({
  // Username is gaurav and price is 190
  username: "sam",
  price: 399,
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 100, 600])); // 400
