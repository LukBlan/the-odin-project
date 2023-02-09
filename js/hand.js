(function hand() {
  // Cache DOM
  const playerHand = document.querySelector(".player-hand");

  // Bind Events
  playerHand.addEventListener("click", playRound);

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
})()