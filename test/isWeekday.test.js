let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function () {

    it("should find out if the parameter passed in is a day of the week ", function () {
        assert.equal(true, isWeekday("Friday"));
    });

    // it("should return false for CY 123-223", function () {
    //     assert.equal(false, isWeekday("CJ 123-223"));
    // });
});