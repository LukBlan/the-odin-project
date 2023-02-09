(function gameOver() {
  const finalResultClass = {
    "Win": "win-result",
    "Lose": "lose-result",
  }

  // Cache Dom
  const gameOverScreen = createGameOverScreen();
  const gameOverFinalResult = gameOverScreen.querySelector(".finalResult");

  // Create GameOverScreen with only final result missing
  function createGameOverScreen() {
    const gameOverScreen = createElement("div", null, "game-over-screen");
    const h2 = createElement("h2","Game Over", null);
    const gameResult = createElement("p", null, "finalResult")
    const newGameButton = createElement("button", "New Game", "new-game-button");
    gameOverScreen.append(h2);
    gameOverScreen.append(gameResult);
    gameOverScreen.append(newGameButton);
    return gameOverScreen;
  }

  function createElement(elementName, innerText, className) {
    const element = document.createElement(elementName);
    if (className !== null) {
      element.classList.add(className);
    }
    element.innerText = innerText
    return element;
  }

  // Event Subscribe
  pubSub.subscribe("gameOver", createGameOver);

  function createGameOver(score) {
    const gameFinalResult = (score.player > score.computer)? "Win": "Lose";
    render(gameFinalResult)
  }

  function render(gameFinalResult) {
    gameOverFinalResult.innerText = `You ${gameFinalResult}`;
    gameOverFinalResult.className = finalResultClass[gameFinalResult];
    document.body.append(gameOverScreen);
  }
})()