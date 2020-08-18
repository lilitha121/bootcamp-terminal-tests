let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function () {

    it("should  take a parameter string with registration numbers separated with commas", function () {
        assert.equal(0, countRegNumber("reg"));
    });

    it("returns the number of registration numbers in the string for Paarl", function () {
        assert.equal(false, countRegNumber("reg"));
    });
});