/* Arrow function */

// // to sum two numbers using function expressions
// let sum = function(x, y){
//   return x + y;
// }

// console.log(sum(2, 3));

// // to sum two numbers using arrow function
// let sum = (a, b) => a + b;
// console.log(sum(2, 3));


let sum = (a, b) => {  // the curly brace opens a multiline function
  return a + b; // if we use curly braces, then we need an explicit "return"
};

console.log( sum(1, 2) ); // 3