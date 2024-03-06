// petrol station 

/*
Diesel : 154.4
Petrol : 144.6
Lpg    : 0.50

1. fuel type
2. how many litre */

// variations for fuel type

let diesel = 154.4, petrol = 144.6, lpg = 0.50;
const newLine = "\r\n";

const chosenFuel = "1- Diesel" + newLine + "2- Petrol" + newLine + "3- Lpg" + newLine + "Please, choose your fuel type";

// Prompt for choose fuel type

let fuelType = prompt(chosenFuel);

if (fuelType == "1") {
    // Diesel
} else if (fuelType == "2") {
    // Petrol
} else if (fuelType == "3") {
    // Lpg
} else ( "Please, enter your fuel type");

