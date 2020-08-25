module.exports = function(items, threshold){
 
    
   var listQuantity = []
   
   for (var i=0;i<items.length;i++){
      var listItem = items[i].qty;
      if (listItem > threshold){
        listQuantity.push(items[i])
          }
   
    }
    return listQuantity
   
  };