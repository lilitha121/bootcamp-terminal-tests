let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function () {


    it('should  returns all the registration numbers in the string for Paarl', function () {

        assert.deepEqual(['CJ 123-223'], countAllPaarl('CJ 123-223, CAA 12345, CY 156-895'));
    });

    it('should  return an empty array', function () {

        assert.deepEqual([], countAllPaarl('CY 259-258, CAA 12345, CY 258-542,CA 75865'));
    });


});