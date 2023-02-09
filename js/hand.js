(function hand() {
  let playerHandHasListener = true;

  // Cache DOM
  const playerHand = document.querySelector(".player-hand");
  const allHandCards = document.querySelectorAll(".card:not([class*='choice'])");

  // Bind Events
  function bindPlayRoundToPlayerHand() {
    playerHand.addEventListener("click", playRound);
  }
  bindPlayRoundToPlayerHand();

  // Subscribe Events
  pubSub.subscribe("gameOver", render)
  pubSub.subscribe("newGame", render)

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

  function render() {
   if (playerHandHasListener) {
     playerHand.removeEventListener("click", playRound);
     allHandCards.forEach(handCard => handCard.classList.add("hide-card"));
     playerHandHasListener = false;
   } else {
     bindPlayRoundToPlayerHand();
     allHandCards.forEach(handCard => handCard.classList.remove("hide-card"));
     playerHandHasListener = true;
   }
  }
})()