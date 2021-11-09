const Itinerary = require("../src/Itinerary");
const Port = require("../src/Ports");
const Ship = require("../src/Ships");

describe("Itinerary", () => {
  describe("constructor", () => {
    let wiganPier;
    let portsMouth;
    let itinerary;

    beforeEach(() => {
      wiganPier = new Port("Wigan Pier");
      portsMouth = new Port("Portsmouth");
      itinerary = new Itinerary([wiganPier, portsMouth]);
      ship = new Ship(itinerary);
    });

    it("returns an object", () => {
      expect(new Itinerary()).toBeInstanceOf(Object);
    });
    it("returns the ports in the itinerary", () => {
      expect(itinerary.ports).toEqual([wiganPier, portsMouth]);
    });
  });
});
