module.exports = function(reg){
    
        var paarl = [];
        var regNumbers = reg.split(',');
        for (var i=0;i<regNumbers.length;i++){
          var regPaarl = regNumbers[i].trim()
            if (regPaarl.startsWith('CJ')){
          paarl.push(regPaarl)
            }
        }
            return paarl.length;
          
      
        
        };