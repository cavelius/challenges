console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const numberA = parseInt(event.target.elements.numberA.value);
  console.log("numberA", numberA);

  const numberB = parseInt(event.target.elements.numberB.value);
  console.log("numberB", numberB);

  const operator = event.target.elements.operator.value;
  console.log("operator", operator);

  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (operator === "division") {
    result = divide(numberA, numberB);
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
