let changeColor = {
  "paper-paper": function () {
    changeColorImage("yellow", "yellow");
  },

  "paper-scissors": function () {
    gameRound.computerScore++;
    changeColorImage("red", "green");
  },

  "paper-rock": function () {
    gameRound.playerScore++;
    changeColorImage("green", "red");
  },
}

changeColor["scissors-scissors"] =  changeColor["rock-rock"] = changeColor["paper-paper"];
changeColor["scissors-rock"] =  changeColor["rock-paper"] = changeColor["paper-scissors"];
changeColor["scissors-paper"] =  changeColor["rock-scissors"] = changeColor["paper-rock"];

let gameRound = {
  round: 1,
  playerScore: 0,
  computerScore: 0,

  startNewGame: function () {
    changeResultBoxToYellow()
    hideResultBox();
    addEventToPlayerHand();
    resetPlayersChoice();
    this.round = 1;
    this.playerScore = 0;
    this.computerScore = 0;
  },

  updateResultBox: function () {
    const roundCounter = document.querySelector(".round-number");
    const playerResult = document.querySelector(".player-score");
    const computerResult = document.querySelector(".computer-score");

    roundCounter.innerText = this.round;
    playerResult.innerText = this.playerScore;
    computerResult.innerText = this.computerScore;
  },

  checkWinner: function () {
    if (this.playerScore > 4 || this.computerScore > 4) {
      let result = (this.playerScore > 4)? "You Win" : "You Loose";
      this.displayGameOver(result);
      removeEventToPlayerHand()
    }
  },

  displayGameOver: function () {
    const gameOverBox = document.querySelector(".game-over-box");
    gameOverBox.classList.add("make-visible")
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

function hideResultBox() {
  const gameResultBox = document.querySelector(".game-over-box");
  gameResultBox.classList.remove("make-visible");
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice()
  updateImages(playerChoice, computerChoice);
  changeScoresColor();
  gameRound.round++;
  gameRound.updateResultBox();
  gameRound.checkWinner();

}

function getComputerChoice() {
  const options = ["paper", "scissors", "rock"];
  return options[Math.round(Math.random() * (options.length - 1))];
}

function updateImages(playerChoice, computerChoice) {
  changeImage(computerChoice, "computer-choice");
  changeImage(playerChoice, "player-choice");
  changeColor[playerChoice + "-" + computerChoice]()
}

function changeColorImage(playerColor, computerColor) {
  let playerImage = document.querySelector(".player-choice");
  let computerImage = document.querySelector(".computer-choice");
  playerImage.style.backgroundColor = playerColor;
  computerImage.style.backgroundColor = computerColor;
}

function changeImage(playerChoice, classSelector) {
  let currentImage = document.querySelector("." + classSelector);
  let imgChoice = document.createElement("img");
  imgChoice.src="./img/" + playerChoice + ".png";
  imgChoice.classList.add("card");
  imgChoice.classList.add(classSelector);
  currentImage.parentElement.replaceChild(imgChoice, currentImage);
}

function changeScoresColor() {
  const computer = document.querySelector(".computer-score");
  const player = document.querySelector(".player-score");
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