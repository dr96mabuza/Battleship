/* eslint-disable no-plusplus */
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
    const array = [];
    for (let index = 0; index < 50; index++) {
      const innerArray = [];
      for (let j = 0; j < 50; j++) {
        innerArray[j] = "";
      }
      array.push(innerArray);
    }
    return array;
  };

  const board = generateBoard();

  /**
   * get the game board with the latest data.
   *
   * @returns { Array }
   */
  const getBoard = () => board;

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

    /**
     * A function to populate the array if the slot is empty("").
     * Must not populate if the position is taken.
     * Slot is populated with the ship object id.
     * Population will be limited to one array.
     */
    const populate = () => {
      for (let index = startLocation; index < end; index++) {
        if (getBoard()[arrayIndex][index] === "") {
          getBoard()[arrayIndex][index] = shipObject.getId();
        }
      }
    };

    if (
      startLocation >= 0 &&
      end < getBoard()[arrayIndex].length &&
      arrayIndex > 0 < getBoard().length
    ) {
      populate();
      return true;
    }

    return false;
  };

  /**
   * if the ship size is within the array length,
   * place the ship from the starting position until the end position.
   * ship will span across multiple array.
   *
   * @param { Object } shipObject
   * @param { Number } arrayIndex
   * @param { Number} startLocation
   * @returns { Boolean }
   */
  const xAxisPlacement = (shipObject, arrayIndex, startLocation) => {
    const end = startLocation + shipObject.getSize();

    /**
     * A function to populate the array if the slot is empty("").
     * Must not populate if the position is taken.
     * Slot is populated with the ship object id.
     * Population will be limited span across multiple arrays.
     */
    const populate = () => {
      for (let index = arrayIndex; index < end - 1; index++) {
        if (getBoard()[index][startLocation] === "") {
          getBoard()[index][startLocation] = shipObject.getId();
        }
      }
    };

    if (
      startLocation >= 0 &&
      end < getBoard()[arrayIndex].length &&
      arrayIndex > 0 < getBoard().length
    ) {
      populate();
      return true;
    }
    return false;
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
    if (axis === "y") {
      return yAxisPlacement(shipObject, index, startLocation);
    } if (axis === "x") {
      return xAxisPlacement(shipObject, index, startLocation);
    }
  };

  return { getBoard, placeShip };
};

export default gameBoard;
