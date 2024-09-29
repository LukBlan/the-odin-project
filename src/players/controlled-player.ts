import {Player} from "./player.ts";
import {Round} from "../round.ts";

class ControlledPlayer extends Player {
  makeChoice(round: Round): void {
    this.playerUiController.waitForPlayerMove(round);
  }
}

export { ControlledPlayer }