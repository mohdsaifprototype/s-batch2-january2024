let myElement = document.querySelectorAll(".container h2");
console.log(myElement);

myElement.forEach((item) => {
  addEventListener("mouseover", () => {
    event.target.style.color = "red";
  });
});
