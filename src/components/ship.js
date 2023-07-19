const ship = (shipName) => {

  /**
   * get the size for the correct ship.
   * @param { String } name 
   * @returns { Number } 
   */
  const getShipSize = (name) => {
    const sizes = { "battleship":4, "carrier": 5, "cruiser": 3, "submarine": 3, "destroyer": 2 };
    return sizes[name];
  }

  const size = getShipSize(shipName);
  let sunk = false;
  const name = shipName;
  let hits = 0;

  const increamentHits = () => { hits += 1; }; 
  const checkIfSunk = () => { size == hits ? sunk = true : null; }
  const handleHit = () => {
    increamentHits();
    checkIfSunk();
  }
 
  return {
    getSize() { return size; },
    getSunk() { return sunk; },
    getName() { return name; },
    isHit() { handleHit(); }
  };
};

module.exports = ship;
