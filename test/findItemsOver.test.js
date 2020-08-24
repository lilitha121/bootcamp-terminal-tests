let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function () {


    it('should return products that have quantity higher than the threshold. ', function () {

        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 },
            { name: 'apples', qty: 3 },
        ];

        var threshold = 20;

        var result = [
            { name: 'pears', qty: 37 },
            { name: 'bananas', qty: 27 }
        ];
        assert.deepEqual(result, findItemsOver(itemList, threshold));
    });
    it('should return the amount of', function () {
        var itemList = [
            { name: 'apples', qty: 10 },
            { name: 'pears', qty: 7 },
            { name: 'bananas', qty: 7 },
            { name: 'apples', qty: 3 },
        ];

        var threshold = 20;

        assert.deepEqual([], findItemsOver(itemList, threshold));
    });
});