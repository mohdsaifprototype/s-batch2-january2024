let gender = document.querySelectorAll(`input[type="radio"]`);

gender.forEach((item) => {
  if (item.checked) {
    console.log("Gender Selected:", item.name, item.value);
  }
  console.log("Gender Selected:", item.name, item.value);
});

function check() {
  gender.forEach((item) => {
    if (item.checked) {
      console.log("Gender Selected:", item.name, item.value);
    }
  });
}

let article = document.createElement("article");

article.innerHTML = `
<h2>My first article on How to create virtual dom using JS</h2>
<p>To create any virtual dom we use document.createElement(tagname)</p>
`;

// article.classList.add("article");

// article.classList.replace("article", "article-2");
// article.classList.remove("article");

let button = document.createElement("button");
button.innerText = "Toggle";
button.setAttribute("type", "button");
button.setAttribute("onclick", "toggle()");
article.append(button);
document.body.prepend(article);

function toggle() {
  article.classList.toggle("article");
}