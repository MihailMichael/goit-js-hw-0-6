const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

const listIngred = [];
ingredients.forEach((value) => {
  const valueList = document.createElement("li");
  listIngred.className = "valueList";
  listIngred.textContent = value;
  listIngred.push(value);
});
list.append(...listIngred);
