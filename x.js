function checkStock() {
  const pantry = ["Milk", "Eggs", "Bread", "Empty", "Butter"];

  for (let item of pantry) {
    if (item === "Empty") {
      console.log("⚠️ Alert: Found an empty slot! Need to buy more.");
    } else {
      console.log(`✅ We have plenty of ${item}.`);
    }
  }
}

checkStock();