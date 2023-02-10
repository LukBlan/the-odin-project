(function scoreboard() {
  let playerScore = 0;
  let computerScore = 0;
  let currentPlayerBg = backgroundColor.INITIAL_STATE;
  let currentComputerBg = backgroundColor.INITIAL_STATE;

  //Cache DOM
  const playerScoreBox = document.querySelector(".player-score");
  const computerScoreBox = document.querySelector(".computer-score");

  // Event Subscribe
  pubSub.subscribe("scoreChange", getResults);
  pubSub.subscribe("newGame", resetScore)

  function resetScore() {
    computerScore = 0;
    playerScore = 0;
    const playerBg = backgroundFactory.createBgObject(playerScoreBox, currentPlayerBg, null);
    const computerBg = backgroundFactory.createBgObject(computerScoreBox, currentComputerBg, null);
    currentPlayerBg = backgroundColor.INITIAL_STATE;
    currentComputerBg = backgroundColor.INITIAL_STATE;
    render(playerBg, computerBg);
  }

  function getResults(roundResult) {
    computeResult(roundResult);
    const bgs = getBackgroundColorsByScore();
    const playerBg = backgroundFactory.createBgObject(playerScoreBox, currentPlayerBg, bgs.player);
    const computerBg = backgroundFactory.createBgObject(computerScoreBox, currentComputerBg, bgs.computer);
    render(playerBg, computerBg);
    currentPlayerBg = playerBg.newBg;
    currentComputerBg = computerBg.newBg;
    checkGameOver();
  }

  function computeResult(roundResult) {
    if (roundResult === "Win") {
      playerScore++;
    } else if (roundResult === "Lose") {
      computerScore++;
    }
  }

  function checkGameOver() {
    if (playerScore > 4 || computerScore > 4) {
      pubSub.emit("gameOver", {player: playerScore, computer: computerScore});
    }
  }

  function render(playerBackground, computerBackground) {
    playerScoreBox.innerText = playerScore;
    computerScoreBox.innerText = computerScore;
    if (playerBackground.newBg !== playerBackground.currentBg) {
    emitBackgroundChangeEvent(playerBackground)
    emitBackgroundChangeEvent(computerBackground)
    }
  }

  function emitBackgroundChangeEvent(changeBackgroundObject) {
    pubSub.emit("backgroundChange", changeBackgroundObject)
  }

  function getBackgroundColorsByScore() {
    const result = (playerScore > computerScore)? "Win": (playerScore < computerScore)? "Lose": "Tie";
    return backgroundColor.getBackgroundColor(result);
  }
})()