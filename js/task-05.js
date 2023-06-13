"use strict";
let userName = document.querySelector("#name-input");
const anonym = document.querySelector("#name-output");
userName.addEventListener("input", (event) => {
  anonym.textContent = event.currentTarget.value.trim();
  if (event.target.value.trim() === "") {
    anonym.textContent = "Anonymus!";
  }
});
