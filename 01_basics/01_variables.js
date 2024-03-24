const accountId = 674767;
let accountEmail = "gaurav@google.com";
var accountPassword = "12345";
accountCity = "Jaipur ";
let accountState;

// accountId = 2 // not allowed

accountEmail = "gk@gk.com";
accountPassword = "2121212121";
accountCity = "Bengaluru";

/*
Prefer not to use user var bacause of issue in block scope and functional scope
*/

console.log(
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
);

//output ---- gk@gk.com 2121212121 Bengaluru undefined
