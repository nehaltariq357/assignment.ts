
let list = ["Nehal", "Ali", "Hamza","zain","Haris"];

list.forEach(invite => {
  console.log(`${invite}, would you like to join me for dinner tomorrow`);
});

console.log(`\n unfortunality ${list[3]} not coming to dinner,so we make replace hime by another friend. \n`)

list[3] = "Sameer"

list.forEach(invite =>{
  console.log(`${invite} would you like to join me for dinner tomorrow?`)
})

console.log(`\n Fortunality, I found a bigger table,so i will invite three more friends.\n `)

// adding new guest in the beginning of array

list.unshift("Junaid")

// adding new guest in the end of array

list.push("Ayan")

// adding new guest in the middle of array

let middle = Math.floor(list.length / 2 )

list.splice(middle, 0 ,"Saad")


// printing final guest lists

list.forEach(invite =>{
  console.log(`${invite} would you like to join me for dinner tomorrow?`)
})

