let mealCost = 25; // Essenspreis
let tipPercentage = 10; //prozentuales Trinkgeld
let tipAmount = (mealCost / 100) * tipPercentage; //Trinkgeld
let totalCost = mealCost + tipAmount;

console.log("The total cost of your bill is:", totalCost, "euros");
