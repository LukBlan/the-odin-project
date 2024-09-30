class GameUiController {
  roundDisplay: HTMLElement;

  constructor() {
    this.roundDisplay = document.querySelector(".round-number")!
  }

  updateRound(currentRound: number) {
    this.roundDisplay.textContent = `${currentRound}`;
  }
}

export { GameUiController }