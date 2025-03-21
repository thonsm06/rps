let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let roll = Math.random();
    let choice = "";
    if (roll <= 0.33) {
        choice = rock;
    } else if (roll > 0.33 && roll <= 0.66) {
        choice = paper;
    } else {
        choice = scissors
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("Please choose Rock, Paper, or Scissors");
    return choice;
}

function playRound(humanChoice, computerChoice){
    let result;
    if (humanChoice.toLowerCase() == "rock") {
        if (computerChoice == "rock") {
            result = "Tie Round";
        } else if (computerChoice == "paper") {
            result = "You lose!"
            computerScore++;
        } else if (computerChoice == "scissors") {
            result = "You Win!"
            humanScore++;
        }
    } else if (humanChoice.toLowerCase() == "paper") {
        if (computerChoice == "rock") {
            result = "You Win";
            humanScore++;
        } else if (computerChoice == "paper") {
            result = "Tie Round!"
        } else if (computerChoice == "scissors") {
            result = "You Lose!"
            computerScore++;
        }
    } else if (humanChoice.toLowerCase() == "scissors") {
        if (computerChoice == "rock") {
            result = "You Lose";
            computerScore++;
        } else if (computerChoice == "paper") {
            result = "You Win!"
            humanScore++;
        } else if (computerChoice == "scissors") {
            result = "Tie Round"
        }
    }
    return result;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));