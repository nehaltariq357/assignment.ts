// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.


let magician:string[] = ["magician1","magician2","magician3","magician4","magician5"]

function show_magicians(show:string[]):void{
show.forEach((names:string) => {
  console.log(names)
  
});
}
show_magicians(magician)