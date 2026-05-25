function hasOddNumber(arr){
    return arr.some(function(value){
        if(value % 2 !== 0){
            return true;
        }
    })
};

function hasAZero(num){
    num.toString().split('').some(function(value){
        return val === '0';
    })
};

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
       return num % 2 !== 0;
        
    })
};

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
};

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return val[key] !== undefined;
    })
};

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    });
};