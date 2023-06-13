"use strict";
const numberList = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberList.length}`);

numberList.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
