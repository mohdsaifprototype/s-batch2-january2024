let makeElement = function (
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
};

// let myImg = makeElement("img", "border border-primary rounded-circle", ["src", "alt", "width"], ["https://picsum.photos/1920/1080", "random img", "100%"]);

// backgroundElement.appendChild(myImg)

let mySection = makeElement("section", "section1");
let myH2 = makeElement("h2", "highlight", "", "", "Heading for the section");
let myP = makeElement("p", "highlight", "", "", "Paragraph for the section");
let myImg = makeElement(
  "img",
  "shadow",
  ["src", "alt", "width", "height"],
  ["https://picsum.photos/1920/1080", "random img", "100%", "auto"]
);

mySection.append(myH2, myP, myImg);

document.body.append(mySection);
