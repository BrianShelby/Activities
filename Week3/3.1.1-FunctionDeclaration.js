// TODO: using the function expressions below, refactor them into function declarations
const greet = function() {
  console.log("Hello!");
};

function greet() {
  console.log("Hello!");
};

const threeModTwo = function() {
  console.log(3 % 2);
};

function threeModTwo() {
  console.log( 3 % 2);
};

let age = 18;

function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};


/*
  3.1.1-FunctionDeclaration#index.js
  ==================================
*/

// TODO: using the function expressions below, refactor them into function declarations

// function expression:
// const greet = function() {
//   console.log("Hello!");
// };

// Refactored function...
function greet() {
  console.log("Hello!");
};

//  function expression:
// const threeModTwo = function() {
//   console.log(3 % 2);
// };

// Refactored function...
function threeModTwo() {
  console.log(3 % 2);
};

//  function expression:
// let age = 18;
// const checkDrivingAge = function() {
//   if (age >= 16) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

// Refactored function...
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
