console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const btnDarkMode = document.querySelector('[data-js="dark-mode-button"]');
btnDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

const btnlightMode = document.querySelector('[data-js="light-mode-button"]');
btnlightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

const btnToggle = document.querySelector('[data-js="toggle-button"]');
btnToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
