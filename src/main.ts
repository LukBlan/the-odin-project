import './styles.css'
import {Game} from "./game.ts";
import {ControlledPlayer} from "./players/controlled-player.ts";
import {ComputerPlayer} from "./players/computer-player.ts";

const player: ControlledPlayer = new ControlledPlayer("player-card", "player-choice");
const computer: ComputerPlayer = new ComputerPlayer("computer-card", "computer-choice");

const game = new Game(player, computer)

game.playRound()