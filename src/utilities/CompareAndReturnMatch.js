const CompareAndReturnMatch = function(arr1, arr2) {

    let returnMatched = [];

    for(var i in arr1) {   

        if(arr2.indexOf(arr1[i].id) > -1){
            returnMatched.push(arr1[i]);
        }
    };

    return returnMatched;
};

export default CompareAndReturnMatch;