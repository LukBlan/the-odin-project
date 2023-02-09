(function roundScore() {
  let playerScore = 0;
  let computerScore = 0;

  //Cache DOM
  const playerScoreBox = document.querySelector(".player-score");
  const computerScoreBox = document.querySelector(".computer-score");

  function getResults(roundResult) {
    computeResult(roundResult);
    render();
  }

  function computeResult(roundResult) {
    if (roundResult === "Win") {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  function render() {
    playerScoreBox.innerText = playerScore;
    playerScoreBox.className = getClassListByScore("player", playerScore, computerScore);
    computerScoreBox.innerText = computerScore;
    computerScoreBox.className = getClassListByScore("computer", computerScore, playerScore);
  }

  function getClassListByScore(subject, score, rivalScore) {
    return `score ${subject}-score ${getBackgroundColorByScore(score, rivalScore)}`;
  }

  function getBackgroundColorByScore(score, rivalScore) {
    const result = (score > rivalScore)? "Win": (score < rivalScore)? "Lose": "Tie";
    return backgroundColor.getBackgroundClassBy(result);
  }

  pubSub.subscribe("scoreChange", getResults);
})()