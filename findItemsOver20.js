module.exports = function(fruitList){

  
     var fruit = []
     
     for (var i=0;i<fruitList.length;i++){
     
        var listItem = fruitList[i].qty;
        
        if (listItem > 20){
          
          fruit.push(fruitList[i])
           
    
      }
    } 
    return fruit

  };
