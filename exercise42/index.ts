// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase "the Great" to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


function show_magicians(magicians:string[]) {
  magicians.forEach(magician => {
      console.log(magician);
  });
}

function make_great(magicians:string[]) {
  for (let i = 0; i < magicians.length; i++) {
      magicians[i] = "the Great " + magicians[i];
  }
}


let magicians = ["magician1", "magician2", "magician3", "magician4", "magician5"];


make_great(magicians);


show_magicians(magicians);
