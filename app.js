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

// ********* Diesel *********
if (fuelType == "1") {
  // Diesel
  let fuelCostDiesel = diesel * fuelCostLiter;
  if (fuelCostDiesel < balance) {
    //sufficient amount
    change = balance - fuelCostDiesel;
    alert(
      "Successful transition" +
        newLine +
        "Fuel Cost: " +
        fuelCostDiesel +
        newLine +
        "Change : " +
        change +
        newLine +
        "Thank you for payment"
    );
  }
  if (fuelCostDiesel > balance) {
    // insufficient amount
    alert(
      "Insufficient amount" +
        newLine +
        "Fuel Cost: " +
        fuelCostDiesel +
        newLine +
        "Balance : " +
        balance +
        newLine +
        "Missing Amount : " +
        (fuelCostDiesel - balance) +
        newLine
    );
  }

  // ********* Petrol *********
} else if (fuelType == "2") {
  // Petrol

  // Sufficient Amount

  let fuelCostPetrol = petrol * fuelCostLiter;
  if (fuelCostPetrol < balance) {
    alert(
      "Successful transition" +
        newLine +
        "Fuel Cost Petrol:" +
        fuelCostPetrol +
        newLine +
        "Change :" +
        fuelCostPetrol +
        newLine +
        "Thank you for payment"
    );
  }

  if (fuelCostPetrol > balance) {
    // Insufficient Amount
    alert(
      "Insufficient Amount" +
        newLine +
        "Fuel Cost Petrol:" +
        fuelCostPetrol +
        newLine +
        "Balance :" +
        balance +
        newLine +
        "Missing Amount:" +
        (fuelCostPetrol - balance) +
        newLine
    );
  }

  // ********* LPG *********
} else if (fuelType == "3") {
  // Lpg

























} else "Please, enter your fuel type";
