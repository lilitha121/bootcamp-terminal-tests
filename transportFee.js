module.export = function(shift){
//var transportFee = function(shift){
    //console.log(shift)
    if ( shift === 'morning'){
      return 'R20'
    }else if(shift === 'afternoon'){
    return 'R10'
    }else if (shift ==='nightshift'){ 
      return 'free'
    }else{
     return 'free' 
    }
  };
  
  