const choices = document.querySelectorAll(".choices");
let scoreboard = { 'player': 0, 'computer': 0, 'ties': 0}
let displayedScoreboard = document.querySelector("#scoreboard");
let gamesPlayed = 0;
let gameResult = document.querySelector("#game-result");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let playerChoice = choice.className.replace("choices ", "");
        let result = playGame(playerChoice, computerChoice);
        if(result === "win") {
            scoreboard.player++;
        }
        else if(result === "lose") {
            scoreboard.computer++;
        } else {
            scoreboard.ties++;
        }
        displayedScoreboard.textContent = `Player: ${scoreboard.player} Computer: ${scoreboard.computer} Ties: ${scoreboard.ties}`;
        gamesPlayed += 1;
        if(gamesPlayed === 5) {
            if(scoreboard.player > scoreboard.computer) {
                gameResult.textContent = "Player Wins!";
            }
            else if(scoreboard.player < scoreboard.computer) {
                gameResult.textContent = "Computer Wins!";
            } else {
                gameResult.textContent = "Tie Score!";
            }
        }
    })
})



// getComputerChoice() is a function that generates a random number between 1 and 3
// THEN assigns a string representing one of the 3 choices in rock/paper/scissors to the choice variable
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

// playgame() is a function that compares the player's selection against the computer's randomized selection
// THEN returns the result as a string
function playGame(playerSelection, computerSelection) {    
    if (playerSelection === "rock") {
        if(computerSelection === "paper") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
            return "lose";
        }
        else if (computerSelection === "scissors") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
            return "win";
        } else {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
            return "tie";
        }
    }
    if (playerSelection === "paper") {
        if(computerSelection === "scissors") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
            return "lose";
        }
        else if (computerSelection === "rock") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
            return "win";
        } else {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
            return "tie";
        }
    }
    if (playerSelection === "scissors") {
        if(computerSelection === "rock") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You lose.`)
            return "lose";
        }
        else if (computerSelection === "paper") {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. You win.`)
            return "win";
        } else {
            alert(`You picked ${playerSelection}. Computer picked ${computerSelection}. Tie.`)
            return "tie";
        }
    }
}
function playerInput() {
    let playerChoice = undefined;
    while(playerChoice !== "rock" && playerChoice !== "paper" && playerChoice !== "scissors") {
        playerChoice = prompt("Enter 'rock' 'paper' or 'scissors' to play a game").toLowerCase();
    }
    return playerChoice;
}
// playSeries function is currently unused, commented out to implement later

//function playSeries(rounds = 1) {
//    let scoreboard = { 'player': 0, 'computer': 0, 'ties': 0}
//    for (let i = 0; i < rounds; i++) {
//        let result = playGame(playerInput(), getComputerChoice());
//        if(result === "win") {
//            scoreboard.player += 1;
//        }
//        else if(result === "lose") {
//            scoreboard.computer += 1;
//        } else {
//            scoreboard.ties += 1;
//        }
//    }
//    console.log(scoreboard);
//}