function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value * 2);
    });
    return newArr;
};
function onlyEvenValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0 && value !== 0){
            newArr.push(value);
        }
    });
    return newArr;
};

function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value[0] + value[value.length - 1]);
    });
    return newArr;
};

function addKeyAndValue(arr, key, value){
    arr.forEach(function(obj){
        obj[key] = value;
    });
    return arr;
};

function vowelCount(str){
    const vowels = {};
    const splitArr = str.split('');
    splitArr.forEach(function(letter){
        let lowercase = letter.toLowerCase();
        if('aeiou'.indexOf(lowercase) !== -1){
            if(vowels[lowercase]){
                vowels[lowercase]++;
            } else {
                vowels[lowercase] = 1;
            }
        }
    });
    return vowels;
};


function doubleValuesWithMap(arr){
     return arr.map(function(value){
        return value * 2;
    
    });
};

 function valTimesIndex(arr){
    return arr.map(function(value, idx){
        return value * idx;
    })
};


function extractKey(arr, key){
    return arr.map(function(value){
        return value[key];
    })
};

function extractFullName(arr){
    return arr.map(function(value){
        return value.first + ' ' + value.last;
    })
};

function filterByValue(arr, key){
    return arr.filter(function(value){
        return value[key] !== undefined;
    });
};

function find(arr, searchValue){
    return arr.filter(function(value){
        return value === searchValue;
    });
};

function findInObj(arr, key, searchValue){
    return arr.filter(function(value){
        return value[key] === searchValue;
    });
};

function removeVowels(str){
    const vowels = 'aeiou';
    return str.toLowerCase().split('').filter(function(letter){
        return vowels.indexOf(letter) === -1;
    }).join('');
};

function doubleOddNumbers(arr){
    return arr.filter(function(value){
        return value % 2 !== 0;
    }).map(function(value){
        return value * 2;
    });
};