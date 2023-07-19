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
test("test place ship into game board.", () => {
    board.placeShip(ship("battleship"), "y", 1, 3);
    board.getBoard().forEach((element) => {
        element.length > 0 ? expect(typeof element[0]).toBe("object") : null; 
    });
});