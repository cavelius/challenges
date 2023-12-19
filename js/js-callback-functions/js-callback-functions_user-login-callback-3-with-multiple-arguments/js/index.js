console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}

// The exercise starts here!

// Write a function with the "function" keyword named
// "showWelcomeMessage". Call "handleUserLogin" and pass
// your callback function as the first argument.
// (You should see the log from your callback message)

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName} you are logged in now as ${userRole}.`);
}

handleUserLogin(showWelcomeMessage);

// Call "handleUserLogin" again but this time write the
// callback function as an anonymous function inside the
// function call (i.e. between the round brackets).
// (You should see the log from your callback message)

handleUserLogin(function (userName, userRole) {
  console.log(`Welcome ${userName} you are loggedin now as ${userRole}.`);
});
