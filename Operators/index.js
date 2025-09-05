// JavaScript Comparison Operators

// == Equal to
// != Not equal to
// === Equal to
// !== Not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

if (1 == 1) {
  console.log("Its True!");
}

if (1 == "1") {
  // this is just checking the value
  console.log("Its True!");
}

if (1 === "1") {
  // this will check the value and the type
  console.log("Its True!");
}

if (1 === "1") {
  // this will check the value and the type
  console.log("Its True!");
} else {
  console.log("Its False");
}

// console.log();

// ============================================================================
var currentAccountBalance = 300;
var purchase = 74.99;

if (purchase <= currentAccountBalance) {
  console.log("Lava Lamps for days");
} else {
  console.log("NO Lava Lamp for you fam");
}

// ============================================================================
var currentAccountBalance1 = 74.99;
var purchase1 = 74.99;

// If you use "<" it will fail your if else statement so you need to use "<=" so it doesn't fail if the value is the same.
if (purchase1 <= currentAccountBalance1) {
  console.log("Lava Lamps for days");
} else {
  console.log("NO Lava Lamp for you fam");
}

// ============================================================================
var currentAccountBalance2 = 74.98;
var purchase2 = 74.99;
var freeLavaLampVoucher = true;

if (purchase2 <= currentAccountBalance2) {
  console.log("Lava Lamps for days");
} else if (freeLavaLampVoucher) {
  console.log("Free stuff rocks");
} else {
  console.log("NO Lava Lamp for you fam");
}

// ============================================================================
// ============================================================================

// JavaScript Logical Operators

// && and == both has to be true
// || or == at least 1 needs to be true
// ! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 8.5;

if (skater2 > skater3 && skater2 <= skater1) {
  console.log("Move skater into next round");
}

// ============================================================================
if (skater2 > skater3 && skater2 <= skater1 && skater1 < 100) {
  console.log("Move skater into next round");
}

// ============================================================================
if (skater2 < skater3 && skater2 <= skater1) {
  console.log("Move skater into next round");
} else if (skater3 < skater2 || skater3 === skater2) {
  console.log("Skater3 is stepping up their game");
}

var skater4 = 9.5;
var skater5 = 9;
var skater6 = 9;
var isJackedUpOnCaffeine = true;

// ============================================================================
if (skater5 < skater6 && skater5 <= skater4) {
  console.log("Move skater into next round");
} else if (skater6 > skater5 || (skater6 === skater5 && skater5 < skater4)) {
  console.log("Skater6 is stepping up their game");
}

// ============================================================================

if (skater5 < skater6 && skater5 <= skater4) {
  console.log("Move skater into next round");
} else if (
  skater6 > skater5 ||
  (skater6 === skater5 && skater5 < skater4 && !isJackedUpOnCaffeine)
) {
  console.log("Skater6 is stepping up their game");
} else if (skater6 > 5 && isJackedUpOnCaffeine) {
  console.log("Skater6 is takes home the gold!");
}
