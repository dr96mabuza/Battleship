/* eslint-disable no-plusplus */
/**
 * A factory function to create a board object to store
 * \nthe information about the player board.
 * \nReturns an object that has methods that allow the player to place ships
 * \nand take hits from the opponent.
 *
 * @returns { Object }
 */
const gameBoard = () => {
  /**
   * create a board with a set amount of available positions.
   *
   * @returns { Array }
   */
  const generateBoard = () => Array.from({length: 10}, () => Array(10).fill(""));

  const board = generateBoard();
  const placedShips = {      
    "battleship": false,
    "carrier": false,
    "cruiser": false,
    "submarine": false,
    "destroyer": false
  }
  let ships = [];

  /**
   * Check if all the ships are placed.
   * 
   * @returns { Boolean }
   */
  const allPlaced = () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in placedShips) {
      if (placedShips[key] === false) { return false; }
    }

    return true
  };

  /**
   * get the game board with the latest data.
   *
   * @returns { Array }
   */
  const getBoard = () => board;

  /**
   * if the ship size is within the array length,
   * \nplace the ship from the starting position until the end position.
   * \nship will be contained within one inner array.
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
     * \nMust not populate if the position is taken.
     * \nSlot is populated with the ship object id.
     * \nPopulation will be limited to one array.
     */
    const populate = () => {
      for (let index = startLocation; index < end; index++) {
        if (getBoard()[arrayIndex][index] === "") {
          getBoard()[arrayIndex][index] = shipObject.getId();
        }
      }
    };

    /**
     * Check if all the slots are available.
     * \n if available return "True", else should be "False".
     * @returns { Boolean }
     */
    const allSlotsAvailable = () => {
      const selectedSlots = getBoard()[arrayIndex].slice(startLocation,end);
      return selectedSlots.every(element => element === "");
    };

    if (
      startLocation >= 0 &&
      end < getBoard()[arrayIndex].length &&
      arrayIndex > 0 < getBoard().length &&
      allSlotsAvailable() &&
      placedShips[shipObject.getName()] === false
    ) {
      populate();
      ships.push(shipObject);
      placedShips[shipObject.getName()] = true;
      return true;
    }

    return false;
  };

  /**
   * if the ship size is within the array length,
   * \nplace the ship from the starting position until the end position.
   * \nship will span across multiple array.
   *
   * @param { Object } shipObject
   * @param { Number } arrayIndex
   * @param { Number} startLocation
   * @returns { Boolean }
   */
  const xAxisPlacement = (shipObject, arrayIndex, startLocation) => {
    const end = arrayIndex + shipObject.getSize();

    /**
     * A function to populate the array if the slot is empty("").
     * \nMust not populate if the position is taken.
     * \nSlot is populated with the ship object id.
     * \nPopulation will be limited span across multiple arrays.
     */
    const populate = () => {
      for (let index = arrayIndex; index < end; index++) {
        if (getBoard()[index][startLocation] === "") {
          getBoard()[index][startLocation] = shipObject.getId();
        }
      }
    };

    /**
     * Check if all the slots are available.
     * \n if available return "True", else should be "False".
     * 
     * @returns { Boolean }
     */
    const allSlotsAvailable = () => {
      const usedLists = getBoard().slice(arrayIndex, end);
      const items = [];
      usedLists.forEach(element => {
        items.push(element[startLocation]);
      });
      return items.every(element => element === "");
    };

    if (
      startLocation >= 0 &&
      end < getBoard()[arrayIndex].length &&
      arrayIndex > 0 < getBoard().length &&
      allSlotsAvailable() &&
      placedShips[shipObject.getName()] === false
    ) {
      populate();
      ships.push(shipObject);
      placedShips[shipObject.getName()] = true;
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

  /**
   * A function that hits a specific ship using the ships id.
   * \nHit should be called is the id is correct and "sunk" is "false".
   * 
   * @param { Number } outerIndex 
   * @param { Number } innerIndex 
   */
  const hitShip = (outerIndex, innerIndex) => {
    ships = ships.map(item => {
      if (
        getBoard()[outerIndex][innerIndex] === item.getId() &&
        !item.getSunk()
        ) {
        item.isHit();
        return item;
      }
      return item;
    });
  };

  /**
   * A function to allow the board to be able to take attacks from an opponent.
   * \nReturns a "Boolean" after attack is received."
   * \n If a ship is hit the function should return "true".
   * \nIf miss, "false".
   * @param { Number } outerIndex 
   * @param { Number } innerIndex 
   * @returns { Boolean }
   */
  const receiveAttack = (outerIndex, innerIndex) => {
    if (getBoard()[outerIndex][innerIndex] === "") {return false;}
    hitShip(outerIndex, innerIndex);
    return true;
  }

  const allShipsSunk = () => ships.every(ship => ship.getSunk());

  return { getBoard, placeShip, allPlaced, receiveAttack, allShipsSunk };
};

export default gameBoard;
