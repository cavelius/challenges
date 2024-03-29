const icon = document.querySelector('[data-js="icon"]');
const button3 = document.querySelector('[data-js="sleep-3-button"]');
const button5 = document.querySelector('[data-js="sleep-5-button"]');
const button10 = document.querySelector('[data-js="sleep-10-button"]');
const body = document.body;

// --v-- code here --v--

button3.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(3);
  icon.textContent = "⏰";
});

button5.addEventListener("click", async () => {
  icon.textContent = "💤";
  await sleep(5);
  icon.textContent = "⏰";
});

async function handleSleepFor10Button() {
  icon.textContent = "💤";
  await sleep(10);
  icon.textContent = "⏰";
}

button10.addEventListener("click", handleSleepFor10Button);

// function dark() {
//   body.style.backgroundColor = "black";
// }

// --^-- code here --^--

// returns a Promise that resolves after x seconds
async function sleep(seconds) {
  body.classList.add("dark");
  const sleepPromise = await new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
  body.classList.remove("dark");
  return sleepPromise;
}
