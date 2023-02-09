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

  // Event Subscribe
  pubSub.subscribe("newRound", getChoices)

  function getChoices(choiceObject) {
    const playerChoice = choiceObject.playerChoice;
    const computerChoice = choiceObject.computerChoice;
    const playerResult = roundResult[playerChoice + "-" + computerChoice];
    const computerResult = roundResult[computerChoice + "-" + playerChoice];
    emitEvent(playerResult);
    render(
      {name:"player", result: playerResult, choice: playerChoice},
      {name: "computer", result: computerResult, choice: computerChoice})
  }

  function emitEvent(playerResult) {
    if (playerResult === "Win" || playerResult === "Lose") {
      pubSub.emit("scoreChange", playerResult);
    }
  }

  function render(player, computer) {
    playerChoiceImg.src = generateSourceByChoice(player.choice);
    computerChoiceImg.src = generateSourceByChoice(computer.choice);
    playerChoiceImg.className = getClassListBySubject(player)
    computerChoiceImg.className = getClassListBySubject(computer)
  }

  function generateSourceByChoice(choice) {
    return "./img/" + choice + ".png";
  }

  function getClassListBySubject(subject) {
    return `card ${subject.name}-choice ${getBackgroundColorClass(subject.result)}`;
  }

  function getBackgroundColorClass(result) {
    return backgroundColor.getBackgroundClassBy(result)
  }
})()