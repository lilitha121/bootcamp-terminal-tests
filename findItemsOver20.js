module.exports = function(fruitList){

    //console.log(list)
     var fruit = []
     
     for (var i=0;i<fruitList.length;i++){
        var listItem = fruitList[i].qty;
        if (listItem > 20){
          fruit.push(fruitList[i])
            }
    
      }
      return fruit
    };  
    
    // var findItemsOver = function (items, threshold) { 
    //   //console.log(items)
    //  var listQuantity = []
     
    //  for (var i=0;i<items.length;i++){
    //     var listItem = items[i].qty;
    //     if (listItem > threshold){
    //       listQuantity.push(items[i])
    //         }
     
    //   }
    //   return listQuantity
    //   //console.log(listQuantity)
    // };