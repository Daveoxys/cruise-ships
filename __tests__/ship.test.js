const Ship = require("../src/Ships.js");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const ship = new Ship("Dave");
    expect(ship.name).toEqual("Dave");
  });

  it("has a starting port", () => {
    const ship = new Ship("Dover");
    expect(ship.startingPort).toBe("Dover");
  });
});
