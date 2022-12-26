let gameRound = {
  round: 1,
  playerScore: 0,
  computerScore: 0,

  resetGame: function () {
    const roundChoices = document.querySelectorAll(".result-section > img");

    this.round = 1;
    this.playerScore = 0;
    this.computerScore = 0;
    Array.from(roundChoices).forEach(img => {
      img.src = "./img/question-mark.svg";
      img.style.backgroundColor = "";
    })
  },

  displayGameState: function () {
    const roundCounter = document.getElementById("round-counter");
    const playerResult = document.getElementById("player-result");
    const computerResult = document.getElementById("computer-result");

    computerResult.innerText = this.computerScore;
    playerResult.innerText = this.playerScore;
    roundCounter.innerText = "Round " + this.round;
  }
};

function playRound(playerOption) {
  const options = ["paper", "scissors", "rock"];
  let computerChoice = getComputerChoice(options)
  let resultText = chooseWinner(playerOption, computerChoice)
  displayResult(resultText, playerOption, computerChoice, options);
  updateScores();
  gameRound.displayGameState();
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

// Returns a number based on word length 0:Paper  1:Scissors  2:Rock - with this you don't need if conditionals
function getPositionInArray(option) {
  return Math.round(option.length / 2) % 3;
}

function addEventToPlayerHand() {
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("click", () => {
    let stringOption = element.src.match(/(?:[a-z])+.png/);
      playRound(stringOption.join("").split(".")[0])
    })
  )
}

function displayResult(text, playerOption, computerChoice, options) {
  changeImage(computerChoice,options,"computer-choice");
  changeImage(playerOption,options,"player-choice");
  if (text.includes("Won")) {
    gameRound.playerScore++;
    changeColorImage("green", "red");
  } else if (text.includes("Loose")) {
    gameRound.computerScore++;
    changeColorImage("red", "green");
  } else {
    changeColorImage("yellow", "yellow");
  }
}

function changeColorImage(playerColor, computerColor) {
  let playerImage = document.querySelector("#player-choice");
  let computerImage = document.querySelector("#computer-choice");
  playerImage.style.backgroundColor = playerColor;
  computerImage.style.backgroundColor = computerColor;
}

function changeImage(playerOption, options, idSelector) {
  let currentImage = document.getElementById(idSelector);
  let imgChoice = document.createElement("img");
  imgChoice.src="./img/" + options[getPositionInArray(playerOption)] + ".png";
  imgChoice.id = idSelector;
  imgChoice.classList.add("card-img");
  currentImage.parentElement.replaceChild(imgChoice, currentImage);
}

function updateScores() {
  const computer = document.getElementById("computer-result");
  const player = document.getElementById("player-result");
  computer.innerText = gameRound.computerScore.toString();
  player.innerText = gameRound.playerScore.toString();
  if (gameRound.computerScore > gameRound.playerScore) {
    computer.style.backgroundColor = "green";
    player.style.backgroundColor = "red";
  } else if (gameRound.computerScore < gameRound.playerScore) {
    computer.style.backgroundColor = "red";
    player.style.backgroundColor = "green";
  } else {
    computer.style.backgroundColor = "yellow";
    player.style.backgroundColor = "yellow";
  }
}

function checkWinner() {
  if (gameRound.computerScore === 5) {
    gameRound.resultScreen("You Loose!!");
  } else if (gameRound.playerScore === 5) {
    gameRound.resultScreen("You Won!!")
  }
}

function showWinner(text) {
  const gameSection = document.querySelector("#game-section");
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  if (text.includes("Won")) {
    paragraph.classList.add("result-win");
    paragraph.id = "result";
  } else {
    paragraph.classList.add("result-loose");
    paragraph.id = "result";
  }
  paragraph.classList.add("margin");
  gameSection.insertBefore(paragraph, gameSection.firstChild);
}