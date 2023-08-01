import player from "./factories/player";
import renderBoard from "./components/DOM";
import "./styles/placementBoard.css";

const ai = player("computer");
ai.randomlyPlaceShips();
renderBoard(ai.getPlayerBoard().getBoard());

