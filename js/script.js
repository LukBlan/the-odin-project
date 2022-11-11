let rounds = 0;

addEventToPlayerHand()
addScaleEventInPlayerHand()
removeScaleEvent()

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
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("mouseover", scalePlayerOption))
}

function removeScaleEvent() {
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("mouseout", () => {
    element.classList.remove("mouseOverCard");
  }))
}

function scalePlayerOption() {
  this.classList.add("mouseOverCard")
}

function displayResult(text) {
  const resultScreen = document.querySelector("p");
  resultScreen.innerText = text;
  if (text.includes("Won")) {
    resultScreen.style.color = "green";
  } else if (text.includes("Loose")) {
    resultScreen.style.color = "red";
  } else {
    resultScreen.style.color = "orange";
  }
}
