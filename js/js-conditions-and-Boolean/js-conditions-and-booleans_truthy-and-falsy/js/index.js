const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const expressionOne = Boolean(2 == "2");
console.log("2 == '2' is:" + expressionOne);

const expressionTwo = Boolean(2 === "2");
console.log("2 === '2' is: " + expressionTwo);

const expressionThree = Boolean(2 === 2);
console.log("2 === 2 is: " + expressionThree);

const expressionFour = Boolean("hello world");
console.log("hello world: " + expressionFour);

const expressionSix = Boolean("");
console.log('"" is: ' + expressionSix);

const expressionSeven = Boolean(true);
console.log("true is: " + expressionSeven);

const expressionEight = Boolean(0);
console.log("0 is: " + expressionEight);

const expressionNine = Boolean(-50);
console.log("-50 is: " + expressionNine);

const expressionTen = Boolean(50);
console.log("50 is: " + expressionTen);

const expressionEleven = Boolean(5 > 1);
console.log("5 > 1 is: " + expressionEleven);

const expressionTwelve = Boolean("1 > 10");
console.log('"1 > 10" is: ' + expressionTwelve);

const expressionThirteen = Boolean("false");
console.log('"false" is: ' + expressionThirteen);
