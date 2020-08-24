let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function () {

    it("should return a regCheck that can check if a registration number is for GP registration plates.", function () {
        assert.equal(true, regCheck("GP 456-789","GP"));
    });

    it("should return a regCheck that can check all CA registration plates.", function () {
        assert.equal(true, regCheck("CA 123-545","CA"));
    });
});