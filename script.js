"use strict";
const codeContainer = document.querySelector(".code-container");
let input = document.querySelectorAll(".code");
input.forEach(val => {
  val.addEventListener("keyup", function (e) {
    if (!val.nextElementSibling) {
      val.focus();
    } else {
      val.nextElementSibling.focus();
    }
  });
});

// for (let i = 0; i < input.length; i++) {
//   input[i].addEventListener("keyup", function () {
//     if (i !== input.length - 1) {
//       input[i + 1].focus();
//     } else if (i === input.length - 1) {
//       input[i].focus();
//     }
//   });
// }
