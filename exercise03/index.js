var personName = "nehal tariq";
var toUpperCase = personName.toUpperCase();
var toLowerCase = personName.toLowerCase();
var join = personName.split(" ");
var toTitleCase = join
    .map(function (join) { return join.charAt(0).toUpperCase() + join.slice(1).toLowerCase(); })
    .join(" ");
console.log(toUpperCase);
console.log(toLowerCase);
console.log(toTitleCase);
