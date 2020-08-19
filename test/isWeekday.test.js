let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function () {

    it("should find out if the parameter passed in is a day of the week ", function () {
        assert.equal(true, isWeekday("Friday"));
    });

    it("should find out if the parameter passed in is not a day of the week ", function () {
        assert.equal(false, isWeekday("Saturday"));
    });
});