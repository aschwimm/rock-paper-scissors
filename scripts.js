function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);
    if(choice === 1) {
        choice = "rock";
    }
    else if (choice === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playGame(playerSelection, computerSelection) {    
    if (playerSelection === "rock") {
        if(computerSelection === "paper") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
        }
        else if (computerSelection === "scissors") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
        } else {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
        }
    }
    if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
        }
        else if (computerSelection === "rock") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
        } else {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
        }
    }
    if (playerSelection === "scissors") {
        if(computerSelection === "rock") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
        }
        else if (computerSelection === "paper") {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
        } else {
            console.log(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
        }
    }
}
function playerInput() {
    let playerChoice = undefined;
    while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Enter 'rock' 'paper' or 'scissors' to play a game").toLowerCase();
    }
    const computerChoice = getComputerChoice();
    playGame(playerChoice, computerChoice);
}