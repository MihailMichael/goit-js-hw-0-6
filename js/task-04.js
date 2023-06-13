let counterValue = 0;
const counterNumber = document.querySelector("#value");
const btnDecre = document.querySelector('button[data-action="decrement"]');
const btnIncre = document.querySelector('button[data-action ="increment"]');
btnDecre.addEventListener("click", () => {
  counterValue--;
  counterNumber.textContent = counterValue;
});
btnIncre.addEventListener("click", () => {
  counterValue++;
  counterNumber.textContent = counterValue;
});
