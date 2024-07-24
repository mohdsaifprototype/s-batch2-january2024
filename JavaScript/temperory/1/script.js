console.log("Welcome!")

let brand = document.getElementById("brand");

brand.innerHTML = "Saket";

let myListItem = document.querySelectorAll(".list-item");

// myListItem[0].style.fontSize = "1.2rem";
// myListItem[1].style.fontSize = "1.2rem";
// myListItem[2].style.fontSize = "1.2rem";
// myListItem[3].style.fontSize = "1.2rem";

myListItem.forEach((item) => {
  item.style.fontSize = "1.2rem";
})

let mySection = document.querySelector("section.container");
mySection.style.backgroundColor = "lightblue";
