console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName} You are logged in now.`);
}

// Write a function with the "function" keyword named
// "showWelcomeMessage" Call "handleUserLogin" and pass your
// callback function as the first argument.
// (You should see the log from your callback message)

// Call "handleUserLogin" again but this time write the
// callback function as an anonymous function inside the
// function call (i.e. between the round brackets).
//  (You should see the log from your callback message)
// });

// handleUserLogin((userName) => {
//   showWelcomeMessage(userName);
// });

handleUserLogin(showWelcomeMessage);

handleUserLogin(function (userName) {
  showWelcomeMessage(userName);
});
