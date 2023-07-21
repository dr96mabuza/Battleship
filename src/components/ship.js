import { v4 as uuidv4 } from "uuid";

/**
 * A factory function that is used to create a ship object.
 * The ship will have values like size and can take hits.
 * The function will only return an object with methods only.
 *
 * @param { String } shipName
 * @returns { Object }
 */
const ship = (shipName) => {
  /**
   * A function that gets the size for the correct ship.
   * If the shipname is correct the size of the ship is returned.
   *
   * @param { String } name
   * @returns { Number }
   */
  const getShipSize = (name) => {
    const sizes = {
      battleship: 4,
      carrier: 5,
      cruiser: 3,
      submarine: 3,
      destroyer: 2,
    };
    return sizes[name];
  };

  const size = getShipSize(shipName);
  let sunk = false;
  const name = shipName;
  let hits = 0;
  const id = uuidv4();

  /**
   * A function that  increases the number of hits taken by the ship.
   * Hits are increased by one everytime the function is called.
   */
  const increamentHits = () => {
    hits += 1;
  };

  /**
   * A function that checks if the robot has been sunk.
   * Ship is sunk if the amount of shots taken is the same as the size of the ship.
   * "true" if sunk.
   */
  const checkIfSunk = () => {
    if (size === hits) {
      sunk = true;
    }
  };

  /**
   * A function that calls other functions to hit the ship and
   * always check if its sunk after the hit is taken.
   */
  const handleHit = () => {
    increamentHits();
    checkIfSunk();
  };

  /**
   * A function that returns the name of the ship.
   *
   * @returns { String }
   */
  const getName = () => name;

  /**
   * A function that returns the length of the ship.
   * Each ship has its own specific length.
   *
   * @returns { Number }
   */
  const getSize = () => size;

  /**
   * A object method that returns a boolean if the ship is sunk.
   * If the ship is sunk, the result will be "true".
   * If not the result will be "false".
   *
   * @returns { Boolean }
   */
  const getSunk = () => sunk;

  /**
   * A function that return a unique id of the object.
   *
   * @returns { String }
   */
  const getId = () => id;

  /**
   * A function that calls is handle hit to increase
   * the amount of hits taken by the ship.
   */
  const isHit = () => {
    handleHit();
  };

  return {
    getName,
    getSize,
    getSunk,
    getId,
    isHit,
  };
};

export default ship;
