let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function () {

 

    it(" should return number registration numbers in the string that is for that town.", function () {
        assert.equal(2, countAllFromTown("CJ 45509, CA 352-895, CA 15268",'CA'));
    });

    it(" should return zero if there is no registration for that town", function () {
        assert.deepEqual(0, countAllFromTown("CJ 45509, CA 352-895, CA 15268",'CK'));
    });
});