'use strict';

const totalScore0 = document.querySelector('#score--0');
const totalScore1 = document.querySelector('#score--1');
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const player = document.querySelectorAll('.player');
const current = document.querySelectorAll('.current-score');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let totalScore, currentScore, activePlayer, playing;

myreset();

/// Roll BUTTON
btnRoll.addEventListener('click', function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      // roll
      currentScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        String(currentScore);
    } else {
      // switch
      myswitch();
    }
  }
});

//// hold BUTTON
btnHold.addEventListener('click', function () {
  // save score
  if (playing) {
    totalScore[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScore[activePlayer];
    //end game
    if (totalScore[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      playing = false;
      diceEl.classList.add('hidden');
    }
    myswitch();
  }
});

///  new game BUTTON
btnNew.addEventListener('click', function () {
  myreset();
});

/// functions
function myswitch() {
  for (let i = 0; i < 2; i++) {
    player[i].classList.toggle('player--active');
  }
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = String(0);
  activePlayer = activePlayer === 0 ? 1 : 0;
}

function myreset() {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  totalScore0.textContent = 0;
  totalScore1.textContent = 0;
  playing = true;
  dice.classList.add('hidden');
  for (let i = 0; i < 2; i++) {
    player[i].classList.remove('player--winner');
    current[i].textContent = 0;
  }
  document.querySelector('.player--0').classList.add('player--active');
}
