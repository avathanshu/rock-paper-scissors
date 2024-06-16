function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
    let i = getRandomIntInclusive(1,3);
    let choice=null;
    switch(i) {
        case 1:
            choice = "Rock";
            break;
        
        case 2:
            choice = "Paper";
            break;
        
        case 3:
            choice = "Scissors";
            break;

        default: "Nothing to choose!";
    }

    return choice;
}

function getHumanChoice() {
    let choice = prompt("Choose your warrior: Rock, Paper, or Scissors?");
    lower = choice.toLowerCase();
    out = `${lower.slice(0,1).toUpperCase() + lower.slice(1)}`;
    return out;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = null
    if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice==="Rock")) {
        result = `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore++
        return result;
    }

    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++
        return result;
    }

    if (humanChoice === computerChoice) {
        result = `Tie! You made the same choice as the computer!`;
        return result
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()))