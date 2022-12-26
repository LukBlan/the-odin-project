function addEventToNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.addEventListener("click", () => {
    gameRound.resetGame();
    gameRound.displayGameState();
  })
}

function addEventToPlayerHand() {
  const playerButton = document.getElementById("player-hand");
  playerButton.childNodes.forEach(element => element.addEventListener("click", () => {
      let stringOption = element.src.match(/(?:[a-z])+.png/);
      playRound(stringOption.join("").split(".")[0])
    })
  )
}