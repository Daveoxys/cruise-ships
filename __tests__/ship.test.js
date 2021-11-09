const Ship = require("../src/Ships");
//const Port = require("../src/Ports");
//const Itinerary = require("..src/Itinerary");

describe("constructor", () => {
  let wiganPier;
  let portsMouth;
  let itinerary;
  let ship;

  beforeEach(() => {
    wiganPier = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Wigan Pier",
      ships: [],
    };
    portsMouth = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "portsMouth",
      ships: [],
    };
    itinerary = {
      ports: [wiganPier, portsMouth],
    };

    ship = new Ship(itinerary);
  });

  it("returns an object", () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it("checks the object has a currentPort property", () => {
    expect(ship.currentPort).toEqual(wiganPier);
  });

  it("checks the ship has set sail", () => {
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(wiganPier);
    expect(wiganPier.removeShip).toHaveBeenCalledWith(ship);
  });

  it("checks the ship has docked at a new port", () => {
    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(portsMouth);
    expect(wiganPier.addShip).toHaveBeenCalledWith(ship);
  });

  it("ship cannot sail further than its itinerary", () => {
    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError("End of itinerary reached");
  });

  it("checks that ship has been added to port on creation", () => {
    expect(wiganPier.addShip).toHaveBeenCalledWith(ship);
  });
});
