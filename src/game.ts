import {Round} from "./round.ts";
import {Player} from "./players/player.ts";
import {GameUiController} from "./game-ui-controller.ts";

class Game {
  gameUiController: GameUiController;
  currentRound: number;
  player: Player;
  computer: Player

  constructor(player: Player, computer: Player, gameUiController: GameUiController) {
    this.gameUiController = gameUiController;
    this.currentRound = 1;
    this.player = player;
    this.computer = computer;
  }

  playRound() {
    const round = new Round(this.player, this.computer, this.endRound.bind(this))
    round.play()
  }

  endRound(round: Round) {
    this.updateRound()
    round.computeResult();

    if (this.gameOver()) {
      return this.endCurrentGame()
    }

    this.playRound()
  }

  gameOver() {
    return this.player.getScore() === 5 || this.computer.getScore() === 5;
  }

  endCurrentGame() {
    this.gameUiController.displayGameOverScreen()
  }

  updateRound() {
    this.currentRound += 1;
    this.gameUiController.updateRound(this.currentRound)
  }
}

export { Game }