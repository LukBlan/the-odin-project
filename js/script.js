let round = 1;
let playerScore = 0;
let computerScore = 0;

addEventToPlayerHand();
showStartGameButton()

function playGame() {
  round = 1;
  changeDisplay("display-flex");
  removeDisplay("display-none");
  deleteNewGameButton();
  resetScore();
  updateRound();
}

function playRound(playerOption) {
  const options = ["rock", "paper", "scissors"];
  let computerChoice = getComputerChoice(options)
  let resultText = chooseWinner(playerOption, computerChoice)
  displayResult(resultText);
  updateScores();
  checkWinner();
  round++;
  updateRound();
}

function updateRound() {
  let roundTracker = document.querySelector("#round-counter");
  roundTracker.innerText = "Round " + round.toString();
}

function getComputerChoice(options) {
  return options[Math.round(Math.random() * (options.length - 1))];
}

function chooseWinner(playerOption, computerOption) {
  const playerPositionInArray = getPositionInArray(playerOption);
  const computerPositionInArray = getPositionInArray(computerOption);

  // Player:Row  Computer:Column
  let arrayOfResults = [ //Paper                      Scissors                               Rock
    [                          "draw", "You Loose!, Paper Lost to Scissors", "You Won!, Paper beats Rock"],
    ["You Won!, Scissors beats Paper", "draw",                               "You Loose!, Scissors lost to Rock"],
    ["You Loose!, Rock lost to Paper", "You Won! Rock Beats Scissors",        "draw"]
  ]
  return arrayOfResults[playerPositionInArray][computerPositionInArray];
}

//Returns a number based on word length 0:Paper  1:Scissors  2:Rock - with this you don't need if conditionals
function getPositionInArray(option) {
  return Math.round(option.length / 2) % 3;
}

function addEventToPlayerHand() {
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("click", () => {
      let stringOption = element.src.split("/")[5].split(".")[0];
      playRound(stringOption)
    })
  )
}

function displayResult(text) {
  if (text.includes("Won")) {
    ++playerScore;
    let newP = document.createElement("p");
    newP.innerText = "test";
    const playerOption = document.querySelector("#player-option")
    playerOption.parentElement.replaceChild(newP, playerOption);
  } else if (text.includes("Loose")) {
    ++computerScore;
  }
}

function updateScores() {
  const computer = document.getElementById("computer-result");
  const player = document.getElementById("player-result");
  computer.innerText = computerScore.toString();
  player.innerText = playerScore.toString();
  if (computerScore > playerScore) {
    computer.style.backgroundColor = "green";
    player.style.backgroundColor = "red";
  } else if (computerScore < playerScore) {
    computer.style.backgroundColor = "red";
    player.style.backgroundColor = "green";
  } else {
    computer.style.backgroundColor = "yellow";
    player.style.backgroundColor = "yellow";
  }
}

function resetScore() {
  computerScore = 0;
  playerScore = 0;
  updateScores();
}

function checkWinner() {
  if (computerScore === 5) {
    removeDisplay("display-flex")
    showStartGameButton("display-flex");

  } else if (playerScore === 5) {
    removeDisplay("display-flex")
    showStartGameButton()
  }
}

function showStartGameButton() {
  changeDisplay("display-none");
  const newGameButton = document.createElement("button");
  newGameButton.innerText = "Start Game";
  newGameButton.addEventListener("click", playGame);
  document.getElementById("game-section").append(newGameButton);
}

function changeDisplay(text) {
  document.querySelector(".computer").classList.add(text)
  document.querySelector(".player").classList.add(text)
  document.querySelector(".result-screen").classList.add(text)
}

function deleteNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.parentElement.removeChild(newGameButton);
}

function removeDisplay(text) {
  document.querySelector(".computer").classList.remove(text)
  document.querySelector(".player").classList.remove(text)
  document.querySelector(".result-screen").classList.remove(text)
}