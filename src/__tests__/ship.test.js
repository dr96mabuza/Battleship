const ship = require("./../components/ship");

test("tests the length of the ship, if it is hit and if its sunk", () => {
  expect(ship("battleship", 5)).toEqual({
    Length: 4,
    hit: ["", "", "", "", "", "hit"],
    isSunk: false,
  });
});

test.skip("test some", () => {
  expect(ship([2, 4, 6])).toEqual({ length: 3, hit: true, isSunk: true });
});
