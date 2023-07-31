import player from "./factories/player";
import renderBoard from "./components/DOM";

const ai = player("computer");
ai.randomlyPlaceShips();
renderBoard(ai.getPlayerBoard().getBoard());

