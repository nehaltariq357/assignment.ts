"use strict";
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list
// to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// This program stores several mode of transportation in an array , and print them a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let myArray = ["car", "bike", "cycle", "motorcycle", "bicycle"];
myArray.forEach(myArray => {
    console.log(`i would like to own a ${myArray}`);
});
