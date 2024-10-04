import { choiceExtractor } from "../utils/choice-extractor.ts";
import { colorPicker } from "../utils/color-picker.ts";
import { Round } from "../round.ts";
import { RoundResult } from "../round-result.ts";
import { getChoiceImgSourceUrl } from "../utils/choice-url.ts";
import { getQuestionMarkImgUrl } from "../utils/question-mark-choice.ts";

class PlayerUiController {
  cards: HTMLImageElement[];
  choiceDisplay: HTMLImageElement;
  scoreDisplay: HTMLElement;

  constructor(
    playerHandCssClassName: string,
    selectedChoiceClassName: string,
    scoreDisplayClassName: string
  ) {
    this.cards = Array.from(document.querySelectorAll(`.${playerHandCssClassName}`));
    this.choiceDisplay = document.querySelector(`.${selectedChoiceClassName}`)!;
    this.scoreDisplay = document.querySelector(`.${scoreDisplayClassName}`)!
  }

  waitForPlayerMove(round: Round) {
    this.cards.forEach(element => element.onclick = this.selectCard(round).bind(this))
  }

  selectCard(round: Round) {
    return (event: Event) => {
      const imgElement = event.currentTarget as HTMLImageElement
      const imgSrc: string = imgElement.src
      const choice: string = choiceExtractor(imgSrc)
      this.cards.forEach(element => element.onclick = () => {})

      round.setPlayerChoice(choice);
      round.playComputer()
    }
  }

  processRoundResult(result: RoundResult, playerChoice: string, playerScore: number) {
    this.choiceDisplay.style.backgroundColor = colorPicker(result)
    this.choiceDisplay.src = getChoiceImgSourceUrl(playerChoice)
    this.scoreDisplay.textContent = `${playerScore}`;
  }

  resetScreen() {
    this.scoreDisplay.textContent = "0";
    this.choiceDisplay.style.backgroundColor = ""
    this.choiceDisplay.src = getQuestionMarkImgUrl()
  }
}

export { PlayerUiController }