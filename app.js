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

  // Sufficient Amount

  if (fuelCostDiesel < balance) {
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

  // Insufficient Amount

  if (fuelCostDiesel > balance) {
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

  let fuelCostPetrol = petrol * fuelCostLiter;

  // Sufficient Amount

  if (fuelCostPetrol < balance) {
    change = balance - fuelCostPetrol;
    alert(
      "Successful transition" +
        newLine +
        "Fuel Cost Petrol:" +
        fuelCostPetrol +
        newLine +
        "Change:" +
        change +
        newLine +
        "Thank you for payment"
    );
  }
  // Insufficient Amount

  if (fuelCostPetrol > balance) {
    alert(
      "Insufficient Amount" +
        newLine +
        "Fuel Cost Petrol:" +
        fuelCostPetrol +
        newLine +
        "Balance:" +
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

  let fuelCostLpg = lpg * fuelCostLiter;

  // Sufficient Amount

  if (fuelCostLpg < balance) {
    change = balance - fuelCostLpg;
    alert(
      "Successful transition" +
        newLine +
        "Fuel Cost Lpg:" +
        fuelCostLpg +
        newLine +
        "Change:" +
        change +
        newLine +
        "Thank you for payment"
    );
  }

  // Insufficient Amount

  if (fuelCostLpg > balance) {
    alert(
      "Insufficient Amount" +
        newLine +
        "Fuel Cost Lpg:" +
        fuelCostLpg +
        newLine +
        "Balance:" +
        balance +
        newLine +
        "Missing Amount:" +
        (fuelCostLpg - balance) +
        newLine
    );
  }
} else "Please, enter your fuel type";
