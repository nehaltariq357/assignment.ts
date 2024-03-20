"use strict";
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
let names = ["Nehal", "Hamza", "Ali"];
let error = names[3]; // Intentional error
// correcting to code
error = names[2];
console.log(error);
