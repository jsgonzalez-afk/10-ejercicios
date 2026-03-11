// 1. const (Constant value - cannot be changed)
const WASH_PRICE = 5;
console.log("The price per wash is fixed at: $" + WASH_PRICE);

// 2. let (Variable value - can be changed)
let detergentPods = 10;
detergentPods = detergentPods - 1; 
console.log("Pods remaining: " + detergentPods);

// 3. if (Simple check)
let money = 20;
if (money >= 5) {
  console.log("You have enough money to start the machine!");
}

// 4. if else (Two options)
let machineReady = false;
if (machineReady) {
  console.log("Start washing.");
} else {
  console.log("Please wait, the machine is busy.");
}

// 5. else (The 'fallback' plan)
let time = 10;
if (time > 30) {
  console.log("Take a nap.");
} else {
  console.log("Just wait here, it's almost done.");
}

// 6. switch (Multiple specific choices)
let cycle = "delicate";
switch (cycle) {
  case "heavy": console.log("Adding extra water..."); break;
  case "delicate": console.log("Using low spin speed..."); break;
  default: console.log("Standard cycle selected.");
}

// 7. ?: (Ternary - short if/else)
let isDry = true;
let message = isDry ? "Time to fold!" : "Still tumbling...";
console.log(message);

// 8. while (Loop: check condition FIRST)
let soapBubbles = 3;
while (soapBubbles > 0) {
  console.log("Rinsing... Bubbles left: " + soapBubbles);
  soapBubbles--;
}

// 9. do while (Loop: run AT LEAST once)
let cleanChecks = 0;
do {
  console.log("Checking if the stain is gone...");
  cleanChecks++;
} while (cleanChecks < 1);

// 10. for...of (Iterating through a list)
const clothes = ["👕", "👖", "🧦"];
for (let item of clothes) {
  console.log("Folding: " + item);
}