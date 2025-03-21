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

const body = document.querySelector("body");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
const result = document.createElement("div");
result.textContent = `${humanScore} | ${computerScore}`;

rockBtn.classList.toggle("button");
paperBtn.classList.toggle("button");
scissorsBtn.classList.toggle("button");

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    result.textContent = `${humanScore} | ${computerScore}`;
    checkScore();
});
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    result.textContent = `${humanScore} | ${computerScore}`;
    checkScore();
});
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    result.textContent = `${humanScore} | ${computerScore}`;
    checkScore();
});

function checkScore() {
    if (humanScore == 5) {
        humanScore = 0;
        computerScore = 0;
        result.textContent = `${humanScore} | ${computerScore}`;
        alert("You Win!");
    } else if (computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        result.textContent = `${humanScore} | ${computerScore}`;
        alert("You Lose!");
    }
}


body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(result);


