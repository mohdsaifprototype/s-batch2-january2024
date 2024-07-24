let myBox = document.querySelector('#box');

let button = document.querySelector('button');

let myStyle = getComputedStyle(myBox);
console.log(myStyle);

/* button.addEventListener('click', () => {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  myBox.style.left = `${x}px`;
  myBox.style.top = `${y}px`;
}) */

  
myBox.addEventListener('mouseenter', () => {
  let x = Math.floor(Math.random() * window.innerWidth);
  let y = Math.floor(Math.random() * window.innerHeight);
  myBox.style.left = `${x}px`;
  myBox.style.top = `${y}px`;
})


/* 
function function_name(param1, param2) {
}

if a parameter is a function then we call it as callback function
*/