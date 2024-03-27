// Dates

let myDate = new Date(); // ----- Date is an object in js
console.log(myDate); // 2024-03-27T04:18:51.165Z  ------ current date
console.log(myDate.toString()); // Wed Mar 27 2024 09:49:24 GMT+0530 (India Standard Time)  ------ current date
console.log(myDate.toDateString()); // Wed Mar 27 2024 ------ current date
console.log(myDate.toLocaleString()); // 27/3/2024, 9:50:21 am  ------ current date

// let myCreatedDate = new Date(2023, 0, 23);  // Mon Jan 23 2023
let myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

let myCreatedDate1 = new Date("2023-01-14");
console.log(myCreatedDate1.toDateString()); // Sat Jan 14 2023
console.log(myCreatedDate1.toLocaleString()); // 14/1/2023, 5:30:00 am

let myTimeStamp = Date.now();

// console.log(myTimeStamp)    // 1711513784886 ------ in millisecond

// console.log(myCreatedDate.getTime()) // 1674430380000

console.log(Math.floor(Date.now() / 1000)); // value in seconds 1711513937

let newDate = new Date();
console.log(newDate); // 2024-03-27T04:33:33.558Z
console.log(newDate.getDate()); // 27
console.log(newDate.getMonth() + 1); // 3
console.log(newDate.getDay()); // 3

const newDateTimezone = newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(newDateTimezone); // Wednesday
