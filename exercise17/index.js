"use strict";
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.
let list = ["Nehal", "Ali", "Hamza", "zain", "Haris"];
list.forEach((invite) => {
    console.log(`${invite}, would you like to join me for dinner tomorrow`);
});
console.log(`\n unfortunality ${list[3]} not coming to dinner,so we make replace hime by another friend. \n`);
list[3] = "Sameer";
list.forEach((invite) => {
    console.log(`${invite} would you like to join me for dinner tomorrow?`);
});
console.log(`\n Fortunality, I found a bigger table,so i will invite three more friends.\n `);
// adding new guest in the beginning of array
list.unshift("Junaid");
// adding new guest in the end of array
list.push("Ayan");
// adding new guest in the middle of array
let middle = Math.floor(list.length / 2);
list.splice(middle, 0, "Saad");
// printing final guest lists
list.forEach((invite) => {
    console.log(`${invite} would you like to join me for dinner tomorrow?`);
});
// For exercise 17.
console.log(`\n Unfortunality dinner table won't arrive in time for the dinner, and i have space for only two guests. \n
`);
while (list.length > 2) {
    let shrinkArray = list.pop();
    console.log(`${shrinkArray} Sorry i cannot invite you to dinner`);
}
list.forEach((invite) => {
    console.log(`${invite} you are invited welcome `);
});
// emptying array
list.splice(0, list.length);
console.log(list);
