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
        const column = createDiv("column");
        // column.style.border = "solid black 2px";
        column.style.width = "50px";

        element.forEach(item => {
            const row = createDiv("row");
            row.style.height = "50px";
            row.style.border = "solid black 2px";
            // row.textContent = ite;
            column.appendChild(row);
        })

        boardHolder.appendChild(column);
    });
    body.appendChild(boardHolder);
}

export default renderBoard;