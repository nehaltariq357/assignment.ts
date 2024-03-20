"use strict";
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message
// should be the same, but each message should be personalized with the person’s name.
// This program have names in array and calling names in array and message them , Each message is personalized with the name of the person 
let names = ["Hamza", "Ali", "Nehal", "Ahmed", "Saqib"]
names.forEach(names => {
    console.log(`Hello ${names} would you like to learn typescript today?`);
});
