import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;
  console.log(searchString);

  const foundCountries = countries.filter((country) =>
    country.name
      .toLocaleLowerCase()
      .startsWith(searchString.toLocaleLowerCase())
  );

  if (foundCountries) {
    foundCountries.forEach((foundCountry) => {
      const countryElement = Country(foundCountry);
      container.append(countryElement);
    });
  }
});
