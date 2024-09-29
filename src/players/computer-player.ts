import {Player} from "./player.ts";
import {Round} from "../round.ts";

class ComputerPlayer extends Player {

  makeChoice(round: Round): void {
    // const choices = ["rock", "paper", "scissors"]
    // return Math.random() *
    const  choice = "rock"
    round.setComputerChoice(choice)
  }
}


export { ComputerPlayer }