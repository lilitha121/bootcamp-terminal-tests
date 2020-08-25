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
  
    var items = [
        { name: 'naartjie', qty: 9 },
        { name: 'peach', qty: 8 },
        { name: 'kiwi', qty: 5 },
        { name: 'apricot', qty: 3 },
    ];


    it('should return an empty list if there is no item over 20', function () {
        assert.deepEqual([], findItemsOver20(items));
    });
});