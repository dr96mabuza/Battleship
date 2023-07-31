const renderBoard = ( board ) => {
    const body = document.querySelector("body");
    const boardHolder =  document.createElement("div");
    board.forEach(element => {
        const column = document.createElement("div");
        column.setAttribute("id", "board-column");

        element.forEach(item => {
            const row = document.createElement("div");
            row.setAttribute("id", "board-row");

            column.appendChild(row);
        })

        boardHolder.appendChild(column);
    });
    body.appendChild(boardHolder);
}

export default renderBoard;