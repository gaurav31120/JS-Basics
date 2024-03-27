const name = "gaurav";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("gauravgk");

console.log(gameName[0]); // g
console.log(gameName.__proto__); //{}
console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // GAURAVGK
console.log(gameName.charAt(2)); // u
console.log(gameName.indexOf("u")); // 2

const newString = gameName.substring(0, 4);
console.log(newString); //gaur

const anotherString = gameName.slice(-7, 4);
console.log(anotherString); //aur

const newStringOne = "    gaurav          ";
console.log(newStringOne); //    gaurav
console.log(newStringOne.trim()); // gaurav

const url = "https://gaurav.com/gaurav%20kumar";

console.log(url.replace("%20", "-")); // https://gaurav.com/gaurav-kumar

console.log(url.includes("gaurav")); // true
console.log(url.includes("sundar")); // false

const gameNames = new String("gaurav-gk-com");

console.log(gameNames.split("-")); // [ 'gaurav', 'gk', 'com' ]
