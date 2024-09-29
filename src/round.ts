import {Player} from "./players/player.ts";
import {RoundResult} from "./round-result.ts";


class Round {
  player: Player;
  computer: Player;
  playerChoice: string | null;
  computerChoice: string | null;
  callback: (round: Round) => void;

  constructor(player: Player, computer: Player, callback: (round: Round) => void) {
    this.player = player;
    this.computer = computer;
    this.callback = callback;
    this.playerChoice = null;
    this.computerChoice = null;
  }

  play() {
    const player = this.player;
    player.makeChoice(this)
  }

  playComputer() {
    const computer = this.computer
    computer.makeChoice(this)
  }

  setPlayerChoice(playerChoice: string) {
    this.playerChoice = playerChoice;
  }

  setComputerChoice(computerChoice: string) {
    this.computerChoice = computerChoice;
    this.callback(this)
  }

  computeResult() {
    const playerResult: RoundResult = this.roundResult(this.playerChoice!, this.computerChoice!)
    const computerResult: RoundResult = this.roundResult(this.computerChoice!, this.playerChoice!)
    this.player.processResult(playerResult, this.playerChoice!);
    this.computer.processResult(computerResult, this.computerChoice!);
  }

  roundResult(player1Result: string, player2Result: string): RoundResult {
    if (player1Result === player2Result) {
      return "TIE"
    }

    if ((player1Result === "rock" && player2Result === "scissors") ||
      (player1Result === "scissors" && player2Result === "paper") ||
      (player1Result === "paper" && player2Result === "rock")) {
      return "WIN"
    }

    return "LOSE"
  }
}

export { Round }