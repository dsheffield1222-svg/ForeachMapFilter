function extractValue(arr, key){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue[key]);
    })
};

function vowelCount(str){
    const vowels = {};
    const splitArr = str.split('');
    splitArr.reduce(function(accumulator, nextLetter){
        let lowercase = nextLetter.toLowerCase();
        if('aeiou'.indexOf(lowercase) !== -1){
            if(vowels[lowercase]){
                vowels[lowercase]++;
            } else {
                vowels[lowercase] = 1;
            }
        }
    }, vowels); 
    return vowels;
};

addKeyAndValue = function(arr, key, value){
    return arr.reduce(function(accumulator, nextObj){
        nextObj[key] = value;
        accumulator.push(nextObj);
        return accumulator;
    }, []);
};

function partition(arr, callback){
    return arr.reduce(function(accumulator, nextValue){
        if(callback(nextValue)){
            accumulator[0].push(nextValue);
        } else {
            accumulator[1].push(nextValue);
        }
        return accumulator;
    }, [[], []]);
};