console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("event targe elements: ", event.target.elements);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("data: ", data);

  event.target.reset();
  document.getElementById("first-name").focus();
});
