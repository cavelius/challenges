console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Social Media Post";
const text = "This is my Post";
let numberOfLikes = 1;
const user = "Sofia";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("title:", title);
console.log("text:", text);
console.log("numbersOfLikes:", numberOfLikes);
console.log("user:", user);
console.log("isReported:", isReported);

numberOfLikes++;

console.log("newNumberOfLikes", numberOfLikes);
// --^-- write your code here --^--
