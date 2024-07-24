let myDom = document.querySelector(".container");
let myDom2 = myDom.childNodes[0];

let myDocument = document;

console.log(myDom);
console.log("Type of myDom: ", myDom.nodeType);
console.log(myDom2);
console.log("Type of myDom2: ", myDom2.nodeType);

console.log(myDocument);
console.log("Type of myDocument: ", myDocument.nodeType);

myDom.childNodes[1].style.width = "200px";