function getPrice(service) {
  const TAX = 0.50;
  let price;

  switch (service) {
    case "wash": price = 5.00; break;
    case "dry":  price = 3.00; break;
    default:     price = 0.00;
  }
  
  console.log("Service: " + service + " | Total: $" + (price + TAX));
}

getPrice("wash"); // Output: Service: wash | Total: $5.5