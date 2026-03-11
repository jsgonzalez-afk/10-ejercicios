function fillCup(sizeInMl) {
  let currentMl = 0;
  console.log("Starting pour...");

  while (currentMl < sizeInMl) {
    currentMl += 50;
    console.log("Cup is now at " + currentMl + "ml");
  }

  console.log("Coffee is ready! Enjoy.");
}

fillCup(200);