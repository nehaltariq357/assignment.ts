"use strict";
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let obj = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
let { title, author, yearPublished } = obj;
console.log(`book name ${title} , author name ${author} , published in ${yearPublished}`);
