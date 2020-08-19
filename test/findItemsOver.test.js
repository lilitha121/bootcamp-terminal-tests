let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

//     var results = findItemsOver(itemList, 25)
// //results look like this now.
// var results = [
//     {name : 'pears', qty : 37},
//     {name : 'bananas', qty : 27},
// ];
    it('should return products that have quantity higher than the threshold. ', function(){
        assert.deepEqual([], findItemsOver('itemList'));
    });
    it('should return the amount of', function(){
     
        assert.deepEqual([], findItemsOver('listQuantity'));
    });
});