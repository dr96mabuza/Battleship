/* eslint-disable no-undef */
import player from "../factories/player";

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
    expect(ai.getPlayerBoard().allPlaced()).toBeTruthy();
});

test("test computer attack opponent", () => {
    const ai = player("computer");
    const user = player("user");
    ai.randomlyPlaceShips();
    user.randomlyPlaceShips();
    expect(ai.getPlayerBoard().allPlaced()).toBeTruthy();
    expect(user.getPlayerBoard().allPlaced()).toBeTruthy();
    expect(ai.attack(user)).toBeTruthy();
    // while (!user.getPlayerBoard().allShipsSunk()) {
        
    // }
    // expect(user.user.getPlayerBoard().allShipsSunk()).toBeTruthy();
});

test("test user attack", () => {
    const ai = player("computer");
    const user = player("user");
    ai.randomlyPlaceShips();
    user.randomlyPlaceShips();
    expect(ai.getPlayerBoard().allPlaced()).toBeTruthy();
    expect(user.getPlayerBoard().allPlaced()).toBeTruthy();
    expect(user.attackForUserOnly(ai, 1, 1)).toBeTruthy();
    expect(user.attackForUserOnly(ai, 1, 1)).toBeFalsy();
});
