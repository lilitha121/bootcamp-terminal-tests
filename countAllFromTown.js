module.exports = function(reg,loc){
       
      var town = [];
      var regNumbers = reg.split(',');
      for (var i=0;i<regNumbers.length;i++){
        var regAllTown = regNumbers[i].trim()
          if (regAllTown.startsWith(loc)){
        town.push(regAllTown)
          }
       
      }
          return town.length;
      
      };