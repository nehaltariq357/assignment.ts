// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// for equality with strings

console.log("\ntesting equality with strings\n");
let color = "Blue";

console.log("is color equals to 'Blue' ? i predict true");
console.log(color == "Blue");

let fruit = "Mango";

console.log("is fruit is equals to 'Mango'? i predict true");
console.log(fruit == "Mango");

// for inequality with strings
console.log("\ntesting inequality for strings\n");
console.log("is color equals to 'Red' ? i predict false ");
console.log(color == "Red");

console.log("is fruit is equals to 'apple' ? i predict false ");
console.log(fruit == "apple");

// for lower case function

console.log("\ntesting lower case function\n");

let country = "New Zealand";

console.log(
  "is country in lowerCase is equals to 'new zealand' ? i predict true "
);
console.log(country.toLowerCase() == "new zealand");

// numerical test for equality

console.log("\nnumerical testing for equality\n");

let number1 = 10;
let number2 = 20;

console.log("is number1 is equals to number2 ? i predict false");
console.log(number1 == number2);

// numerical test for inequality
console.log("\nnumerical testing for inequality\n");
console.log("is number1 is not equals to number2 ? i predict true");
console.log(number1 != number2);

// testing greater than and less than

console.log("is number1 is greater than number2 ? i predict false");
console.log(number1 > number2);

console.log("is number1 is less than number2 ? i predict true ");
console.log(number1 < number2);

// testing greater than or equal to, and less than or equal to

console.log("is number1 greater than or equals to number2 ? i predict false");
console.log(number1 >= number2);

console.log("is number1 is less than or equals to number2 ? i predict true");
console.log(number1 <= number2);

// Testing using "and" and "or" operators

let a = 1;
let b = 2;

console.log(
  "is a is greater than 0 and (&&) b is grater than 0 ? i predict true "
);
console.log(a > 0 && b > 0); // must be both values are true

console.log("is a is greater than 0 or (||) b is less than 0 ? i predict true");
console.log(a > 0 || b < 0); // must be atleast one value is true

// • Testing whether an item is in a array

let names = ["Nehal", "Hamza", "Ali"];
console.log("is 'Nehal' is in the names of array ? i predict true ");
console.log(names.includes('Nehal'));

// • Test whether an item is not in a array

console.log("is 'Hashir' is not in names of array ? i perdict true  ")
console.log(!names.includes('Hashir'))