'use strict';

// Selecting elements
const playerOneSection = document.querySelector('.player--0');
const playerTwoSection = document.querySelector('.player--1');
const userOneScoreElement = document.getElementById('score--0');
const userTwoScoreElement = document.getElementById('score--1');
const userOneCurrentScoreElement = document.getElementById('current--0');
const userTwoCurrentScoreElement = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollDiceButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

// Scores
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Functions
function rollTheDice() {
  const diceRoll = Math.trunc(Math.random() * 6) + 1;
  diceElement.src = `dice-${diceRoll}.png`;
  return diceRoll;
}

function displayDiceRoll() {
  diceElement.classList.remove('hidden');
}

function hideDice() {
  diceElement.classList.add('hidden');
}

function switchActivePlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  currentScore = 0;
  playerOneSection.classList.toggle('player--active');
  playerTwoSection.classList.toggle('player--active');
}

function resetGame() {
  userOneScoreElement.textContent = 0;
  userTwoScoreElement.textContent = 0;
  diceElement.classList.add('hidden');
  userOneCurrentScoreElement.textContent = 0;
  userTwoCurrentScoreElement.textContent = 0;
  scores[0] = 0;
  scores[1] = 0;
  playerOneSection.classList.remove('player--winner');
  playerTwoSection.classList.remove('player--winner');
  rollDiceButton.classList.remove('hidden');
  holdButton.classList.remove('hidden');
  playerOneSection.classList.add('player--active');
  playerTwoSection.classList.remove('player--active');
}

// Starting conditions
resetGame();

// Add listeners
newButton.addEventListener('click', function () {
  resetGame();
});

rollDiceButton.addEventListener('click', function () {
  const diceRoll = rollTheDice();
  displayDiceRoll();

  if (diceRoll !== 1) {
    currentScore += diceRoll;
    if (activePlayer == 0) {
      userOneCurrentScoreElement.textContent = currentScore;
    } else {
      userTwoCurrentScoreElement.textContent = currentScore;
    }
  } else {
    switchActivePlayer();
  }
});

holdButton.addEventListener('click', function () {
  if (activePlayer == 0) {
    scores[0] += currentScore;
    userOneScoreElement.textContent = scores[0];
    userOneCurrentScoreElement.textContent = 0;
  } else {
    scores[1] += currentScore;
    userTwoScoreElement.textContent = scores[1];
    userTwoCurrentScoreElement.textContent = 0;
  }
  if (scores[activePlayer] >= 30) {
    diceElement.classList.add('hidden');
    rollDiceButton.classList.add('hidden');
    holdButton.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
  }
  switchActivePlayer();
});
