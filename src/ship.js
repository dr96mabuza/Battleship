const ship = (shipName) => {
  const array = [];
  const hitLocation = [];

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

  function length() {
    return array.length;
  }

  const hit = (num) => {
    hitLocation[num] = "hit";
    return hitLocation;
  };

  const isSunk = () => {
    const sink = hitLocation.every((x) => x === "hit");
    return sink;
  };
  return { length, hit, isSunk };
};

module.exports = ship;
