(function roundCounter() {
  let roundNumber = "";

  // Cache DOM
  const roundCounter = document.querySelector(".round-number");

  pubSub.subscribe("newGame", resetCounter);

  function resetCounter() {
    roundNumber = "";
    render();
  }

  function setRoundNumber() {
    if (roundNumber === "") {
      roundNumber = 0;
    }
    roundNumber++;
    render();
  }

  function render() {
    roundCounter.innerText = roundNumber;
  }

  pubSub.subscribe("newRound", setRoundNumber)
})()