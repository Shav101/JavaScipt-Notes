// JavaScript Strings

var make = "Toyota";
var model = "Prius";
var year = 2021;

// STRING CONCATENATION

var myRide = make + model;
console.log(myRide);

var myRide1 = make + " " + model;
console.log(myRide1);

var myRide2 = make + " " + model;
var myBraggingRight = "I drive a " + year + " " + myRide2;
console.log(myBraggingRight);

// ===================================================================

// JavaScript Strings

var make = "Harley Davidson";
var model = "Iron 883";
var year = 2017;

var myRide2 = make + " " + model;
var myBraggingRight = "I drive a " + year + " " + myRide2;

// .LENGTH
console.log(make.length);

/*
concat() = 
-Joins 2 or more strings


let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

-it can be used instead of plus operator

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");


indexOf() = get the index of the specific word or character

    const text = "Hello world, hello!";
    const index1 = text.indexOf("world"); // Returns 6 (index of 'w')
    const index2 = text.indexOf("hello", 1); // Returns 13 (index of the second 'hello')
    const index3 = text.indexOf("JavaScript"); // Returns -1 (not found)


lastIndexOf() = starts counting the index position from the end

    let text = "Hello world, welcome to the world of JavaScript.";
    let index = text.lastIndexOf("world"); // Returns 23 (index of the 'w' in the second "world")
    let notFound = text.lastIndexOf("JavaScript", 10); // Returns -1 (search starts at index 10, "JavaScript" is not found before that)


replace() = used to replace a specific string

    let sentence = "I like apples";
    let newSentence = sentence.replace("apples", "bananas");
    console.log(newSentence); // "I like bananas"


toString() = converts value into a STRING (you can use numbers, arrays, booleans and even dates)

    let num = 123;
    let str = num.toString();
    console.log(str);       // "123"
    console.log(typeof str); // "string"

    let isTrue = true;
    console.log(isTrue.toString()); // "true"


    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits.toString()); // "apple,banana,cherry"


toUpperCase() = converts string into a ALL UPPERCASE LETTERS

    let name = "hello world";
    let upperName = name.toUpperCase();
    console.log(upperName); // "HELLO WORLD"



toLowerCase() = CONVERTS STRING INTO A all lowercase capital letters

    let greeting = "HELLO WORLD";
    let lowerGreeting = greeting.toLowerCase();
    console.log(lowerGreeting); // "hello world"

*/
