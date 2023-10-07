'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = message => document.querySelector(".message").textContent = message;

document.querySelector(".check").addEventListener('click', function () {
    // Take a number form user and store it in a variable, when "check" button is clicked 
    const guess = Number(document.querySelector(".guess").value);
    // When there is no input 
    if (!guess) {
        displayMessage("No number!");
    }

    // When player win the game
    else if (guess === secretNumber) {
        displayMessage("WOW u have guessed a Correct Number!");
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem"
        document.querySelector(".number").textContent = guess;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    }
    // When guess is wrong
    else {
        if (score <= 0) {
            displayMessage("You Lost The Game");
            document.querySelector(".score").textContent = 0;
        }

        displayMessage(guess > secretNumber ? "Too High!" : "Too Loo!");
        score--;
        document.querySelector(".score").textContent = score;

    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
});