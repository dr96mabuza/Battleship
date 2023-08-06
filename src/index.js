import player from "./factories/player";
import renderBoard from "./components/DOM";
import "./styles/placementBoard.css";

const ai = player("computer");
ai.randomlyPlaceShips();
renderBoard(ai.getPlayerBoard().getBoard());


// allow player to pick if the game is single or two player.
// if single player. use random placement. allow user to place using drag and drop if possible.
// if dual allow both players to place using drag and drop.

