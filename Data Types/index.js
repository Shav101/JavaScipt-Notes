// JAVASCRIPT DATA TYPES

/* Primitive Data Types / Value Data Types */

// string = character wrapped in either single or double quotes. Also its anything that is in text format
var firstName = "Mary";
// number
var age = 27;
// boolean
var recedingHairline = false;
// undefined = its going to be a variable that hasn't been assigned a value or doesn't have a type
var favFood;
// null = nothing/none
// null can be reassigned to any value and of any type
var toiletPaper = null;

toiletPaper = 24;
toiletPaper = null;
toiletPaper = "Triple Ply";

/* Reference Data Types / Structural Data Types */

// Object = is used to organize more complex data
//  this object is a Key and Value pair+
var person = {
  firstName: "Mary",
  age: 27,
  recedingHairline: false,
  favFood,
  toiletPaper: 26,
};
// Arrays
// is an object but has a different data structure
// takes the values and stores them in a list
var students = ["Orion", "Kingston", "Shayla", "Chloe"];
// Functions
// You will not log/run the function name (myFunk) but rather run log the value that it will return or calculate
var myFunc = function () {
  // run some code/action
};
// ================================================================

console.log("Value: ", firstName);
console.log("Type: ", typeof firstName);

console.log("Value: ", age);
console.log("Type: ", typeof age);

console.log("Value: ", recedingHairline);
console.log("Type: ", typeof recedingHairline);

console.log("Value: ", favFood);
console.log("Type: ", typeof favFood);

console.log("Value: ", toiletPaper);
console.log("Type: ", typeof toiletPaper);

console.log("Value: ", person);
console.log("Type: ", typeof person);

console.log("Value: ", students);
console.log("Type: ", typeof students);

console.log("Value: ", myFunc);
console.log("Type: ", typeof myFunc);
