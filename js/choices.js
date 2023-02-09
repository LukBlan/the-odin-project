(function choices() {
  let newGame = false;
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
  pubSub.subscribe("newGame", resetImages)

  function resetImages() {
    newGame = true;
    render();
  }

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
    if (newGame) {
      playerChoiceImg.src = generateSourceByChoice("question-mark", ".svg");
      computerChoiceImg.src = generateSourceByChoice("question-mark", ".svg");
      playerChoiceImg.className = "card player-choice";
      computerChoiceImg.className = "card computer-choice";
      newGame = false;
    } else {
      playerChoiceImg.src = generateSourceByChoice(player.choice, ".png");
      computerChoiceImg.src = generateSourceByChoice(computer.choice, ".png");
      playerChoiceImg.className = getClassListBySubject(player)
      computerChoiceImg.className = getClassListBySubject(computer)
    }
  }

  function generateSourceByChoice(choice, extension) {
    return "./img/" + choice + extension;
  }

  function getClassListBySubject(subject) {
    return `card ${subject.name}-choice ${getBackgroundColorClass(subject.result)}`;
  }

  function getBackgroundColorClass(result) {
    return backgroundColor.getBackgroundClassBy(result)
  }
})()