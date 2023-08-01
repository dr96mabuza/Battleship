const createDiv = (id) => {
    const div = document.createElement("div");
    div.setAttribute("id", id);
    return div;
};

const renderBoard = ( board ) => {
    const body = document.querySelector("body");
    const boardHolder =  createDiv("board");
    // console.log(board)
    board.forEach(element => {
        const column = createDiv("board-column");
        column.style.border = "solid black 2px";

        element.forEach(item => {
            const row = createDiv("board-row");
            row.textContent = item;
            column.appendChild(row);
        })

        boardHolder.appendChild(column);
    });
    body.appendChild(boardHolder);
}

export default renderBoard;