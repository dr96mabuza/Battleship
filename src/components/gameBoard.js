const gameBoard = () => {

    /**
     * create a board with 50 positions.
     * @returns { Array }
     */
    const generateBoard = () => {
        let array = [];
        for (let index = 0; index < 50; index++) {
            array.push([])
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
     * place the ship selected by the user in the board.
     * @param { ship } shipObject 
     * @param { String } axis 
     * @param { Number } index // index of the array inside the board array.
     * @param { Number } startLocation // column index
     */
    const placeShip = (shipObject, axis, index, startLocation) => {

        /**
         * if the ship size is within the array length, 
         * place the ship from the starting position until the end position.
         * ship will be contained within one inner array.
         */
        const yAxisPacement = () => {

        };

        switch(axis) {
            case "y":
                break;
            case "x":
                break;
        }
    };

    return {getBoard, placeShip};
}

export default gameBoard;