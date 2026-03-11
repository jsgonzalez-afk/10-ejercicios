const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function playNodeGame() {
  const secret = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;

  console.log("--- Welcome to the Guessing Game! ---");
  console.log("I'm thinking of a number between 1 and 10.");

  const ask = () => {
    rl.question("What is your guess? ", (answer) => {
      let guess = Number(answer);
      attempts++;

      if (guess < secret) {
        console.log("Too low! ⬇️");
        ask(); // Ask again
      } else if (guess > secret) {
        console.log("Too high! ⬆️");
        ask(); // Ask again
      } else if (guess === secret) {
        console.log(`🎯 BINGO! It was ${secret}. It took you ${attempts} tries.`);
        rl.close(); // Stop the game
      } else {
        console.log("Please enter a valid number.");
        ask();
      }
    });
  };

  ask();
}

playNodeGame();