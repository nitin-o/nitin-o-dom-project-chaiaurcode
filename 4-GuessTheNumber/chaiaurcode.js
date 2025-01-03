let gnumbar = parseInt(Math.random() * 100 + 1);
const form = document.querySelector("form");
const lastResult = document.querySelector(".lastResult");
const guesses = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const reset = document.querySelector(".reset");

let arr = [];
let count = 10;
let game = true;

console.log(`Generated Number: ${gnumbar}`);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const guessField = document.querySelector("#guessField");
    const guessFieldNum = parseInt(guessField.value);

    if (isNaN(guessFieldNum) || guessFieldNum <= 0 || guessField.value === "") {
    lowOrHi.innerHTML = "Please enter a valid number!";
    return;
    }

    if (!game) {
    lowOrHi.innerHTML = "Game is over. Please reset to play again.";
    return;
    }

    gameStart(guessFieldNum);
  guessField.value = ""; // Clear the input field after each guess
});

function gameStart(guess) {
  if (arr.length >= 9) {
    gameOver();
  } else if (guess > gnumbar) {
    updateGameState(guess, "Generated number is lower.");
  } else if (guess < gnumbar) {
    updateGameState(guess, "Generated number is higher.");
  } else {
    gameWin();
  }
}

function updateGameState(guess, feedback) {
  arr.push(guess);
  guesses.innerHTML = arr.join(", ");
  count--;
  lastResult.innerHTML = `Attempts left: ${count}`;
  lowOrHi.innerHTML = feedback;
}

function gameWin() {
  lowOrHi.innerHTML = "Congratulations! You guessed the number!";
  game = false;
  createResetButton();
}

function gameOver() {
  lowOrHi.innerHTML = "Game Over! You've used all attempts.";
  game = false;
  createResetButton();
}

function createResetButton() {
  reset.innerHTML = "<button class='resetbtn'>Reset Game</button>";
  const resetbtn = document.querySelector(".resetbtn");
  resetbtn.addEventListener("click", resetGame);
}

function resetGame() {
  arr = [];
  count = 10;
  game = true;
  guesses.innerHTML = "";
  lastResult.innerHTML = `Attempts left: 10`;
  lowOrHi.innerHTML = "";
  reset.innerHTML = "";
  gnumbar = parseInt(Math.random() * 100 + 1);
  console.log(`Game reset. Ready to play again!  ${gnumbar}`);
}
