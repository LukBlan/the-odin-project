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
    computerScoreBox.innerText = computerScore;
  }

  pubSub.subscribe("scoreChange", getResults);
})()