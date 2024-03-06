// petrol station

/*
Diesel : 154.4
Petrol : 144.6
Lpg    : 0.50

1. fuel type
2. how many litre */

// variations for fuel type

let diesel = 154.4,
  petrol = 144.6,
  lpg = 0.5;
const newLine = "\r\n";

const chosenFuel =
  "1- Diesel" +
  newLine +
  "2- Petrol" +
  newLine +
  "3- Lpg" +
  newLine +
  "Please, choose your fuel type";

// Prompt for choose fuel type

let fuelType = prompt(chosenFuel);
let fuelCostLiter = Number(prompt("Please, enter liter"));
let balance = Number(prompt("Please, enter your balance"));
//cost

if (fuelType == "1") {
  // Diesel
  let fuelCost = diesel * fuelCostLiter;
  if (fuelCost < balance) {
    //sufficient amount
    change = balance - fuelCost
    alert ("Successful transition"+newLine
    + "Fuel Cost: " + fuelCost + newLine
    + "Change : " + change + newLine
    + "Thank you for payment");

  } if (fuelCost > balance) {
    // insufficient amount
    alert ("Insufficient amount." + newLine
    + "Fuel Cost: " + fuelCost +newLine
    + "Balance : " + balance+newLine
    + "Missing Balance : " + (fuelCost - balance) + newLine);
  } 
} else if (fuelType == "2") {
  // Petrol
  
} else if (fuelType == "3") {
  // Lpg
} else "Please, enter your fuel type";
