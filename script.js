const CHOICES = ["ROCK", "PAPER", "SCISSORS"];

function setComputerChoice() {
  window.computerChoose = Math.floor(Math.random() * CHOICES.length);
  return window.computerChoose;
}
const round = document.querySelector('[data-ns-test="game-number"]');
const start = document.querySelector('[data-ns-test="play-game"]');
const result = document.querySelector('[data-ns-test="game-result"]');
const rResult = document.querySelector('[data-ns-test="rount-result"]');
start.addEventListener("click", () => {
	
  solve(Number(round.value));
});
function solve(ans) {
  let userAns = 0, compAns = 0;
  const copChoice = document.querySelector('[data-ns-test="cumputer-choose"]');
  const roundLeft = document.querySelector('[data-ns-test="round-left"]');
  const userP = document.querySelector('[data-ns-test="user-point"]');
  const compP = document.querySelector('[data-ns-test="computer-point"]');

  roundLeft.textContent = ans;
  let rock = 0, paper = 0, scissors = 0;

  function playTurn(choice) {
    if (ans <= 0) return;
    ans--;
    roundLeft.textContent = ans;
    let cumputer = CHOICES[setComputerChoice()];
    copChoice.textContent = cumputer;
    if (choice === "ROCK") {
      if (cumputer == "PAPER") {
        compAns++;
        rResult.textContent = "LOSE";
      } else if (cumputer == "SCISSORS") {
        userAns++;
        rResult.textContent = "WON";
      } else {
        rResult.textContent = "TIE";
      }
    }
    if (choice === "PAPER") {
      if (cumputer == "ROCK") {
        userAns++;
        rResult.textContent = "WON";
      } else if (cumputer == "SCISSORS") {
        compAns++;
        rResult.textContent = "LOSE";
      } else {
        rResult.textContent = "TIE";
      }
    }
    if (choice === "SCISSORS") {
      if (cumputer == "PAPER") {
        userAns++;
        rResult.textContent = "WON";
      } else if (cumputer == "ROCK") {
        compAns++;
        rResult.textContent = "LOSE";
      } else {
        rResult.textContent = "TIE";
      }
    }
    rock = 0;
    paper = 0;
    scissors = 0;
    userP.textContent = userAns;
    compP.textContent = compAns;
    if (ans == 0) {
      if (userAns > compAns) {
        result.textContent = "WON";
      } else if (userAns < compAns) {
        result.textContent = "LOSE";
      } else {
        result.textContent = "TIE";
      }
    }
  }

  document.querySelector('[data-ns-test="rock"]').onclick = () => {
    rock++;
    playTurn("ROCK");
  };
  document.querySelector('[data-ns-test="paper"]').onclick = () => {
    paper++;
    playTurn("PAPER");
  };
  document.querySelector('[data-ns-test="scissors"]').onclick = () => {
    scissors++;
    playTurn("SCISSORS");
  };
}