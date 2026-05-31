// document.addEventListener('keypress', function(e){
//     // console.log('Key pressed');
//     console.log(e.key);
// })

document.addEventListener('keydown', function(e){
    // console.log('Key pressed');
    console.log(e.key);
})

function holler(){
    console.log('HEY YOU!');
}

const whispher = function(){
    console.log('pssst I have a secret');
}

function add(x,y){
    return x+y;
}

function subtract(x, y){
    return x-y;
}

function multiply(x, y){
    return x*y;
}

function divide(x, y){
    return x/y;
}

const mathFuncs = [add, subtract, multiply, divide];
const stink = function(){
    console.log('you stinkkyyyyyyy');
}

setTimeout(whispher,4000);
setTimeout(stink, 8000);

function doMath(a, b, mathFunc){
    return mathFunc(a,b);
}
console.log(doMath(8,3,multiply));

function doAllMath(a,b, mathFuncs){
    for(let func of mathFuncs)
        console.log(func(a,b));
}

addEventListener('click', function(){})

const colors = ['teal', 'cyan', 'teach', 'purple']

colors.forEach(console.log); // run this to see item inside, its index and the array length

colors.forEach(function(val){
    console.log(val.toUpperCase())
});

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;
prices.forEach(function(price){
    total += price;
});
console.log(total);

function forEach(arr,callback){
    for(let i = 0; i< arr.lengthl; i++){
        callback(arr[i], i);
    }
}

forEach(colors, function(color){
    console.log(color.toUpperCase(), `at the index of:`, i);
});

colors.forEach(function(color, i){
    console.log(color.toUpperCase(), `at the index of:`, i);
});

const numbers = [21,37,64,99,142];
const negatives = numbers.map(function(num){
    return num * -1;
})

const todos = [
    {
        id: 1,
        text:'walk the dog',
        priority:'high'
    },
    {
        id: 2,
        text:'walk the chickens',
        priority:'medium'
    },
    {
        id: 3,
        text:'',
        priority:'medium'
    },
    {
        id: 4,
        text:'put the fire out in the garage',
        priority:'very high'
    }
];

const todoText = todos.map(function(todo){
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));// array.from turn an array like object to an actual array so that methods like push can be used
const urls = links.map(function(a){
    return a.href;
});

function myMap(arr, callback){
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++){
        mappedArray.push(callback(arr[i]));
    }
    return mappedArray;
};

const priorityMap = myMap(todos, function(todo){
    return todo.priority;
});

 let evens = [2,4,6,8,10];
 evens.reduce(function(sum, nextValue){
        return sum + nextValue;// this is the process of reducing an array to a single value, in this case the sum of all the numbers in the array
 });

 const words = ['hello','i','love','you'];
 const result = words.reduce(function(accum, nextWord){
    console.log(accum, nextWord);
    return accum + ' ' + nextWord; 
 });

 const midtermScores = [70,88,93,94,64,62,56];

 const minScore = midtermScores.reduce(function(min, nextScore){
   return nextScore < min ? nextScore : min;
 });

function doubleValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value * 2);
    });
    return newArr;
}


function onlyEvenValues(arr){
    const newArr = [];
    arr.forEach(function(value){
        if(value % 2 === 0 && value !== 0){
            newArr.push(value);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    const newArr = [];
    arr.forEach(function(value){
        newArr.push(value[0] + value[value.length - 1]);
    })
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
    
    })
};

valTimesIndex = function(arr){
    return arr.map(function(value, idx){
        return value * idx;
    })
};


function find(arr, searchValue){
    return arr.filter(function(value){
        return value === searchValue;
    })[0];
}

function hasOddNumber(arr){
    return arr.some(function(value){
        if(value % 2 !== 0){
            return true;
        }
    })
};
// when using some functions and finding something not in an array, you must
//make the num a string and split them by each indv. value
//return val ==='0' is a boolean
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

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key[val];
    })
};

function makePerson(first, last, age ){
    return {
        first,
        last,
        age,
        isAlive: true
    };
}

// const mathstuff = {
//     x:200,
//     add: function(a,b){
//         return a + b;
//     },
//     square: function(a){
//         return a * a;
//     }
// }

const mathstuff = {
    x:200,
     add(a,b){
        return a + b;
    },
        square(a){
            return a * a;
        }
};//no arrow functions in objects, because of the this keyword. Arrow functions do not have their own this, they inherit it from the parent scope. In an object method, this refers to the object itself, but in an arrow function, this would refer to the global object (window in browsers) or undefined in strict mode. Therefore, using arrow functions as methods in objects can lead to unexpected behavior when trying to access properties of the object using this.

function MakeColor(name, hex){
    return {
        [name]: hex,
        [hex]: name
    }
};