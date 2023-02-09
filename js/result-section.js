(function resultSection() {
  let playerChoice = null;
  let computerChoice = null;

  // Cache DOM
  const playerChoiceImg = document.querySelector(".player-choice");
  const computerChoiceImg = document.querySelector(".computer-choice");

  function setChoices(choiceObject) {
    playerChoice = choiceObject.playerChoice;
    computerChoice = choiceObject.computerChoice;
    render()
  }

  function render() {
    playerChoiceImg.src = generateSourceByChoice(playerChoice);
    computerChoiceImg.src = generateSourceByChoice(computerChoice);
  }

  function generateSourceByChoice(choice) {
    return "./img/" + choice + ".png";
  }

  pubSub.subscribe("newRound", setChoices)
})()