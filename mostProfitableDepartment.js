module.exports = function(depart) {
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

