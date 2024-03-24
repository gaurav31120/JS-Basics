//Stack {Premitive}, Heap (Non-Primitive)

let myYoutubename = "gauravkumardotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(myYoutubename);
console.log(anothername);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "gaurav@google.com";

console.log(userOne); //{ email: 'gaurav@google.com', upi: 'user@ybl' }
console.log(userTwo); //{ email: 'gaurav@google.com', upi: 'user@ybl' }

// Notes: Primitive datatypes will go into Stack -----> here for every data there is a copy for that in stack (static value is there)
// Non - primitive datatypes will go into heap   -----> here for every data there is a reference for that value in heap (static value is there)
// in heap ---- reference means whatever value you will change that will get changed in the original value (no copy is created in heap)
