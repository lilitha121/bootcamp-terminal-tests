
module.exports = function(bill){

//console.log(bill)
  var phone = 0;
  var totalBill = bill.split(', ')
  for (var i=0;i<totalBill.length;i++){
    var phoneBill = totalBill[i].trim()
    if (phoneBill === 'call'){
      phone += 2.75;
    }else{
      phone += 0.65;
  }

  }
        return 'R' + phone.toFixed(2)

};
// var totalPhoneBill = function (bill){
// //console.log(bill)
//   var phone = 0;
//   var totalBill = bill.split(', ')
//   for (var i=0;i<totalBill.length;i++){
//     var phoneBill = totalBill[i].trim()
//     if (phoneBill === 'call'){
//       phone += 2.75;
//     }else{
//       phone += 0.65;
//   }
// ​
//   }
//         return 'R' + phone.toFixed(2)
​
//};
