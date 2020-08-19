let assert = require("assert");
let fromWhere = require("../fromWhere");
const countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should  returns all the registration numbers in the string for Paarl', function(){
        assert.deepEqual(['CJ 123-223'], countAllPaarl('CJ 123-223, CY 256-838'));
    });
    it('should  returns all the registration numbers in the string for Paarl', function(){
     
        assert.deepEqual(['CJ 123-223'], countAllPaarl('CJ 123-223, CA 12345'));
    });
});