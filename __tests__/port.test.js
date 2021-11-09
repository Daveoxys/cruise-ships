const Port = require("../src/Ports");
const Itinerary = require("../src/Itinerary");
const Ship = require("../src/Ships");

describe("Port", () => {
  describe("constructor", () => {
    let wiganPier;
    let portsMouth;
    let itinerary;
    let ship;

    beforeEach(() => {
      wiganPier = new Port("Wigan Pier");
      portsMouth = new Port("Portsmouth");
      itinerary = new Itinerary([wiganPier, portsMouth]);
      ship = new Ship(itinerary);
    });

    it("returns an object", () => {
      expect(new Port()).toBeInstanceOf(Object);
    });

    it("checks that ships can be added to the port", () => {
      const shipTwo = jest.fn();
      wiganPier.addShip(shipTwo);
      expect(wiganPier.ships).toContain(shipTwo);
    });

    it("checks that ships can be removed from the port", () => {
      const shipTwo = jest.fn();
      wiganPier.addShip(shipTwo);
      wiganPier.removeShip(shipTwo);
      expect(wiganPier.ships).toEqual([ship]);
    });
  });
});
