import {GameOverScreen} from "./components/GameOverScreen.ts";

class GameUiController {
  roundDisplay: HTMLElement;

  constructor() {
    this.roundDisplay = document.querySelector(".round-number")!
  }

  updateRound(currentRound: number) {
    this.roundDisplay.textContent = `${currentRound}`;
  }

  displayGameOverScreen() {
    const gameOverScreen: HTMLElement = GameOverScreen("You Win")
    document.body.append(gameOverScreen)
  }
}

export { GameUiController }