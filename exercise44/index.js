"use strict";
// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
function sandwichDetails(...items) {
    const sandwich = items.join(",");
    console.log(`your sandwich with ${sandwich}`);
}
sandwichDetails('ham', 'cheese', 'lettuce');
sandwichDetails('turkey', 'bacon');
sandwichDetails('peanut butter', 'jelly', 'banana');
