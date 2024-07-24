let myoptions = document.querySelectorAll("input[type=radio]");

console.log(myoptions);

// console.log(myoptions[0]);
// console.log(myoptions[1]);
// console.log(myoptions[2]);
// console.log(myoptions[3]);

myoptions.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.value);
  });
})