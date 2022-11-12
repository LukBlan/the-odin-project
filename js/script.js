let playerScore = 0;
let computerScore = 0;

addEventToPlayerHand();
addScaleEventInPlayerHand();
removeScaleEvent();
changeComputerMouseOnHover();
changePlayerMouseOnHover();
showStartGameButton()

function playGame() {
  changeDisplay("flex");
  deleteNewGameButton();
  resetScore();
}

function playRound(playerOption) {
  const options = ["rock", "paper", "scissors"];
  let computerChoice = getComputerChoice(options)
  let resultText = chooseWinner(playerOption, computerChoice)
  displayResult(resultText);
  updateScores();
  checkWinner();
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

function addScaleEventInPlayerHand() {
  const playerButton = document.querySelectorAll(".card-img");
  playerButton.forEach(element => element.addEventListener("mouseover", scalePlayerOption))
}

function removeScaleEvent() {
  const playerButton = document.querySelectorAll(".card-img");
  playerButton.forEach(element => element.addEventListener("mouseout", () => {
    element.classList.remove("mouseOverCard");
  }))
}

function scalePlayerOption() {
  this.classList.add("mouseOverCard")
}

function changeMouse(elementId, mouseStyle) {
  const playerButton = document.getElementById(elementId);
  playerButton.childNodes.forEach(element => element.addEventListener("mouseover", () => {
    element.style.cursor = mouseStyle
  }));
}

function changeComputerMouseOnHover() {
  changeMouse("computer-hand", "not-allowed");
}

function changePlayerMouseOnHover() {
  changeMouse("player-hand", "pointer");
}

function displayResult(text) {
  const roundText = document.getElementById("round-text");
  roundText.innerText = text;
  if (text.includes("Won")) {
    roundText.style.color = "green";
    ++playerScore;
  } else if (text.includes("Loose")) {
    roundText.style.color = "red";
    ++computerScore;
  } else {
    roundText.style.color = "orange";
  }
}

function updateScores() {
  const computer = document.getElementById("computer-result");
  const player = document.getElementById("player-result");
  computer.innerText = computerScore.toString();
  player.innerText = playerScore.toString();
  if (computerScore > playerScore) {
    computer.style.color = "green";
    player.style.color = "red";
  } else if (computerScore < playerScore) {
    computer.style.color = "red";
    player.style.color = "green";
  } else {
    computer.style.color = "yellow";
    player.style.color = "yellow";
  }
}

function resetScore() {
  computerScore = 0;
  playerScore = 0;
  updateScores();
}

function checkWinner() {
  if (computerScore === 5) {
    alert("You loose this game");
    showStartGameButton()

  } else if (playerScore === 5) {
    console.log("you won this game")
    showStartGameButton()
  }
}

function showStartGameButton() {
  changeDisplay("none");
  const newGameButton = document.createElement("button");
  newGameButton.innerText = "Start Game";
  newGameButton.addEventListener("click", playGame);
  document.getElementById("game-section").append(newGameButton);
}

function changeDisplay(text) {
  document.getElementById("computer").style.display = text;
  document.getElementById("player").style.display = text;
  document.getElementById("result-screen").style.display = text;
}

function deleteNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.parentElement.removeChild(newGameButton);
}