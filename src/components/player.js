import gameBoard from "./gameBoard";

const player = ( name ) => {
    
    const board = gameBoard();
    const getName = () => name;
    const getPlayerBoard = () => board; 

    const generateRandomIndex = () => Math.random() * 10;

    function randomlyPlaceShips() {
        // const aiShipsLocations = [];
        while (!board.allPlaced()) {
            const outerIndex = generateRandomIndex();
            const innerIndex = generateRandomIndex();
            const axis = ["x", "y"][Math.random() * 1];
            const ship = [
                "battleship",
                "carrier",
                "cruiser",
                "submarine",
                "destroyer"
            ][Math.random() * 4];
            if (board.placeShip(ship, axis, outerIndex, innerIndex)) {
                board.placeShip(ship, axis, outerIndex, innerIndex);
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