/**
 * A factory function to create a board object to store 
 * the information about the player board.
 * Returns an object that has methods that allow the player to place ships 
 * and take hits from the opponent.
 * 
 * @returns { Object }
 */
const gameBoard = () => {

    /**
     * create a board with a set amount of available positions.
     * 
     * @returns { Array }
     */
    const generateBoard = () => {

        let array = [];
        for (let index = 0; index < 50; index++) {
            let innerArray = [];
            for (let j = 0; j < 50; j++) {
                innerArray[j] = "";
            }
            array.push(innerArray);
        }
        return array;
    };

    let board = generateBoard();

    /**
     * get the game board with the latest data.
     * 
     * @returns { Array }
     */
    const getBoard = () => { return board; };

    /**
     * if the ship size is within the array length, 
     * place the ship from the starting position until the end position.
     * ship will be contained within one inner array.
     * 
     * @param { Object } shipObject 
     * @param { Number } arrayIndex 
     * @param { Number} startLocation 
     * @returns { Boolean }
     */
    const yAxisPlacement = (shipObject, arrayIndex, startLocation) => {
        const end = startLocation + shipObject.getSize();
        if (startLocation >= 0 && end < getBoard()[arrayIndex].length && 0 < arrayIndex < getBoard().length ) {
            for (let index = startLocation; index < end; index++) {
                getBoard()[arrayIndex][index] = shipObject.getId();
            }
            
            return true;
        }

        return false;
    };

    const xAxisPlacement = (shipObject, arrayIndex, startLocation) => {
        try {
            const end = startLocation + shipObject.getSize();
            
        } catch (error) {
            return false;
        }
    };

    /**
     * place the ship selected by the user in the board.
     * 
     * @param { Object } shipObject 
     * @param { String } axis 
     * @param { Number } index // index of the array inside the board array.
     * @param { Number } startLocation // column index
     * @returns { Boolean }
     */
    const placeShip = (shipObject, axis, index, startLocation) => {

        try {
            switch(axis) {
                case "y":
                    return yAxisPlacement(shipObject, index, startLocation);
                case "x":
                    break;
            }

        } catch (error) {
            // inform user of error.
        }
    };

    return { getBoard, placeShip };
}

export default gameBoard;