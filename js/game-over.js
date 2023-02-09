(function gameOver() {
  let finalResult = null;
  const finalResultClass = {
    "Win": "win-result",
    "Lose": "lose-result",
  }

  // Cache DOM
  const gameOverScreen = createGameOverScreen();
  const gameOverFinalResult = gameOverScreen.querySelector(".finalResult");
  const newGameButton = gameOverScreen.querySelector(".new-game-button");

  // Bind Event
  newGameButton.addEventListener("click", triggerNewGame);

  function triggerNewGame() {
    render()
    pubSub.emit("newGame", null);
  }

  // Event Subscribe
  pubSub.subscribe("gameOver", createGameOver);

  // Create GameOverScreen with only final result missing
  function createGameOverScreen() {
    const gameOverScreen = createOwnElement("div", null, "game-over-screen");
    const h2 = createOwnElement("h2","Game Over", null);
    const gameResult = createOwnElement("p", null, "finalResult")
    const newGameButton = createOwnElement("button", "New Game", "new-game-button");
    gameOverScreen.append(h2);
    gameOverScreen.append(gameResult);
    gameOverScreen.append(newGameButton);
    return gameOverScreen;
  }

  function createOwnElement(elementName, innerText, className) {
    const element = document.createElement(elementName);
    if (className !== null) {
      element.classList.add(className);
    }
    element.innerText = innerText
    return element;
  }

  function createGameOver(score) {
    finalResult = (score.player > score.computer)? "Win": "Lose";
    render()
  }

  function render() {
    if (document.body === gameOverScreen.parentElement) {
      document.body.removeChild(gameOverScreen);
    } else {
      gameOverFinalResult.innerText = `You ${finalResult}`;
      gameOverFinalResult.className = finalResultClass[finalResult];
      document.body.append(gameOverScreen);
      setTimeout(() => {gameOverScreen.classList.add("make-visible");}, 1)
    }
  }
})()