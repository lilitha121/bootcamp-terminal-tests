let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    // it('should take a parameter string with registration numbers separated with commas .', function(){
    //     assert.equal('true', countAllPaarl('reg'));
    // });
    it('should  returns all the registration numbers in the string for Paarl', function(){
     
        assert.deepEqual(['CJ 123-223'], countAllPaarl('CJ 123-223, CA 12345'));
    });
});