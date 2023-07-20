import gameBoard from "./../components/gameBoard";
import ship from "./../components/ship";

let board = gameBoard();

test("test game board.", () => {
    expect(typeof board.getBoard()).toStrictEqual("object");
    expect(Object.keys(board.getBoard()).length).toStrictEqual(50);
    board.getBoard().forEach(element => {
        expect(typeof element).toBe("object");
    });

});
test("test placing one ship into game board.", () => {
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
});