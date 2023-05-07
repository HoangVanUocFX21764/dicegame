'use strict';

//white color
// const intervalid = setInterval(() => {
//   document.querySelector(`#score--${activePlayer}`).classList.toggle('white');
// }, 1000);

//SLECTING ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

//lúc  STARTING
score0El.textContent = 0;
score1El.textContent = 0;

const diceEl = document.querySelector('.dice');
diceEl.classList.add('hidden');
console.log(diceEl.classList);

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const btnNew = document.querySelector('.btn--new');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// ROLLING DICE FUNTIONALLITY
btnroll.addEventListener('click', function () {
  if (playing) {
    //1. gennerating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //2. display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. check for rooled 1? switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // CHANGE LATER
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnhold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check if player's score >= 100
    //finish
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      // intervalid();

      //---
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch palyer
      switchPlayer();
    }
  }
});

//new game
btnNew.addEventListener('click', function () {
  currentScore = 0;
  activePlayer = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores[activePlayer] = 0;
  if (!player0El.classList.contains('player--active')) {
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  }
  scores = [0, 0];
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  playing = true;

  //---

  // clearInterval(intervalid);
});
