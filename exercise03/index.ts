
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName: string = "nehal tariq";

let toUpperCase: string = personName.toUpperCase();

let toLowerCase: string = personName.toLowerCase();

let join: string[] = personName.split(" ");

let toTitleCase: string = join
  .map((join) => join.charAt(0).toUpperCase() + join.slice(1).toLowerCase())
  .join(" ");

console.log(toUpperCase);

console.log(toLowerCase);

console.log(toTitleCase);





