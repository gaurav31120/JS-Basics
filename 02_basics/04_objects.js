// Here, we will see how to make singleton and use object constructor
const tinderUser = {};
// const tinderUser = new Object()
console.log(tinderUser); // {}

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser); //  { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "gaurav",
      lastname: "kumar",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname); // gaurav

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};

// const obj3 = {obj1,obj2}
// console.log(obj3)  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj3 = Object.assign(obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj4 = Object.assign({}, obj1, obj2); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj3);
console.log(obj4);

const obj5 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log(obj5);

const users = [
  {
    id: 1,
    email: "g@gmail.com",
  },
  {
    id: 1,
    email: "g1@gmail.com",
  },
  {
    id: 1,
    email: "g@gmail.com",
  },
  {
    id: 1,
    email: "g@gmail.com",
  },
  {
    id: 1,
    email: "g@gmail.com",
  },
  {
    id: 1,
    email: "g@gmail.com",
  },
];

console.log(users[1].email); // g1@gmail.com
console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
//Object.keys(tinderUser) ---- returns array datatype

console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("isLogged")); // false
