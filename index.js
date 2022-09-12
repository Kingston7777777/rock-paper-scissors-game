const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
let player;//to store the player's choice
let computer;//to store the computer's choice
let result;//to display who one

choiceBtn.forEach(button => button.addEventListener("click",() =>{
    player = button.textContent;//to get they text on each button that is to get the text of ROCK PAPER SCISSORS That is on each button 
    computerTurn();//invoke computerTurn
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){//Make the Computer to choose its turn
    const randNum = Math.floor(Math.random() *3) + 1; 

    switch(randNum){//This will make the computer choose rock or paper or scissors
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){//To check if the computer matches the player in rock paper scissors to determine the winner or if no winner draw
    if(player == computer){
        return "Draw";
    }
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "you win!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "you win!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "you win!" : "You Lose!";
    }
}