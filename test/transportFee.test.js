let assert = require("assert");
let transportFee = require("../transportFee");

describe("The transportFee function ", function(){
  
    it ("should return 'R20'if it is morning shift", function() {
       
        assert.equal('R20', transportFee(''));
    });
      it ("should return '10' if it is afternoon shift", function() {
       
        assert.equal('R10', transportFee('afternoon'));
    });
       it ("should return 'free' if it is night shift", function() {
      
        assert.equal('free', transportFee('free'));
      
    }); 
});
