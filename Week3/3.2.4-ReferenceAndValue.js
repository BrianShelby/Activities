/*
  3.2.4-ReferenceAndValue#index.js
  =================================
*/

// comparing and passing by reference and value
// determine whether each log will print true or false

console.log("4 === 4 :", 4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false;
let y = x;
console.log("\n 1st comparison of x = y... ", x === y);

x = !x;
console.log("\n 2nd comparison of x = y... ", x === y);

console.log("\n Comparing like arrays... ", [1, 2, "c"] === [1, 2, "c"]);

console.log("\n Comparing empty objects... ", {} === {});

y = { id: 1 };
x = y;
console.log("\n3rd comparison - id's of x and y... ", x === y);

y.id += 1;
console.log("4th comparison - id's of x and y after mutation... ", x.id === y.id);
10:32
/*
 3.2 - for...in loops  ========================
*/

// Example 1: Iterate Through an Object
console.log("EXAMPLE #1");

const obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
 console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// Example 2: Iterate Through another Object
console.log("\nEXAMPLE #2");

const student = {
name: 'Monica',
class: 7,
age: 12,
gender: 'girl'
}

// using for...in
for ( let key in student ) {
// display the properties
console.log(`${key} => ${student[key]}`);
}

// name => Monica
// class => 7
// age => 12
// gender => girl
