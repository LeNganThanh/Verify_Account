"use strict";
const codeContainer = document.querySelector(".code-container");
let input = document.querySelectorAll(".code");
input.forEach(val => {
  val.addEventListener("keyup", function () {
    val.nextElementSibling.focus();
  });
});
