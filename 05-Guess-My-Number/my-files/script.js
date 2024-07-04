'use strict';

const INITIAL_SCORE = 20;

const CHECK_BUTTON = document.querySelector('.check');
const SCORE_SPAN = document.querySelector('span.score');
const GUESS_INPUT = document.querySelector('.guess');
const MESSAGE_BOX = document.querySelector('.message');
const NUMBER_DIV = document.querySelector('div.number');
const AGAIN_BUTTON = document.querySelector('.again');
const HIGH_SCORE_SPAN = document.querySelector('.highscore');

let score = INITIAL_SCORE;
let highScore = 0;
let secretNumber = generateSecretNumber();

function generateSecretNumber() {
  return Math.trunc(Math.random() * 100 + 1);
}

function displayMessage(message) {
  MESSAGE_BOX.textContent = message;
}

SCORE_SPAN.textContent = score;

CHECK_BUTTON.addEventListener('click', function () {
  if (score == 0) {
    displayMessage('You lost!');
    return;
  }
  let guess = Number(GUESS_INPUT.value);
  if (!guess) {
    displayMessage('No number provided!');
  } else if (guess === secretNumber) {
    displayMessage('You win!');
    document.querySelector('body').style.backgroundColor = '#0cb63b';
    NUMBER_DIV.textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      HIGH_SCORE_SPAN.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage('Too high!');
    } else {
      displayMessage('Too low!');
    }
    score--;
    SCORE_SPAN.textContent = score;
  }
});

AGAIN_BUTTON.addEventListener('click', function () {
  secretNumber = generateSecretNumber();
  score = INITIAL_SCORE;
  SCORE_SPAN.textContent = INITIAL_SCORE;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing!');
  GUESS_INPUT.value = null;
  NUMBER_DIV.textContent = '?';
});
