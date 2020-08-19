let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function () {

    // it("should return true for CY 123-223", function () {
    //     assert.equal(true, countAllFromTown("CY 123-223"));
    // });

    it(" should return number registration numbers in the string that is for that town.", function () {
        assert.equal(false, countAllFromTown("CJ 123-223"));
    });

    it(" should return number registration numbers in the string that is for that town.", function () {
        assert.equal(0, countAllFromTown("CJ 123-223"));
    });
});