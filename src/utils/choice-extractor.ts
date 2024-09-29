import {RoundResult} from "../round-result.ts";

function choiceExtractor(imageSrc: string): string {
  const regex: RegExp = new RegExp("\/(rock|paper|scissors)\.png")
  const match: RegExpMatchArray = imageSrc.match(regex)!
  return match[1]
}

function colorPicker(choice: RoundResult): string {
  if (choice === "TIE") {
    return "yellow"
  }

  if (choice === "LOSE") {
    return "red"
  }

  return "green"
}

export { choiceExtractor, colorPicker }