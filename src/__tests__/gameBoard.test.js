import gameBoard from "./../components/gameBoard";
import ship from "./../components/ship";

test("test game board.", () => {
    let board = gameBoard();
    expect(typeof board.getBoard()).toStrictEqual("object");
    expect(Object.keys(board.getBoard()).length).toStrictEqual(50);
    board.getBoard().forEach(element => {
        expect(typeof element).toBe("object");
    });

});

test("test placing one ship into an empty game board. placement on the y axis.", () => {
    // y axis ship placement.
    let board = gameBoard();
    board.getBoard().forEach(element => {
        element.forEach(item => {
            expect(item).toBe("");
        });
    });

    const battleship = ship("battleship");
    expect(board.placeShip(battleship, "y", 1, 3)).toBe(true);
    expect(board.getBoard()[1].every(item => { item == ""})).toBeFalsy();

    let ind = [];
    for (let index = 0; index < board.getBoard()[1].length; index++) {
        if (board.getBoard()[1][index] === battleship.getId()) {
            ind.push(index);
        }
    }
    expect(ind).toStrictEqual([3, 4, 5, 6]);
    expect(board.placeShip(battleship, "y", 1, 50)).toBeFalsy();
    expect(board.placeShip(battleship, "y", 1, "50")).toBeFalsy();
});

test("test placing one ship into an empty game board. placement on the x axis.", () => {
    // x axis ship placement.
    let board = gameBoard();
    board.getBoard().forEach(element => {
        element.forEach(item => {
            expect(item).toBe("");
        });
    });

    const battleship = ship("battleship");
    expect(board.placeShip(battleship, "x", 1, 3)).toBe(true);

    [1, 2, 3, 4].forEach(item => {
        expect(board.getBoard()[item][3]).toBe(battleship.getId())
    });

    
});