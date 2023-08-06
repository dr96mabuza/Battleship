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
        column.style.width = "40px";

        element.forEach(item => {
            const row = createDiv("row");
            row.style.height = "40px";
            row.style.border = "solid black 1px";
            row.textContent = item;
            row.style.overflow = "hidden";
            column.appendChild(row);
        })

        boardHolder.appendChild(column);
    });
    body.appendChild(boardHolder);
}


export default renderBoard;