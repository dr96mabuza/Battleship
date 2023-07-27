import gameBoard from "./gameBoard";
import ship from "./ship";

const player = ( name ) => {

    const board = gameBoard();
    const getName = () => name;
    const getPlayerBoard = () => board; 

    const generateRandomIndex = () => Math.floor(Math.random() * 10);
    const getRandomShip = (shipsNotPlaced) => (
        shipsNotPlaced[Math.floor(Math.random() * shipsNotPlaced.length)]
    );
    const getRandomAxis = () => ["x", "y"][Math.floor(Math.random() * 2)];

    function randomlyPlaceShips() {
        while (board.allPlaced() === false) {
            const shipsNotPlaced = [
                "battleship",
                "carrier",
                "cruiser",
                "submarine",
                "destroyer"
            ];
            const outerIndex = generateRandomIndex();
            const innerIndex = generateRandomIndex();
            const axis = getRandomAxis();
            const shipName = getRandomShip(shipsNotPlaced);
            const shipType = ship(shipName);
            if (board.placeShip(shipType, axis, outerIndex, innerIndex)) {
                shipsNotPlaced.splice(shipsNotPlaced.indexOf(shipName), 1);
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