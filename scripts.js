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

function playSeries(rounds = 1) {
    if(typeof(rounds) !== "integer") {
        alert("Enter valid number of rounds. Minimum is 1 maximum is 10");
        return
    }

    if(!parseInt(rounds)) {
        alert("Enter valid number of rounds. Minimum is 1 maximum is 10");
        return
    }
    if(rounds < 1 || rounds > 10 || rounds % 1 !== 0) {
        alert("Enter valid number of rounds. Minimum is 1 maximum is 10");
        return
    }
    let scoreboard = { 'player': 0, 'computer': 0, 'ties': 0}
    for (let i = 0; i < rounds; i++) {
        let result = playGame(playerInput(), getComputerChoice());
        if(result === "win") {
            scoreboard.player += 1;
        }
        else if(result === "lose") {
            scoreboard.computer += 1;
        } else {
            scoreboard.ties += 1;
        }
    }
    console.log(scoreboard);
}