function guessingGame() {
    // Generate a random number between 0 and 99
    const secretNumber = Math.floor(Math.random() * 100);
    let guesses = 0;
    let hasWon = false;

    return function(guess) {
        if (hasWon) {
            return "The game is over, you already won!";
        }

        guesses++;

        if (guess === secretNumber) {
            hasWon = true;
            const guessText = guesses === 1 ? "guess" : "guesses";
            return `You win! You found ${guess} in ${guesses} ${guessText}.`;
        } else if (guess < secretNumber) {
            return `${guess} is too low!`;
        } else {
            return `${guess} is too high!`;
        }
    };
}
