(function roundCounter() {
  let roundNumber = 1;

  // Cache DOM
  const roundCounter = document.querySelector(".round-number");

  function setRoundNumber() {
    roundNumber++;
    render();
  }

  function render() {
    roundCounter.innerText = roundNumber;
  }

  pubSub.subscribe("newRound", setRoundNumber)
})()