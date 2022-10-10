game();

function game() {
  for (let i = 0; i <= 5; i++) {
    playRound();
  }
}

function playRound() {
  const options = ["rock", "paper", "scissors"];
  let playerOption = prompt("Rock Paper or Scissors?").toLowerCase();

  playerOption = validateUserOption(playerOption, options);
  alert(chooseWinner(playerOption, getComputerChoice(options)))
}

function getComputerChoice(options) {
  return options[Math.round(Math.random() * (options.length - 1))];
}

function validateUserOption(playerOption, options) {
  let newOption = playerOption;
  while(!options.includes(newOption)) {
    newOption = prompt("Wrong Option, Rock Paper or Scissors?").toLowerCase();
  }
  return newOption;
}

function chooseWinner(playerOption, computerOption) {
  // 0:Rock, 1:Paper, 2:Scissors
  const playerPositionInArray = getPositionInArray(playerOption);
  const computerPositionInArray = getPositionInArray(computerOption);

  // Player:Row Computer:Column
  let arrayOfResults = [
    ["draw", "You Loose!, Rock lost to Paper", "You Won!, Rock beats Scissors"],
    ["You Won!, Paper beats Rock", "draw", "You Loose!, Paper lost to Rock"],
    ["You Loose!, Scissors lost to Rock", "", "draw"]
  ]
  return arrayOfResults[playerPositionInArray][computerPositionInArray];
}

//Returns 0:Rock 1:Paper 2:Scissors
function getPositionInArray(option) {
  let finalOption;
  let optionLength = option.length;

  if (optionLength > 6) {
    finalOption = optionLength / 4;
  } else {
    finalOption = optionLength - 4;
  }
  return finalOption;
}
