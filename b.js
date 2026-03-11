function trackDelivery(distance) {
  let blocksAway = distance;

  while (blocksAway > 0) {
    console.log(`Truck is ${blocksAway} blocks away...`);
    blocksAway--; // Decreasing the distance
  }

  console.log("📦 Package has arrived at your door!");
}

trackDelivery(3);