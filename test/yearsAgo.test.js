let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function () {

    it("should take in a year", function () {
        assert.equal(2, yearsAgo(2018));
    });

    it("should return how many years ago that was", function () {
        assert.equal(4, yearsAgo(2016));
    });
});