(function choices() {
  const roundResult = {
    "paper-rock": "Win",
    "paper-paper": "Tie",
    "paper-scissors": "Lose",

    "scissors-paper": "Win",
    "scissors-scissors": "Tie",
    "scissors-rock": "Lose",

    "rock-scissors": "Win",
    "rock-rock": "Tie",
    "rock-paper": "Lose",
  }

  // Cache DOM
  const playerChoiceImg = document.querySelector(".player-choice");
  const computerChoiceImg = document.querySelector(".computer-choice");

  function getChoices(choiceObject) {
    const playerChoice = choiceObject.playerChoice;
    const computerChoice = choiceObject.computerChoice;
    const playerResult = roundResult[playerChoice + "-" + computerChoice];
    const computerResult = roundResult[computerChoice + "-" + playerChoice];
    emitEvent(playerResult);
    render({playerResult, playerChoice}, {computerResult, computerChoice})
  }

  function emitEvent(playerResult) {
    if (playerResult === "Win" || playerResult === "Lose") {
      pubSub.emit("scoreChange", playerResult);
    }
  }

  function getBackgroundColorClass(result) {
    return backgroundColor.getBackgroundClassBy(result)
  }

  function generateSourceByChoice(choice) {
    return "./img/" + choice + ".png";
  }

  function render(player, computer) {
    playerChoiceImg.src = generateSourceByChoice(player.playerChoice);
    playerChoiceImg.className = `card player-choice ${getBackgroundColorClass(player.playerResult)}`;
    computerChoiceImg.src = generateSourceByChoice(computer.computerChoice);
    computerChoiceImg.className = `card computer-choice ${getBackgroundColorClass(computer.computerResult)}`;
  }

  pubSub.subscribe("newRound", getChoices)
})()