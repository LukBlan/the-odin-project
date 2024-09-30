import {Player} from "./player.ts";
import {Round} from "../round.ts";

class ComputerPlayer extends Player {

  makeChoice(round: Round): void {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * choices.length)
    round.setComputerChoice(choices[randomNumber])
  }
}


export { ComputerPlayer }