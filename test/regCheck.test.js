let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function () {

    it("should return a regCheck that can check if a registration number is for GP registration plates.", function () {
        assert.equal(false, regCheck("reg"));
    });

    it("should return a regCheck that can check all GP registration plates.", function () {
        assert.equal(false, regCheck("location"));
    });
});