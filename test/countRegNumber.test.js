let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function () {

    it("should return zero registration numbers", function () {
        assert.equal(0, countRegNumber("reg"));
    });

    it("returns the number of registration numbers in the string for Paarl", function () {
        assert.equal(false, countRegNumber("reg"));
    });
});