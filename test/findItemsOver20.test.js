let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function', function () {
    var itemList = [
        { name: 'apples', qty: 10 },
        { name: 'pears', qty: 37 },
        { name: 'bananas', qty: 27 },
        { name: 'apples', qty: 3 },
    ];

    var result = [
                { name: 'pears', qty: 37 },
                { name: 'bananas', qty: 27 }
            ];

    it('should return all the products that have a quantity higher than 20', function () {
        assert.deepEqual(result, findItemsOver20(itemList));
    });
    //     it('should greet Indiphile correctly', function(){

    //         assert.equal('Hello, Indiphile', findItemsOver20('Indiphile'));
    //     });
    it('should return all the products that have a quantity more than 20', function () {
        assert.deepEqual(result, findItemsOver20(itemList));
    });
});