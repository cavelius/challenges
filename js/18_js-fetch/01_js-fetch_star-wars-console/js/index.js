console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url); //erwartet & speichert das Objekt das von fetch zurückgegeben wird
    const data = await response.json(); //erwartet & speichert die eigentlichen Daten (Nutzdaten) die von JSON in einen JavaScript-Wert oder ein Objekt umgewandelt werden.

    console.log("response", response);
    console.log("data", data);
    console.log(data.count);
    console.log(data.next);
    console.log(data.results[2].eye_color);
  } catch (error) {
    console.error("this is a error", error);
  }
}

fetchData();
