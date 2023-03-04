//your code here


  // generate a random number between 1 and 100
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  // get the elements from the DOM
  const userPrompt = document.getElementById("user");
  const guessInput = document.getElementById("guess");
  const responseOutput = document.getElementById("respond");

  // initialize variables for tracking the previous guess and its difference with the secret number
  let prevGuess = null;
  let prevDiff = null;

  // function to compare the current guess with the secret number and provide feedback to the user
  function evaluateGuess() {
    // get the user's guess as a number
    const guess = parseInt(guessInput.value);

    // if the guess is not a valid number, return
    if (isNaN(guess)) {
      return;
    }

    // if the guess is correct, provide feedback and disable the input and button
    if (guess === secretNumber) {
      userPrompt.textContent = "Congratulations, you guessed the number!";
      guessInput.disabled = true;
      guessButton.disabled = true;
      return;
    }

    // calculate the difference between the guess and the secret number
    const diff = Math.abs(guess - secretNumber);

    // provide feedback to the user based on the difference and the previous guess
    if (prevGuess === null) {
      // first guess, just provide feedback to guess higher or lower
      responseOutput.textContent = guess < secretNumber ? "Guess higher!" : "Guess lower!";
    } else {
      // not the first guess, compare the difference to the previous difference
      if (diff < prevDiff) {
        // getting hotter
        const hotter = prevGuess < guess ? "higher" : "lower";
        responseOutput.textContent = `Getting hotter! Guess ${hotter}!`;
      } else {
        // getting colder
        responseOutput.textContent = guess < secretNumber ? "Guess higher!" : "Guess lower!";
      }
    }

    // save the current guess and its difference for comparison with the next guess
    prevGuess = guess;
    prevDiff = diff;
  }

  // get the button element and add an event listener for clicks
  const guessButton = document.createElement("button");
  guessButton.textContent = "Guess";
  guessButton.addEventListener("click", evaluateGuess);

  // add the button to the DOM
  userPrompt.insertAdjacentElement("afterend", guessButton);

