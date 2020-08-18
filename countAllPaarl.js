module.exports = function(reg){
    
        var paarl = [];  
        var regNumbersPaarl = reg.split(', ');
          
        for (var i=0;i<regNumbersPaarl.length;i++){
          if (regNumbersPaarl[i].startsWith('CJ')){
            paarl.push(regNumbersPaarl[i])
          }
         //return paarl 
        }
          return paarl
        
        
        
};