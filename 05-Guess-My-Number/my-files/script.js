'use strict';

const secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;

const buttonCheck = document.querySelector(".check");
const scoreSpan = document.querySelector("span.score");
const guessInput = document.querySelector('.guess');
const messageBox = document.querySelector('.message');
const numberDiv = document.querySelector('div.number');

scoreSpan.textContent = score;
numberDiv.textContent = secretNumber;

buttonCheck.addEventListener('click', function() {
    if (score == 0) {
        messageBox.textContent = "You lost!";
        return;
    }
    let guess = Number(guessInput.value);
    if (!guess) {
        messageBox.textContent = 'No number provided!';
    } else if (guess === secretNumber) {
        messageBox.textContent = 'You win!';
    } else if (guess > secretNumber) {
        messageBox.textContent = 'Too high!';
        score--;
        scoreSpan.textContent = score;
    } else {
        messageBox.textContent = 'Too low!';
        score--;
        scoreSpan.textContent = score;
    }
})
