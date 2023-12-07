let startingBalance = 1000; //Startguthaben
let monthlyContribution = 200; // was ich jeden Monat sparen will
let months = 12; // so lange will ich sparen

let totalSavings = startingBalance + monthlyContribution * months; // was ich gespart habe

console.log(
  "After",
  months,
  "of saving, you will have",
  totalSavings,
  "in your account"
);
