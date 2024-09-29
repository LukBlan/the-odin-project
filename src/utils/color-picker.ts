import {RoundResult} from "../round-result.ts";

function colorPicker(choice: RoundResult): string {
  if (choice === "TIE") {
    return "yellow"
  }

  if (choice === "LOSE") {
    return "red"
  }

  return "green"
}

export { colorPicker }