game();

playRound();

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
  const playerPositionInArray = getPositionInArray(playerOption);
  const computerPositionInArray = getPositionInArray(computerOption);

  // Player:Row  Computer:Column
  let arrayOfResults = [ //Paper                      Scissors                               Rock
    [                          "draw", "You Loose!, Paper Lost to Scissors", "You Won!, Paper beats Rock"],
    ["You Won!, Scissors beats Paper", "draw",                               "You Loose!, Scissors lost to Rock"],
    ["You Loose!, Rock lost to Paper", "You won Rock Beats Scissors",        "draw"]
  ]
  return arrayOfResults[playerPositionInArray][computerPositionInArray];
}

//Returns a number based on word length 0:Paper  1:Scissors  2:Rock - with this you don't need if conditionals
function getPositionInArray(option) {
  return Math.round(option.length / 2) % 3;
}
