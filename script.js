function getComputerChoice() {
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";
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


console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Please choose Rock, Paper, or Scissors");
    return choice;
}

console.log(getHumanChoice());