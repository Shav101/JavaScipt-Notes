// JAVASCRIPT NUMBERS

var totalUsers = 42;
var purchase = 46.99;

// Scientific notations
var sciNot = 123e5;
var sciNot1 = 123e-5;

//
var numVal = 5 + 5;
var numVal1 = 5 * 5;
var numVal2 = 5 / 5;
var numVal3 = 5 % 5;

var numVal4 = (0.1 * 10 + 0.2 * 10) / 10;

var numVal5 = 10 + "5 years"; // will get 105

var numVal6 = 10 * "5"; // will get 50

var numVal7 = 10 * "5 years"; // will get NaN

console.log(numVal7);

/*
toFixed() = Returns a number written with a number of decimals

let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);


Number() = converts almost anything into a number, as long as it makes sense.

Number("123")       // → 123
Number("3.14")      // → 3.14
Number("  42  ")    // → 42 (ignores spaces)
Number("")          // → 0
Number(true)        // → 1
Number(false)       // → 0
Number("hello")     // → NaN (because "hello" isn’t a number)

parseInt() = Turns string into a integer.. Parses a string argument and return an integer.

parseInt("10");         // Returns 10 (radix 10 assumed)
parseInt("10", 10);     // Returns 10
parseInt("10", 2);      // Returns 2 (binary 10 is decimal 2)
parseInt("0xFF");       // Returns 255 (radix 16 assumed for "0x" prefix)
parseInt("15px");       // Returns 15
parseInt("hello");      // Returns NaN

parseFloat() = Returns a floating number. Parses a string argument and return a floating-point number.

console.log(parseFloat("3.14"));       // Returns 3.14
console.log(parseFloat("  10.5px"));   // Returns 10.5
console.log(parseFloat("20.99 meters")); // Returns 20.99
console.log(parseFloat("abc123"));     // Returns NaN
console.log(parseFloat("-.5"));        // Returns -0.5
*/

/*
Consider this scenario: You have a shopping cart with 6 items in it.  
The total price of all the items combined is $78.50 You have a coupon that gets you 25% off of the total price. 
After the coupon is applied, taxes will be applied at a rate of 7.75% of the total cost (cost after coupon).

Create 6 different variables that represent the price of each item
Perform addition operations to get the total price of all 6 items and store it in a variable ($78.50)
Create a variable for the 25% coupon
Create a variable called priceAfterDiscount and store the total price after the 25% discount has been applied (should equal around $58.87)
Create a variable called taxes that stores the total taxes to be charged using the tax rate (should equal around $4.56)
Create a variable called finalPrice that applies the 7.75% tax rate to priceAfter Discount.  (should equal around $63.43)

*/

var item = 12;
var item1 = 12;
var item2 = 12;
var item3 = 12;
var item4 = 14;
var item5 = 16.5;

var totalPrice = 12 + 12 + 12 + 12 + 14 + 16.5;
console.log("Total Price: " + totalPrice);

var discountPrice = 0.25;
var priceAfterDiscount = totalPrice - totalPrice * discountPrice;
console.log("Price After Discount: " + priceAfterDiscount);

var taxRate = 0.0775;
var taxes = priceAfterDiscount * taxRate;
console.log("Taxes: " + taxes);

var finalPrice = priceAfterDiscount + taxes;
console.log("Final Price: " + finalPrice);
