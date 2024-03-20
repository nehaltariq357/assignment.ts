// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places: string[] = ["Kuwait", "Japand", "Germany", "Denmark", "Qatar"]; // non-alphabetical order

console.log(places); //Print array in its original order.

console.log([...places].sort()); // printing array alphabetically without unchanging original array

console.log(places); // Showing that array is still in its original order by printing it.

console.log([...places].sort().reverse());  // Printing array in reverse alphabetical order without changing the order of the original list.

console.log(places); // Showing that array is still in its original order by printing it again.

console.log(places.reverse()); //• Reverse the order of list. Print the array to show that itsorder has changed.



console.log(places.reverse()); // Reverse the order of list again. Print the list to show it’s back to its original order.

console.log(places.sort());//Sorting array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log(places.sort().reverse()); //Sorting to change array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
