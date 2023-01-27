let gameRound = {
  round: 1,
  playerScore: 0,
  computerScore: 0,

  startNewGame: function () {
    changeResultBoxToYellow()
    deletePopUpBox();
    addEventToPlayerHand();
    resetPlayersChoice();
    this.round = 1;
    this.playerScore = 0;
    this.computerScore = 0;
  },

  updateResultBox: function () {
    const roundCounter = document.getElementById("round-counter");
    const playerResult = document.getElementById("player-result");
    const computerResult = document.getElementById("computer-result");
    computerResult.innerText = this.computerScore;
    playerResult.innerText = this.playerScore;
    roundCounter.innerText = "Round " + this.round;
  },

  checkWinner: function () {
    if (this.playerScore > 4 || this.computerScore > 4) {
      let result = (this.playerScore > 4)? "You Win" : "You Loose";
      this.displayGameFinalResult(result);
      removeEventToPlayerHand()
    }
  },

  displayGameFinalResult: function (result) {
      const newMessageBox = document.createElement("p");
      const gameSection = document.getElementById("game-section");
      const messageClass = result.includes("Win")? "box-message-win": "box-message-loose";
      newMessageBox.innerText = result;
      newMessageBox.classList.add(messageClass);
      gameSection.appendChild(newMessageBox)
  }
};

function resetPlayersChoice() {
  const roundChoices = document.querySelectorAll(".result-section > img");
  Array.from(roundChoices).forEach(img => {
    img.src = "./img/question-mark.svg";
    img.style.backgroundColor = "";
  })
}

function changeResultBoxToYellow() {
  const resultBoxes = document.getElementsByClassName("result-box");
  Array.from(resultBoxes).forEach(element => element.style.backgroundColor = "yellow")
}

function deletePopUpBox() {
  const resultBox = document.querySelector('[class^="box-message-"]');
  if (resultBox !== null) {
    resultBox.parentElement.removeChild(resultBox);
  }
}

function playRound(playerOption) {
  const options = ["paper", "scissors", "rock"];
  const computerChoice = getComputerChoice(options)
  let roundResult = getRoundResult(playerOption, computerChoice)
  displayResult(roundResult, playerOption, computerChoice, options);
  updateScores();
  gameRound.updateResultBox();
  gameRound.checkWinner();
}

function getComputerChoice(options) {
  return options[Math.round(Math.random() * (options.length - 1))];
}

function getRoundResult(playerOption, computerOption) {
  const playerPositionInArray = getPositionInArray(playerOption);
  const computerPositionInArray = getPositionInArray(computerOption);
  // Player:Row  Computer:Column
  const arrayOfResults =
  [//Paper                            Scissors                              Rock
    [                          "draw", "You Loose!, Paper Lost to Scissors", "You Won!, Paper beats Rock"],
    ["You Won!, Scissors beats Paper", "draw",                               "You Loose!, Scissors lost to Rock"],
    ["You Loose!, Rock lost to Paper", "You Won! Rock Beats Scissors",        "draw"]
  ]
  return arrayOfResults[playerPositionInArray][computerPositionInArray];
}

// Returns a number based on word length 0:Paper  1:Scissors  2:Rock, that is used in above array
function getPositionInArray(option) {
  return Math.round(option.length / 2) % 3;
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