console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (const key in languages) {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = languages[key];
  select.appendChild(option);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

ul.classList.add("ul");

for (key in nav) {
  const listItem = document.createElement("li");
  const anchorTag = document.createElement("a");
  anchorTag.href = nav[key].href;
  anchorTag.textContent = nav[key].text;
  listItem.appendChild(anchorTag);
  ul.appendChild(listItem);
}

// --^-- write/change code here --^--
