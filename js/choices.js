(function choices() {
  let newGame = false;
  let playerBackground = backgroundColor.INITIAL_STATE;
  let computerBackground = backgroundColor.INITIAL_STATE;
  let playerChoice = null;
  let computerChoice = null;
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
  };

  // Cache DOM
  const playerChoiceImg = document.querySelector(".player-choice");
  const computerChoiceImg = document.querySelector(".computer-choice");

  // Event Subscribe
  pubSub.subscribe("newRound", getChoices)
  pubSub.subscribe("newGame", resetImages)

  function resetImages() {
    newGame = true;
    const playerBg= backgroundFactory.createBgObject(playerChoiceImg, playerBackground, null)
    const computerBg = backgroundFactory.createBgObject(computerChoiceImg, computerBackground, null)
    render(playerBg, computerBg);
  }

  function getChoices(choiceObject) {
    playerChoice = choiceObject.playerChoice;
    computerChoice = choiceObject.computerChoice;
    const playerResult = roundResult[playerChoice + "-" + computerChoice];
    pubSub.emit("scoreChange", playerResult);
    const newBgs = backgroundColor.getBackgroundColor(playerResult);
    const playerBg= backgroundFactory.createBgObject(playerChoiceImg, playerBackground, newBgs.player)
    const computerBg = backgroundFactory.createBgObject(computerChoiceImg, computerBackground, newBgs.computer)
    render(playerBg, computerBg);
    playerBackground = newBgs.player;
    computerBackground = newBgs.computer;
  }

  function render(playerBg, computerBg) {
    if (newGame) {
      playerChoiceImg.src = generateSourceByChoice("question-mark", ".svg");
      computerChoiceImg.src = generateSourceByChoice("question-mark", ".svg");
      newGame = false;
    } else {
      playerChoiceImg.src = generateSourceByChoice(playerChoice, ".png");
      computerChoiceImg.src = generateSourceByChoice(computerChoice, ".png");
    }
    emitBackgroundChangeEvent(playerBg)
    emitBackgroundChangeEvent(computerBg)
  }

  function emitBackgroundChangeEvent(object) {
    pubSub.emit("backgroundChange", object)
  }

  function generateSourceByChoice(choice, extension) {
    return "./img/" + choice + extension;
  }
})()