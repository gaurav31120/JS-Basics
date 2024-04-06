function one() {
  const username = "gaurav";

  function two() {
    const website = "youtube";
    console.log(username);
  }

  //   console.log(website);  // out of scope

  two(); // gaurav
}

one();

if (true) {
  const username = "gaurav";
  if (username === "gaurav") {
    const website = " youtube";
    console.log(username + website); // gaurav youtube
  }

  // console.log(website); // out of scope
}

// console.log(username);  // out of scope

// ++++++++++++++++++++++++++++++++ interesting +++++++++++++++++

function addone(num) {
  return num + 1;
}
console.log(addone(5));

// addtwo(5); // Cannot access 'addtwo' before initialization
const addtwo = function (num) {
  return num + 2;
};
