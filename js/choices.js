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
    render(playerChoice, computerChoice)
  }

  function render(playerChoice, computerChoice) {
    playerChoiceImg.src = generateSourceByChoice(playerChoice);
    playerChoiceImg.className = `card player-choice ${getBackgroundColorClass(playerChoice, computerChoice)}`;
    computerChoiceImg.src = generateSourceByChoice(computerChoice);
    computerChoiceImg.className = `card computer-choice ${getBackgroundColorClass(computerChoice, playerChoice)}`;
  }

  function getBackgroundColorClass(choice, rivalChoice) {
    const result = roundResult[choice + "-" + rivalChoice];
    return backgroundColor.getBackgroundClassBy(result)
  }

  function generateSourceByChoice(choice) {
    return "./img/" + choice + ".png";
  }

  pubSub.subscribe("newRound", getChoices)
})()