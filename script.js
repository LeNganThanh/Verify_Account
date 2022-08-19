"use strict";

/* const input = document.querySelectorAll(".code");
input[0].focus();
input.forEach(val => {
  val.addEventListener("keyup", function (e) {
    if (e.key >= 0 && e.key <= 9) {
      !val.nextElementSibling
        ? input[0].focus()
        : val.nextElementSibling.focus();
    } else {
      alert("Accept only number");
    }
  });
});
 */
/* another solution */
const input = document.querySelectorAll(".code");
input[0].focus();
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener("keyup", function (e) {
    if (e.key >= 0 && e.key <= 9) {
      i !== input.length - 1 ? input[i + 1].focus() : input[0].focus();
    } else {
      alert("Accept only number");
    }
  });
}

//solution from teacher------------------
/* 
const boxes = document.querySelectorAll(".code");

boxes[0].focus();

boxes.forEach((item, idx) => {
  item.addEventListener("keydown", e => {
    if (e.key >= 0 && e.key <= 9) {
      boxes[idx].value = "";

      setTimeout(() => boxes[idx >= 5 ? 0 : idx + 1].focus(), 100);
    } else {
      alert("Yo only numbers allowed");
    }
  });
});
 */
