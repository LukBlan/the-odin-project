import {Round} from "../round.ts";
import {RoundResult} from "../round-result.ts";
import {PlayerUiController} from "../PlayerUiController.ts";

abstract class Player {
  score: number;
  playerUiController: PlayerUiController

  constructor(playerHandCssClassName: string, scoreCssClassName: string) {
    this.playerUiController = new PlayerUiController(playerHandCssClassName, scoreCssClassName)
    this.score = 0;
  }

  abstract makeChoice(round: Round): void;

  processResult(result: RoundResult, playerChoice: string): void {
    this.score += 1
    this.playerUiController.processRoundResult(result, playerChoice)
  }
}

export { Player }