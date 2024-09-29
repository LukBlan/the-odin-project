import {choiceExtractor, colorPicker} from "./utils/choice-extractor.ts";
import {Round} from "./round.ts";
import {RoundResult} from "./round-result.ts";

class PlayerUiController {
  cards: HTMLImageElement[];
  scoreDisplay: HTMLImageElement;


  constructor(playerHandCssClassName: string, selectedChoiceClassName: string) {
    this.cards = Array.from(document.querySelectorAll(`.${playerHandCssClassName}`));
    this.scoreDisplay = document.querySelector(`.${selectedChoiceClassName}`)!;
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

  processRoundResult(result: RoundResult, playerChoice: string) {
    this.scoreDisplay.style.backgroundColor = colorPicker(result)
  }
}

export { PlayerUiController }