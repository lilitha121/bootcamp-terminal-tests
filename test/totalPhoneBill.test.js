let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function () {

    // it('should greet Lilitha correctly', function(){
    //     assert.equal('Hello, Lilitha', totalPhoneBill('Lilitha'));
    // });
    it('should return R7.45', function () {

        assert.equal(2.75, totalPhoneBill('call'));
    });
});