'use strict';

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

let currentScore = 0;

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let activePlayer = 0;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let scores = [0, 0];

// starting
score0El.textContent = 0;
score1El.textContent = 0;

//gennerral roll
btnRoll.addEventListener('click', function () {
  //1. set up rolling
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. display dice
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  //3. check dice >1? switch palyer
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //plus
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //1. plus dice in score
  scores[activePlayer] += currentScore;
  console.log(scores[activePlayer]);

  //2. score in player
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];

  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
});
