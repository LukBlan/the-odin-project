(function resultSection() {
  const backgroundColor = {
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
    const result = backgroundColor[choice + "-" + rivalChoice];
    return (result === "Win")? "green-background":
              (result === "Lose")? "red-background": "yellow-background";
  }

  function generateSourceByChoice(choice) {
    return "./img/" + choice + ".png";
  }

  pubSub.subscribe("newRound", getChoices)
})()