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

