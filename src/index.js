import player from "./factories/player";
import renderBoard from "./components/DOM";
import "./styles/placementBoard.css";

let player1;
let player2;

// remove boolean after form completion.
// render selection.
let singlePlayer = true;

const singlePlayerGame = () => {
    // player1 = player() render player one form.
    // placementBoard(player1.getPlayerBoard()) allow user to place ships.
    renderBoard(player1.getPlayerBoard().getBoard());

    player2 = player("computer");
    player2.randomlyPlaceShips();
    renderBoard(player2.getPlayerBoard().getBoard());

    // while (!player1.getPlayerBoard().allShipsSunk() || player2.getPlayerBoard().allShipsSunk()) {
    //     continue;
    // }
}

const twoPlayerGame = () => {
    // player1 = player() render player one form.
    // placementBoard(player1.getPlayerBoard()) allow user to place ships. //placement board should render and dissapear.
    renderBoard(player1.getPlayerBoard().getBoard());

    // player2 = player() render player one form.
    // placementBoard(player2.getPlayerBoard()) allow user to place ships.
    renderBoard(player2.getPlayerBoard().getBoard());

    // while (!player1.getPlayerBoard().allShipsSunk() || player2.getPlayerBoard().allShipsSunk()) {
    //     continue;
    // }
};

// allow player to pick if the game is single or two player.
// if single player. use random placement. allow user to place using drag and drop if possible.
// if dual allow both players to place using drag and drop.

