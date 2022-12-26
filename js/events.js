function addEventToNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.addEventListener("click", () => {
    gameRound.resetGame();
    gameRound.displayGameState();
  })
}