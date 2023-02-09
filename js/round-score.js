(function roundScore() {
  let playerScore = 0;
  let computerScore = 0;

  //Cache DOM
  const playerScoreBox = document.querySelector(".player-score");
  const computerScoreBox = document.querySelector(".computer-score");

  // Event Subscribe
  pubSub.subscribe("scoreChange", getResults);
  pubSub.subscribe("newGame", resetScore)

  function resetScore() {
    computerScore = 0;
    playerScore = 0;
    render();
  }

  function getResults(roundResult) {
    computeResult(roundResult);
    checkGameOver();
    render();
  }

  function computeResult(roundResult) {
    if (roundResult === "Win") {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  function checkGameOver() {
    if (playerScore > 4 || computerScore > 4) {
      pubSub.emit("gameOver", {player: playerScore, computer: computerScore});
    }
  }

  function render() {
    playerScoreBox.innerText = playerScore;
    computerScoreBox.innerText = computerScore;
    playerScoreBox.className = getClassListByScore("player", playerScore, computerScore);
    computerScoreBox.className = getClassListByScore("computer", computerScore, playerScore);
  }

  function getClassListByScore(subject, score, rivalScore) {
    return `round-score ${subject}-round-score ${getBackgroundColorByScore(score, rivalScore)}`;
  }

  function getBackgroundColorByScore(score, rivalScore) {
    const result = (score > rivalScore)? "Win": (score < rivalScore)? "Lose": "Tie";
    return backgroundColor.getBackgroundClassBy(result);
  }
})()