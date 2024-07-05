let btn = document.querySelector("#btn");
let minRange = document.querySelector(`#min-range`);
let maxRange = document.querySelector(`#max-range`);

btn.addEventListener("click", () => {
  let myOl = makeElement(
    "ol",
    "list",
    ["type", "start"],
    ["1", `${minRange.value}`],
    ""
  );
  let min = minRange.value;
  let max = maxRange.value;
  let arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
    myOl.innerHTML += `<li>&#${i};</li>`;
  }
  console.log(arr);
  document.body.append(myOl);
});

function makeElement(
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
}
