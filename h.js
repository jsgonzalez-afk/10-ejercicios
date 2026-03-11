function getTicketPrice(age) {
  const FULL_PRICE = 15;
  const DISCOUNT_PRICE = 10;
  
  // Using ternary ?: to decide status
  let isSenior = age >= 65 ? true : false;
  
  // Final logic
  if (isSenior || age < 12) {
    console.log(`Discount applied! Please pay $${DISCOUNT_PRICE}.`);
  } else {
    console.log(`Standard ticket. Please pay $${FULL_PRICE}.`);
  }
}

getTicketPrice(70);