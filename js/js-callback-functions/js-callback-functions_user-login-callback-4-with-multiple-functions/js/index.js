console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName} you are logged in now as ${userRole}.`);
}

// Write a function with the "function" keyword named "showErrorMessage".
// The function should accept one parameter "errorMessage" The function should
// log the following message to the console: "Login error: ${errorMessage}"

function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`);
}

// Call the function "handleUserLogin" and pass three arguments in this order:

// callback function: "showWelcomeMessage"
// callback function: "showErrorMessage"
// user name string: "Jane Doe"
//  (You should see the log from "showWelcomeMessage" in the console)

handleUserLogin(showWelcomeMessage, showErrorMessage, "Jane Doe");

// Call the function "handleUserLogin" and pass three arguments in this order:
// callback function: "showWelcomeMessage"
// callback function: "showErrorMessage"
// user name string: "John Doe"
// (You should see the log from "showErrorMessage" in the console)

handleUserLogin(showWelcomeMessage, showErrorMessage, "John Doe");
