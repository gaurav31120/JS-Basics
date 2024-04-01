// singleton - if declared as literals then singleton is not formed
// if declared as constructor then singleton is formed

//object literals
//  Another method of declaring objects ---- Object.create ---- this is called constructor
// where singleton is formed

const mySym = Symbol("key1");

//declare an object
const JsUser = {
  name: "Gaurav",
  "full name": "Gaurav Kumar",
  [mySym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "gaurav@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

//access an object

console.log(JsUser.email); // gaurav@google.com
console.log(JsUser["email"]); //gaurav@google.com
// console.log(JsUser.full name); // error ---- full name is string so it cannot be aceessed by a dot(.) it can only be access by []
console.log(JsUser["full name"]); // Gaurav Kumar
console.log(JsUser["full name"]); // Gaurav Kumar
// console.log(typeof(JsUser.mySym)) // string
console.log(JsUser[mySym]); // mykey1

//update the values
JsUser.email = "gaurav@chatgpt.com";
console.log(JsUser.email); //gaurav@chatgpt.com

//freeze(lock) the value -  we can freeze the object
// Object.freeze(JsUser);
JsUser.email = "gaurav@microsoft.com";
console.log(JsUser.email); // gaurav@chatgpt.com

JsUser.greeting = function () {
  console.log("Hello JS user");
};
console.log(JsUser.greeting); // [Function (anonymous)]
// console.log(JsUser.greeting()); //error -  JsUser.greeting is not a function ---- Here we have freezed the object previously that's why this error is coming
console.log(JsUser.greeting()); //Hello JS user
// undefined
console.log(JsUser.greeting); //[Function (anonymous)]

//String interpolation
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

// this ----- when we have to reference same object the use this
console.log(JsUser.greeting()); // Hello JS user
// undefined
console.log(JsUser.greetingTwo()); // Hello JS user, Gaurav
// undefined
