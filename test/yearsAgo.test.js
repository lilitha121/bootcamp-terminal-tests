let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function () {

    it("should take in a year", function () {
        assert.equal(0, yearsAgo("2020"));
    });

    it("should return how many years ago that was", function () {
        assert.equal(0, yearsAgo("2020"));
    });
});