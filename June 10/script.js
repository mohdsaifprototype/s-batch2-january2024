let myInputField = document.querySelectorAll("input[type='radio']");

function check() {
  myInputField.forEach((item) => {
    if (item.checked) {
      console.log(item.name, item.value);
    }
    return item.checked;
  });
}

// let gender = check();

// console.log(gender);

let myContainer = document.querySelector(".container");