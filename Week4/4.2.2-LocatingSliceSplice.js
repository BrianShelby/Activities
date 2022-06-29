const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"

let firstA = arr.indexOf("a"); // 0
let firstB = arr.indexOf("b"); // 2
let firstC = arr.indexOf("c"); // 4

console.log(arr.indexOf("a"));
console.log(arr.indexOf("b"));
console.log(arr.indexOf("c"));

// find the last index of "a", "b", and "c"

let lastA = arr.lastIndexOf("a"); // 6
let lastB = arr.lastIndexOf("b"); // 8
let lastC = arr.lastIndexOf("c"); // 11

console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b"));
console.log(arr.lastIndexOf("c"));

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDuplicate(array, dupVal){
  let firstIndex = array.indexOf(dupVal);
  let lastIndex = array.lastIndexOf(dupVal);
  while (firstIndex !== lastIndex) {
  array.splice(lastIndex, 1);
  lastIndex = array.lastIndexOf(dupVal);
  }
  return array;
}
console.log(removeDuplicate(arr, "a"))
