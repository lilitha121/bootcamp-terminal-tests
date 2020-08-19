let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function () {

    it('should greet Lilitha correctly', function(){
        assert.equal('R0.65', totalPhoneBill('sms'));
    });
    it('should return R7.45', function () {

        assert.equal('R2.75', totalPhoneBill('call'));
    });
});