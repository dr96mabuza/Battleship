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

    const attemptsHistory = [];
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

    /**
     * A function that checks if the position attacked(selected) has been selected before.
     * @param { String } string 
     * @returns { Boolean }
     */
    const checkIfAlreadyHit = (string) => attemptsHistory.toString().includes(string);

    /**
     * A function that generates a random attack.
     * \nAttack should be called if the user wants to attack random location or by computer.
     * \nReturns "true" if attck has been carried out and "false" if not.
     * 
     * @param { Object } opponentObject 
     * @returns { Boolean }
     */
    const attack = ( opponentObject ) => {
        while ( true ) {
            const outerIndex = generateRandomIndex();
            const innerIndex = generateRandomIndex();
            if (!checkIfAlreadyHit([outerIndex, innerIndex].toString())) {
                opponentObject.getPlayerBoard().receiveAttack(outerIndex, innerIndex);
                attemptsHistory.push([outerIndex, innerIndex]);
                return true;
            }
        }
    }

    /**
     * A function that attacks the opponent at the selected location.
     * @param { Object } opponentObject 
     * @param { Number } outerIndex 
     * @param { Number } innerIndex 
     */
    const attackForUserOnly = (opponentObject, outerIndex, innerIndex) => {
        if (!checkIfAlreadyHit([outerIndex, innerIndex].toString())) {
            opponentObject.getPlayerBoard().receiveAttack(outerIndex, innerIndex);
            attemptsHistory.push([outerIndex, innerIndex]);
            return true;
        } 
        
        return false;
    }

    return { 
        getName, 
        getPlayerBoard, 
        randomlyPlaceShips, 
        attack,
        attackForUserOnly
    }

};

export default player;