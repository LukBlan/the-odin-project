import {Round} from "./round.ts";
import {Player} from "./players/player.ts";

class Game {
  player: Player;
  computer: Player

  constructor(player: Player, computer: Player) {
    this.player = player;
    this.computer = computer;
  }

  playRound() {
    const round = new Round(this.player, this.computer, this.endRound.bind(this))
    round.play()
  }

  endRound(round: Round) {
    round.computeResult();

  }
}

export { Game }