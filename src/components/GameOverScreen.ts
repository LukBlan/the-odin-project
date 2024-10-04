function GameOverScreen(result: string): HTMLElement {
  const gameOverScreen: HTMLElement = document.createElement("div")!
  const textHeader: HTMLElement = document.createElement("h2")!
  const newGameButton: HTMLButtonElement = document.createElement("button")!


  gameOverScreen.classList.add("game-over-screen")
  textHeader.textContent = result;

  newGameButton.textContent = "New Game"
  newGameButton.classList.add("new-game-button")

  gameOverScreen.append(textHeader)
  gameOverScreen.append(newGameButton)
  return gameOverScreen;
}

export { GameOverScreen }