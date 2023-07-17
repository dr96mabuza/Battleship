const ship = require("./../components/ship");
let battleship;
beforeEach(() => {
  battleship = ship("battleship");
})

test("tests the length of the ship, if it is hit and if its sunk", () => {
  expect(battleship.getName()).toEqual("battleship")
});

test.skip("test some", () => {
  expect(ship([2, 4, 6])).toEqual({ length: 3, hit: true, isSunk: true });
});
