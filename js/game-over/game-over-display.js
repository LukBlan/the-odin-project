(function gameOver() {
  let finalResult = null;
  const finalResultClass = {
    "Win": "win-result",
    "Lose": "lose-result",
  };

  // Cache DOM
  const gameOverScreen = gameOverFactory().createGameOverScreen();
  const gameOverFinalResult = gameOverScreen.querySelector(".finalResult");
  const newGameButton = gameOverScreen.querySelector(".new-game-button");

  // Bind Event
  newGameButton.addEventListener("click", triggerNewGame);

  // Event Subscribe
  pubSub.subscribe("gameOver", createGameOver);

  function triggerNewGame() {
    render();
    pubSub.emit("newGame", null);
  }

  function createGameOver(score) {
    finalResult = (score.player > score.computer)? "Win": "Lose";
    render();
  }

  function render() {
    if (document.body === gameOverScreen.parentElement) {
      gameOverScreen.classList.remove("make-visible");
      document.body.removeChild(gameOverScreen);
    } else {
      gameOverFinalResult.innerText = `You ${finalResult}`;
      gameOverFinalResult.className = finalResultClass[finalResult];
      document.body.append(gameOverScreen);
      setTimeout(() => {gameOverScreen.classList.add("make-visible")}, 1)
    }
  }
})()