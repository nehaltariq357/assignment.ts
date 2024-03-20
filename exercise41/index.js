"use strict";
// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
let magician = ["magician1", "magician2", "magician3", "magician4", "magician5"];
function show_magicians(show) {
    show.forEach((names) => {
        console.log(names);
    });
}
show_magicians(magician);
