const ship = require("./../components/ship");

let battleship;
let carrier;
let cruiser;
let submarine;
let destroyer;

beforeEach(() => {
  battleship = ship("battleship");
  carrier = ship("carrier");
  cruiser = ship("cruiser");
  submarine = ship("submarine");
  destroyer = ship("destroyer");
})

test("tests the length of the ships is correct.", () => {
  expect(battleship.getSize()).toBe(4);
  expect(carrier.getSize()).toBe(5);
  expect(cruiser.getSize()).toBe(3);
  expect(submarine.getSize()).toBe(3);
  expect(destroyer.getSize()).toBe(2);
});

test("test get name returns correct name.", () => {
  expect(battleship.getName()).toEqual("battleship");
  expect(carrier.getName()).toEqual("carrier");
  expect(cruiser.getName()).toEqual("cruiser");
  expect(submarine.getName()).toEqual("submarine");
  expect(destroyer.getName()).toEqual("destroyer");
});

test("test if ship object legth is correct.", () => {
  expect(Object.keys(battleship).length).toEqual(4);
  expect(Object.keys(carrier).length).toEqual(4);
  expect(Object.keys(cruiser).length).toEqual(4);
  expect(Object.keys(submarine).length).toEqual(4);
  expect(Object.keys(destroyer).length).toEqual(4);
});

test("test that sunk and hit works", () => {
  expect(battleship.getSunk()).toBe(false);
  for (let index = 0; index < battleship.getSize(); index++) {
    battleship.isHit();
  }
  expect(battleship.getSunk()).toBe(true);
});
