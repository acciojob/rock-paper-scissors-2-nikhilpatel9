
const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function setComputerChoice() {
    window.computerChoose = Math.floor(Math.random() * CHOICES.length);
    return window.computerChoose;
}

const round = document.querySelector('[data-ns-test="game-number"]');
const start = document.querySelector('[data-ns-test="play-game"]');
const result = document.querySelector('[data-ns-test="game-result"]');
const rResult = document.querySelector('[data-ns-test="round-result"]');

const copChoice = document.querySelector('[data-ns-test="computer-choose"]');
const roundLeft = document.querySelector('[data-ns-test="rounds-left"]');
const userP = document.querySelector('[data-ns-test="user-points"]');
const compP = document.querySelector('[data-ns-test="computer-points"]');

const rockBtn = document.querySelector('[data-ns-test="rock"]');
const paperBtn = document.querySelector('[data-ns-test="paper"]');
const scissorsBtn = document.querySelector('[data-ns-test="scissors"]');

let userAns = 0, compAns = 0;
let totalRounds = 0, playedRounds = 0;

start.addEventListener("click", () => {
    totalRounds = Number(round.value);

    if (!Number.isInteger(totalRounds) || totalRounds <= 0) return;

    userAns = 0;
    compAns = 0;
    playedRounds = 0;

    userP.textContent = userAns;
    compP.textContent = compAns;
    roundLeft.textContent = totalRounds;

    result.textContent = "";
    rResult.textContent = "";

    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
});

function solve(userChoice) {

    if (playedRounds >= totalRounds) return;

    let cumputer = CHOICES[setComputerChoice()];
    copChoice.textContent = cumputer;

    if (userChoice == "ROCK") {
        if (cumputer == "PAPER") {
            compAns++;
        } else if (cumputer == "SCISSORS") {
            userAns++;
        }
    }

    if (userChoice == "PAPER") {
        if (cumputer == "ROCK") {
            userAns++;
        } else if (cumputer == "SCISSORS") {
            compAns++;
        }
    }

    if (userChoice == "SCISSORS") {
        if (cumputer == "PAPER") {
            userAns++;
        } else if (cumputer == "ROCK") {
            compAns++;
        }
    }

    playedRounds++;

    userP.textContent = userAns;
    compP.textContent = compAns;
    roundLeft.textContent = totalRounds - playedRounds;

    if (userAns > compAns) {
        rResult.textContent = "WON";
    } else if (userAns < compAns) {
        rResult.textContent = "LOSE";
    } else {
        rResult.textContent = "TIE";
    }

    if (playedRounds == totalRounds) {

        if (userAns > compAns) {
            result.textContent = "WON";
        } else if (userAns < compAns) {
            result.textContent = "LOSE";
        } else {
            result.textContent = "TIE";
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

rockBtn.addEventListener("click", () => solve("ROCK"));
paperBtn.addEventListener("click", () => solve("PAPER"));
scissorsBtn.addEventListener("click", () => solve("SCISSORS"));
