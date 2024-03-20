"use strict";
// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = "subaru";
// for true
console.log("is car == 'subaru'? i predict ture");
console.log(car == "subaru");
console.log("is car == 'bike'? i predict true ");
console.log(car != "bike");
console.log("is car.length == 6 ? i predict true ");
console.log(car.length == 6);
console.log("is car starts with 's' ? i predict true ");
console.log(car.startsWith('s'));
console.log("is car ends with 'u' ? i predict true");
console.log(car.endsWith('u'));
// for false
console.log("is car.length == 10 ? i predict false");
console.log(car.length === 10);
console.log("is car == 4? i predict false");
console.log(car == "4");
console.log("is car is starts with 't' ?  i predict false");
console.log(car.startsWith('t'));
console.log("is car ends with 'v' ? i predict false ");
console.log(car.endsWith('v'));
console.log("is car == bike ? i predict false");
console.log(car == "bike");
