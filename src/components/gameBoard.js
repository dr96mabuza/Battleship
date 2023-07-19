const gameBoard = () => {

    /**
     * create a board with 50 positions.
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
     * @returns { gameBoard }
     */
    const getBoard = () => { return board; };

    /**
     * if the ship size is within the array length, 
     * place the ship from the starting position until the end position.
     * ship will be contained within one inner array.
     */
    const yAxisPlacement = (shipObject, arrayIndex, startLocation) => {

        try {
            const start = board[arrayIndex][startLocation];
            const end = startLocation + shipObject.getSize();
            const innerArray = board[arrayIndex];
            for (let index = start; index < end; index++) {
                innerArray[index] = shipObject.getId();
            }
            
            return true;
        } catch (error) {
            // return error
            return false;
        }
    };

    /**
     * place the ship selected by the user in the board.
     * @param { ship } shipObject 
     * @param { String } axis 
     * @param { Number } index // index of the array inside the board array.
     * @param { Number } startLocation // column index
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