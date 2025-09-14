// JAVASCRIPT LOOPS

var tvShow = ["The walking dead", "Breaking bad", "The office"];

var userSavedMovies = [];

for (var i = 0; i < tvShow.length; i++) {
  console.log(i);
}

for (var i = 0; i < tvShow.length; i++) {
  console.log(tvShow[1]);
}

for (var i = 0; i < tvShow.length; i++) {
  console.log(tvShow[i]);
}

// for (var i = 1; i > 0; i++) {
//   console.log(tvShow[i]);
// }

// for (var i = 0; i < tvShow.length; i+= 1) {
//   console.log(i);
// }

// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2
// 2 < 3 = true; 2 + 1 = 3
// 3 < 3 = false;

var completedItems = [];

var toDos = [
  { title: "item 1", completed: true },
  { title: "item 2", completed: false },
  { title: "item 3", completed: false },
  { title: "item 4", completed: true },
];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
  }
}

console.log(toDos);
console.log(completedItems);

var bottles = 99;

// while (bottles > 0) {
//   console.log(bottles + " bottles of stuff on the wall");
//   // bottles--;
//   bottles -= 1;
// }

while (bottles > 0) {
  if (bottles != 1) {
    console.log(bottles + " bottles of stuff on the wall");
  } else {
    console.log(bottles + " bottle of stuff on the wall");
  }

  // bottles--;
  bottles -= 1;
}

// FIZZBUZZ Challenge
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
