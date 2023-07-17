const ship = (shipName) => {
  let size = 0;
  if (shipName === "Carrier") {
    size = 5;
  }else if (shipName === "battleship") {
    size = 4;
  }else if (shipName === "Cruiser" || shipName === "Submarine") {
    size = 3;
  }else if (shipName === "Destroyer") {
    size = 2;
  }

  const obj = {
    name: shipName,
    size: size,
    sunk: false,
    getSize() { return this.size; },
    // setSunk(sunk) { this.sunk = sunk; },
    // getSunk() { return this.sunk; },
    getName() { return this.name; }
  }
  return obj;
};

module.exports = ship;
