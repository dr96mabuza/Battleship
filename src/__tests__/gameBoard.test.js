const gameBoard = require("./../components/gameBoard");

let board = gameBoard();

test("", () => {
    expect(board).toStrictEqual({})
});
// test("", () => {});