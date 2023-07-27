/* eslint-disable no-undef */
import player from "../components/player";

test("create new player", () => {
    expect(typeof player("computer")).toBe("object");
});

test("test create player. returns player name.", () => {
    expect(player("computer").getName()).toBe("computer");
    expect(player("paul").getName()).toBe("paul");
});

test("test if player returns player board.", () => {
    expect(typeof player("paul").getPlayerBoard()).toBe("object");
});

test("place ships randomly if computer is playing", () => {
    const ai = player("computer");
    ai.randomlyPlaceShips();
    expect(ai.getPlayerBoard().allPlaced()).toBeTruthy()
});
