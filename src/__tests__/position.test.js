import position from "./../components/position";

test("test if position object works properly.", () => {
    expect(position(3, 4).getX()).toStrictEqual(3);
    expect(position(3, 4).getY()).toStrictEqual(7);
    expect(position(3, "5")).toBe(null);
})