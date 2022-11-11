let rounds = 0;
let playerScore = 0;
let computerScore = 0;

addEventToPlayerHand()
addScaleEventInPlayerHand()
removeScaleEvent()
changeComputerMouseOnHover()
changePlayerMouseOnHover()

function playRound(playerOption) {
  const options = ["rock", "paper", "scissors"];
  displayResult(chooseWinner(playerOption, getComputerChoice(options)));
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
    playerScore++;
    updateScores();
  } else if (text.includes("Loose")) {
    roundText.style.color = "red";
    computerScore++;
    updateScores();
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
