import { GameOverScreen } from "../components/GameOverScreen.ts";

class GameUiController {
  roundDisplay: HTMLElement;

  constructor() {
    this.roundDisplay = document.querySelector(".round-number")!
  }

  updateRound(currentRound: number) {
    this.roundDisplay.textContent = `${currentRound}`;
  }

  displayGameOverScreen(callback: () => void, result: string) {
    const gameOverScreen: HTMLElement = GameOverScreen(result, callback)
    document.body.append(gameOverScreen)
  }

  resetRound() {
    this.roundDisplay.textContent = "1"
  }
}

export { GameUiController }