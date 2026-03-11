function buySnack(code, money) {
  const SNACK_NAME = code === "A1" ? "Potato Chips" : "Chocolate Bar"; // ?: Ternary
  let price = 0;

  switch (code) {
    case "A1": price = 1.50; break;
    case "B2": price = 2.00; break;
    default: price = 0;
  }

  if (price === 0) {
    console.log("Invalid code!");
  } else if (money >= price) {
    console.log(`Dispensing ${SNACK_NAME}. Change: $${money - price}`);
  } else {
    console.log(`Insufficient funds for ${SNACK_NAME}. You need $${price - money} more.`);
  }
}

buySnack("A1", 2.00);