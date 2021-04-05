'use strict';

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const currentScore0El = document.querySelector("#current--0");
const currentScore1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");

const player0El = prompt("Enter First Player Name:", "Player 1");
const player1El = prompt("Enter Second Player Name:", "Player 2");

const point = parseInt(prompt("Winning Point:", "100"));
const diceSound = new Audio('rollDice.mp3');
const holdSound = new Audio('hold.mp3');
const winnerSound = new Audio('winner.mp3');

document.querySelector("#name--0").textContent = player0El;
document.querySelector("#name--1").textContent = player1El;


score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;
const score = [0, 0];
let player = 0;
let playing = true;
diceEl.classList.add("hidden");

rollDice.addEventListener("click", rollDiceFunc);
hold.addEventListener("click", holdFunc);
newGame.addEventListener("click", newGameFunc);

function rollDiceFunc() {
    if (playing) {
        diceSound.play();
        const dice = Math.floor(Math.random() * 6) + 1;
        console.log(dice);

        diceEl.classList.remove("hidden");
        diceEl.src = `dice-${dice}.png`;
        if (dice !== 1) {

            currentScore += dice;
            document.querySelector(`#current--${player}`).textContent = currentScore;

        } else {
            changePlayer();
        }
    }
}

function holdFunc() {
    if (playing) {
        score[player] += currentScore;
        document.querySelector(`#score--${player}`).textContent = score[player];

        if (score[player] >= point) {
            document.querySelector(`.player--${player}`).classList.add("player--winner");
            playing = false;
            winnerSound.play();
            diceEl.src = "tenor.gif"
            diceEl.style.height = "15rem";
            diceEl.style.boxShadow = "none";

        } else {
            changePlayer();
        }
    }
}

function newGameFunc() {
    score[0] = 0;
    score[1] = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;
    document.querySelector(`.player--${player}`).classList.remove("player--winner");
    diceEl.classList.add("hidden");

    player = 0;
    playing = true;
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    playing = true;


}

function changePlayer() {
    holdSound.play();
    currentScore = 0;
    document.querySelector(`#current--${player}`).textContent = currentScore;
    player = player === 0 ? 1 : 0;
    document.querySelector(".player--0").classList.toggle("player--active");
    document.querySelector(".player--1").classList.toggle("player--active");
}