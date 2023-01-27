function addEventToNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.addEventListener("click", () => {
    gameRound.startNewGame();
    gameRound.updateResultBox();
  })
}

function addEventToPlayerHand() {
  const playerButton = document.querySelector(".player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("click", playCurrenRound))
}

function playCurrenRound(event) {
  let stringOption = event.target.src.match(/(?:[a-z])+.png/);
  const playerChoice = stringOption.join("").split(".")[0]
  playRound(playerChoice)
}

function removeEventToPlayerHand() {
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.removeEventListener("click", playCurrenRound))
}