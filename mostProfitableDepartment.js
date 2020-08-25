module.exports = function (depart) {
    var departMap = {}
    for (var i = 0; i < depart.length; i++) {
        var depart2 = depart[i].department
        if (departMap[depart2] === undefined) {
            departMap[depart2] = 0
        }
        else {
            departMap[depart2] += depart[i].sales
        }
    }

    var highiest = 0
    var highiestDep = "";
    for (let keys in departMap) {
        if (departMap[keys] > highiest) {
            highiest = departMap[keys]
            highiestDep = keys

        }
    }

    return highiestDep



};
module.exports = function (day){

 var Department = []
  var day1 = ""
 var sales1 = 0
 for(var i=0;i<day1.length;i++){
   var depart2 = day1[i].Department
   var sales2 = day1[i].sales
    
   if (sales2 > sales1){
   sales1 = sales2
      
   }
   if (sales1 === sales2){
     depart1 = depart2
   }   
 }
   return day1
}



