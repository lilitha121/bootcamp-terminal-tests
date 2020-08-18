let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Lilitha correctly', function(){
        assert.equal('Hello, Lilitha', greet('Lilitha'));
    });
    it('should greet Indiphile correctly', function(){
     
        assert.equal('Hello, Indiphile', greet('Indiphile'));
    });
});