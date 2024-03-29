/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
import gameBoard from "../factories/gameBoard";
import ship from "../factories/ship";

// eslint-disable-next-line no-undef
test("test game board.", () => {
  const board = gameBoard();
  expect(typeof board.getBoard()).toStrictEqual("object");
  expect(Object.keys(board.getBoard()).length).toStrictEqual(10);
  board.getBoard().forEach((element) => {
    expect(typeof element).toBe("object");
  });
});

test("test placing one ship into an empty game board. \nplacement on the y axis.", () => {
  // y axis ship placement.
  const board = gameBoard();
  board.getBoard().forEach((element) => {
    element.forEach((item) => {
      expect(item).toBe("");
    });
  });

  const battleship = ship("battleship");
  expect(board.placeShip(battleship, "y", 1, 3)).toBe(true);
  expect(
    board.getBoard()[1].every((item) => item === ""),
  ).toBeFalsy();

  const ind = [];
  for (let index = 0; index < board.getBoard()[1].length; index++) {
    if (board.getBoard()[1][index] === battleship.getId()) {
      ind.push(index);
    }
  }
  expect(ind).toStrictEqual([3, 4, 5, 6]);
  expect(board.placeShip(battleship, "y", 1, 10)).toBeFalsy();
  expect(board.placeShip(battleship, "y", 1, "10")).toBeFalsy();
});

test("test placing one ship into an empty game board. \nplacement on the x axis.", () => {
  // x axis ship placement.
  const board = gameBoard();
  board.getBoard().forEach((element) => {
    element.forEach((item) => expect(item).toBe(""));
  });

  const battleship = ship("battleship");
  expect(board.placeShip(battleship, "x", 1, 3)).toBe(true);

  [1, 2, 3, 4].forEach((item) => {
    expect(board.getBoard()[item][3]).toBe(battleship.getId());
  });

  expect(board.getBoard()[5][3]).toBe("");
  expect(board.getBoard()[0][3]).toBe("")
  expect(board.placeShip(battleship, "y", 1, "10")).toBeFalsy();
});

test("Multiple ships placement in one board.", () => {
  const board = gameBoard();
  const battleship = ship("battleship");
  const carrier = ship("carrier");
  const cruiser = ship("cruiser");
  const submarine = ship("submarine");
  const destroyer = ship("destroyer");

  expect(board.placeShip(battleship, "y", 1, 9)).toBeFalsy();
  expect(board.placeShip(battleship, "y", 1, 5)).toBeTruthy();
  expect(board.placeShip(destroyer, "y", 1, 1)).toBeTruthy();
  expect(board.placeShip(submarine, "y", 9, 9)).toBeFalsy();
  expect(board.placeShip(submarine, "y", 9, 4)).toBeTruthy();

  expect(board.allPlaced()).toBeFalsy();

  expect(board.placeShip(carrier, "y", 5, 4)).toBeTruthy();
  expect(board.placeShip(cruiser, "x", 2, 3)).toBeTruthy();
  expect(board.allPlaced()).toBeTruthy();
});

test("test receiveAttack function works.", () => {
  const board = gameBoard();
  const cruiser = ship("cruiser");
  board.placeShip(cruiser, "x", 2, 3);

  expect(board.receiveAttack(1, 3)).toBeFalsy();
  expect(board.receiveAttack(2, 3)).toBeTruthy();
});

test("test if all the ships are sunk", () => {
  const board = gameBoard(); // create gameboard

  // create ships
  const battleship = ship("battleship");
  const carrier = ship("carrier");
  const cruiser = ship("cruiser");
  const submarine = ship("submarine");
  const destroyer = ship("destroyer");

  // place ships
  expect(board.placeShip(battleship, "y", 1, 5)).toBeTruthy();
  expect(board.placeShip(destroyer, "y", 1, 1)).toBeTruthy();
  expect(board.placeShip(submarine, "y", 9, 4)).toBeTruthy();
  expect(board.placeShip(carrier, "y", 5, 4)).toBeTruthy();
  expect(board.placeShip(cruiser, "x", 2, 3)).toBeTruthy();
  expect(board.allPlaced()).toBeTruthy(); // check if all ships are placed.

  // check if all ships are sunk
  expect(board.allShipsSunk()).toBeFalsy()

  // atttack all the ships

  // attack battleship
  board.receiveAttack(1,5);
  board.receiveAttack(1,6);
  board.receiveAttack(1,7);
  board.receiveAttack(1,8);

  // attack carrier
  board.receiveAttack(5,4);
  board.receiveAttack(5,5);
  board.receiveAttack(5,6);
  board.receiveAttack(5,7);
  board.receiveAttack(5,8);

  // attack cruiser
  board.receiveAttack(2,3);
  board.receiveAttack(3,3);
  board.receiveAttack(4,3);

  // attack submarine
  board.receiveAttack(9,4);
  board.receiveAttack(9,5);
  board.receiveAttack(9,6);

  // attack destroyer
  board.receiveAttack(1,1);
  board.receiveAttack(1,2);

  expect(board.allShipsSunk()).toBeTruthy();
});