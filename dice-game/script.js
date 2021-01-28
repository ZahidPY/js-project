// Create variables for the game state
let player1Score = 0
let player2Score = 0
let player1Turn = true

// create variables to store references to the necessary DOM nodes
const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")


rollBtn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random()*6)+1
   
        whoseTurn(randomNumber);
    
    
})

function whoseTurn(randomNumber){
    
    if(player1Turn){
        
        player1Score += randomNumber;
        player1Dice.textContent = randomNumber;
        player1Scoreboard.textContent = player1Score;
        if( player1Score >= 20 ){
            rollBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
            message.textContent = "Player 1 has won! 🎉 ";
        }else{
            message.textContent = "Player 2 Turn";
            player2Dice.classList.add("active");
            player1Dice.classList.remove("active");
            player1Turn = false;
        }

        
        
    }else{

        player2Score += randomNumber;
        player2Dice.textContent = randomNumber;
        player2Scoreboard.textContent = player2Score;

        if( player2Score >= 20 ){
            rollBtn.style.display = "none";
            resetBtn.style.display = "inline-block";
            message.textContent = "Player 2 has won! 🥳 ";

        }else{

        message.textContent = "Player 1 Turn";
        player1Dice.classList.add("active");
        player2Dice.classList.remove("active");
        player1Turn = true;
        }

    
    }
}

resetBtn.addEventListener("click", function(){
    reset();
});

function reset(){
    message.textContent = "Player 1 Turn";
    player1Dice.classList.add("active");
    player2Dice.classList.remove("active");
    player1Turn = true;

    player1Score = 0;
    player2Score = 0;

    player1Dice.textContent = "-";
    player1Scoreboard.textContent = 0;

    player2Dice.textContent = "-";
    player2Scoreboard.textContent = 0;

    rollBtn.style.display = "inline-block";
    resetBtn.style.display = "none";


}
