import {Round} from "../round.ts";
import {RoundResult} from "../round-result.ts";
import {PlayerUiController} from "../PlayerUiController.ts";

abstract class Player {
  score: number;
  playerUiController: PlayerUiController

  constructor(
    playerHandCssClassName: string,
    playerChoiceDisplayCssClass: string,
    scoreCssClassName: string,

  )
  {
    this.playerUiController = new PlayerUiController(
      playerHandCssClassName,
      playerChoiceDisplayCssClass,
      scoreCssClassName,
    )
    this.score = 0;
  }

  abstract makeChoice(round: Round): void;

  processResult(result: RoundResult, playerChoice: string): void {
    this.computeScore(result)
    this.playerUiController.processRoundResult(result, playerChoice, this.score)
  }

  computeScore(result: RoundResult): void {
    if (result === "WIN") {
      this.score += 1
    }
  }

  getScore(): number {
    return this.score
  }
}

export { Player }