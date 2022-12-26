function addEventToNewGameButton() {
  const newGameButton = document.querySelector("button");
  newGameButton.addEventListener("click", () => {
    gameRound.resetRound();
    gameRound.displayGameState();
  })
}