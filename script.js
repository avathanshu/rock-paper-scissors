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


function getHumanChoice(clicked) {
    let choice = clicked
    lower = choice.toLowerCase();
    out = `${lower.slice(0,1).toUpperCase() + lower.slice(1)}`;
    return out;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = null
    if ((humanChoice === "Rock" && computerChoice === "Paper") || (humanChoice === "Paper" && computerChoice === "Scissors") || (humanChoice === "Scissors" && computerChoice==="Rock")) {
        computerScore++
        result = `You lose! ${computerChoice} beats ${humanChoice}!`
        return result;
    }

    if ((humanChoice === "Rock" && computerChoice === "Scissors") || (humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++
        result = `You win! ${humanChoice} beats ${computerChoice}!`;
        return result;
    }

    if (humanChoice === computerChoice) {
        result = `Tie! You made the same choice as the computer!`;
        return result
    }
}


function playGame(humanChoice, computerChoice) {
    
    if (humanScore === 5) {
        result = `Congratulations, you win!`;
        return result;
    }

    if (computerScore === 5) {
        result = `Sorry, you lose!`;
        return result;
    }
    else {
        return playRound(humanChoice, computerChoice);
    }
}


const buttonRock = document.createElement("button");
const buttonPaper = document.createElement("button");
const buttonScissors = document.createElement("button");

const container = document.querySelector(".container");
const buttondiv = document.querySelector(".buttondiv");
const body = document.querySelector("body");
let humanText = document.querySelector(".humanscore");
let computerText = document.querySelector(".computerscore");
humanText.textContent = `Human Score: ${humanScore}`
computerText.textContent = `Computer Score: ${computerScore}`


let updateText = document.querySelector(".statusText");
updateText.textContent = "Welcome to Rock, Paper, Scissors! Choose your Warrior to begin!"

buttondiv.appendChild(buttonRock);
buttondiv.appendChild(buttonPaper);
buttondiv.appendChild(buttonScissors);


buttonRock.textContent = "ROCK";
buttonPaper.textContent = "PAPER";
buttonScissors.textContent = "SCISSORS";



const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("mouseover", () => {
    button.setAttribute("style", "background-color: orange; border: 4px solid; border-color: magenta;")
}))

buttons.forEach(button => button.addEventListener("mouseout", () => {
    button.setAttribute("style", "background-color: lightblue;")
}))

let onclick = buttons.forEach(button => button.addEventListener("click", () => {
    updateText.textContent = playGame(getHumanChoice(button.textContent), getComputerChoice())
    humanText.textContent = `Human Score: ${humanScore}`
    computerText.textContent = `Computer Score: ${computerScore}`
}))
