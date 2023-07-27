import gameBoard from "./gameBoard";
import ship from "./ship";

const player = ( name ) => {

    const board = gameBoard();
    const getName = () => name;
    const getPlayerBoard = () => board; 

    const generateRandomIndex = () => Math.floor(Math.random() * 10);
    const getRandomShip = () => (
        [
            "battleship",
            "carrier",
            "cruiser",
            "submarine",
            "destroyer"
        ][Math.floor(Math.random() * 4)]
    );
    const getRandomAxis = () => ["x", "y"][Math.floor(Math.random() * 2)];

    function randomlyPlaceShips() {
        while (board.allPlaced() === false) {
            const outerIndex = generateRandomIndex();
            const innerIndex = generateRandomIndex();
            const axis = getRandomAxis();
            const shipType = ship(getRandomShip());
            if (board.placeShip(shipType, axis, outerIndex, innerIndex)) {
                board.placeShip(shipType, axis, outerIndex, innerIndex);
            }
        }
    };

    if (getName() === "computer") {
        return { 
            getName, 
            getPlayerBoard, 
            randomlyPlaceShips 
        }
    };

    return { 
        getName, 
        getPlayerBoard, 
    }

};

export default player;