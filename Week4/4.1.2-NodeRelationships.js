/*
  4.1.2-NodeRelationships.js
  ===========================
*/

// select the root node
const root = document.querySelector("html");
 console.log("Root Node ... ", root);


// select the last child of the root node
const lastRootChild = root.lastElementChild;
 console.log("\nLast Child of root ...", lastRootChild);

// select all the children of the body element
const bodyChildern = document.querySelector("body").children;
 console.log("\nChildern of Body ...", bodyChildern);

// select the next sibling of the h2 node
const h2NextSibling = document.querySelector("h2").nextElementSibling
 console.log("\nNext Sibling of H2 ...", h2NextSibling);

// select the parent element of the h1 node
const h1Parent = document.querySelector("h1").parentElement;
 console.log("\nParent of H1 ...", h1Parent);

