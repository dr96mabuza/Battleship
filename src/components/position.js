const position = (x, length) => {
    if (typeof x == "number" && typeof length == "number") {
        return { 
            getX() { return x;},
            getY() { return x + length; }
         }
    }
    return null;
};

export default position