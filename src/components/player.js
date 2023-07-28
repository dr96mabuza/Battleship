import gameBoard from "./gameBoard";
import ship from "./ship";

/**
 * A factory function that creates a player object.
 * \nPlayer object is compossed of ship and gameBoard objects.
 * \nPlayer can attack another player.
 * 
 * @param { String } name 
 * @returns { Object }
 */
const player = ( name ) => {

    const board = gameBoard();

    /**
     * Get the name of the player.
     * @returns { String }
     */
    const getName = () => name;

    /**
     * A method that returns the gameBoard object attached to the player.
     * 
     * @returns { Object }
     */
    const getPlayerBoard = () => board; 

    /**
     * A function that generates a random index.
     * \nThe index is from 0 to 10, exclusive of 10.
     * @returns { Number }
     */
    const generateRandomIndex = () => Math.floor(Math.random() * 10);

    /**
     * A function that generates a random index number in the range of the array length.
     * \nThe index is from 0 to array.length, exclusive of array.length.
     * 
     * @param { Object } shipsNotPlaced 
     * @returns { Number }
     */
    const getRandomShip = (shipsNotPlaced) => (
        shipsNotPlaced[Math.floor(Math.random() * shipsNotPlaced.length)]
    );

    /**
     * A function that generates a random axis. "x" or "y".
     * @returns { String }
     */
    const getRandomAxis = () => ["x", "y"][Math.floor(Math.random() * 2)];

    /**
     * A function that places ships randomly on the player board.
     */
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

    return { 
        getName, 
        getPlayerBoard, 
        randomlyPlaceShips 
    }

};

export default player;