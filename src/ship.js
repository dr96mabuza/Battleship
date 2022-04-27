const ship = (a, b) => {
  class Object {
    constructor(Length, hit, isSunks) {
      this.Length = Length;
      this.hit = hit;
      this.isSunk = isSunks;
    }
  }

  const array = [];

  function length(shipName) {
    function setShipLength() {
      if (shipName === "Carrier") {
        array.length = 5;
      }
      if (shipName === "battleship") {
        array.length = 4;
      }
      if (shipName === "Cruiser" || shipName === "Submarine") {
        array.length = 3;
      }
      if (shipName === "Destroyer") {
        array.length = 2;
      }
    }
    setShipLength();
    return array.length;
  }
  const hitLocation = [];
  const hit = (num) => {
    hitLocation[num] = "hit";

    return hitLocation;
  };

  const isSunk = () => {
    const sink = hitLocation.map((x) => x === "hit");
    return sink;
  };
  return new Object(length(a), hit(b), isSunk());
};

module.exports = ship;
