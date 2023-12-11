let data = 3.1;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "null":
    console.log("null!");
    break;
  case "number":
    console.log("number!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "bigint":
    console.log("bigint!");
    break;
  case "function":
    console.log("funktion!");
    break;
  case "object":
    if (Array.isArray(data)) {
      console.log("array!");
      // } else if (NaN.isNaN(data)) {
      //   console.log("not an number!");
    } else {
      console.log("object!");
    }
    break;
  default:
    console.log("I have no idea!");
}
