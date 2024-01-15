import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  try {
    const response = await fetch(colorApiUrl);

    console.log("response", response);
    if (response.ok) {
      // Success (Good Response)
      const data = await response.json();
      console.log("data", data);
      // return data;
      const colorCode = data.hex.value;
      console.log("Hex code", colorCode);
      const colorName = data.name.value;
      console.log("Color Name", colorName);
      setColorToGuess(colorCode, colorName);
    } else {
      // Failure (Bad Response)
      console.error("Bad Response");
    }
  } catch (error) {
    // Failure (Network error, etc)
    console.error("An Error occurred");
  }
}

// --^-- your code here --^--
