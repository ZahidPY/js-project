'use strict';

const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
let randomNumber = Math.floor(Math.random() * 20) + 1;
let scoreValue = 20;
let highscoreValue = 0;


document.querySelector(".check").addEventListener("click", checkButton);
document.querySelector(".again").addEventListener("click", againButton);

function checkButton() {
    const guess = parseInt(document.querySelector(".guess").value);
    if (!guess) message.textContent = "⛔ No Number";
    else {
        if (scoreValue > 0) {
            if (randomNumber == guess) {
                message.textContent = "🏆 Congrats!🥇";
                if (highscoreValue < scoreValue) {
                    highscoreValue = scoreValue;
                    highscore.textContent = highscoreValue;
                }
                forWinner()
            } else if (randomNumber > guess) {
                message.textContent = "📉 Too Low";
                decreaseScore();

                if (scoreValue == 0) {
                    forLooser();
                }
            } else {
                message.textContent = "📈 Too High";
                decreaseScore();

                if (scoreValue == 0) {
                    forLooser();
                }
            }
        }
    }

}


function againButton() {
    randomNumber = Math.floor(Math.random() * 20);
    number.textContent = randomNumber;
    message.textContent = "Start guessing...";
    scoreValue = 20;
    score.textContent = scoreValue;
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    number.textContent = "?";
    document.querySelector(".check").style.display = "block";

}

function forWinner(){
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".title").textContent = "Hey Winner!! 😉"

    forEffect();
}
function forLooser() {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".title").textContent = "You Looser!! 😉"
    forEffect();
   
}
function forEffect(){
    document.querySelector("*").classList.add("shake-btn")
    number.textContent = randomNumber;
    document.querySelector(".check").style.display = "none";
}

function decreaseScore() {
    scoreValue--;
    score.textContent = scoreValue;
}