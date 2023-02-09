(function hand() {
  // Cache DOM
  const playerHand = document.querySelector(".player-hand");
  const allHandCards = document.querySelectorAll(".card:not([class*='choice'])");

  // Bind Events
  function bindPlayRoundToPlayerHand() {
    playerHand.addEventListener("click", playRound);
  }
  bindPlayRoundToPlayerHand();


  // Subscribe Events
  pubSub.subscribe("gameOver", disableHands)

  function playRound(event) {
    if (event.target.nodeName === "IMG") {
      const computerChoice = generateComputerChoice();
      const playerChoice = getPlayerChoice(event)
      pubSub.emit("newRound", {playerChoice, computerChoice});
    }
  }

  function getPlayerChoice(event) {
    const regExp = /(\w+)\.png/;
    return event.target.src.match(regExp)[1];
  }

  function generateComputerChoice() {
    const options = ["paper", "scissors", "rock"];
    return options[Math.round(Math.random() * (options.length - 1))];
  }

  function disableHands() {
    playerHand.removeEventListener("click", playRound);
    allHandCards.forEach(handCard => handCard.classList.add("hide-card"));
  }
})()