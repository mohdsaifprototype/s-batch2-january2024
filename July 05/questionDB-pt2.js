console.log(questionBank);
console.log("Question Bank is loaded successfully");

let qElement = document.querySelector("#question");
let optLabel = document.querySelectorAll(".radio1");
let optInput = document.querySelectorAll("input[type='radio']");
let nextBtn = document.querySelector("#next");
let checkBtn = document.querySelector("#check");

qElement.innerHTML = questionBank[0].question;

optLabel[0].innerHTML = questionBank[0].option[0];
optLabel[1].innerHTML = questionBank[0].option[1];
optLabel[2].innerHTML = questionBank[0].option[2];
optLabel[3].innerHTML = questionBank[0].option[3];

optInput[0].value = questionBank[0].option[0];
optInput[1].value = questionBank[0].option[1];
optInput[2].value = questionBank[0].option[2];
optInput[3].value = questionBank[0].option[3];

console.log(optInput[0].value, optInput[1].value, optInput[2].value, optInput[3].value);

checkBtn.addEventListener("click", () => {
  console.log("Checking");
  // Compare the selected value with db options
  // if true then enable next button, disable current options input and also change image on the right accordingly or add you own logic
  // nextBtn.classList.remove("disabled");
});

nextBtn.addEventListener("click", () => {
  console.log("Next");
});

function startQuiz() {
  console.log("Start");
  document.querySelector(".start").classList.add("d-none");
}