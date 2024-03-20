// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner.

let list:string[] = ["Nehal" , "Hamza" , "Ali"]

list.forEach(invite =>{
  console.log(`${invite} would you like to join me for dinner tomorrow`)
})
console.log(`Number of people invited to dinner is ${list.length}`)
