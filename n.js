function grindBeans(seconds) {
  let timer = seconds;

  do {
    console.log("BZZZZT! Grinding in progress...");
    timer--;
  } while (timer > 0);

  console.log("Done! Coffee grounds are ready.");
}

grindBeans(2);