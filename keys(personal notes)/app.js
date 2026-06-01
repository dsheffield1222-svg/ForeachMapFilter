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

 const teaOrder= {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
 };

//  const price = teaOrder.price;
//  const quantity = teaOrder.quantity;
//  const teaName = teaOrder.teaName;

const{price, quantity, teaName, ...others} = teaOrder;
//this is called destructuring, it allows you to extract values from objects and arrays and assign them to variables in a more concise way. The variable names must match the property names in the object.  
const {origin} = teaOrder; 
const newTea = {...teaOrder};


const {brewTemp = temp = 175} = teaOrder; // this is called default values, it allows you to assign a default value to a variable if the property does not exist in the object. In this case, if brewTemp does not exist in teaOrder, it will be assigned the value of temp, and if temp does not exist, it will be assigned the value of 175.


const {teaName: tea} = teaOrder;

function checkout(tea){
    const {quantity = 1, price} = tea;//if quantity is not provided, it will default to 1. This is useful for cases where the quantity might be optional, and we want to ensure that we have a valid number to work with when calculating the total price.
    return quantity * price;
}

function getTotal({quantity: qty = 1, price}){
    return quantity * price;
};// this is called parameter destructuring, it allows you to extract values from objects passed as arguments to a function and assign them to variables in a more concise way. The variable names must match the property names in the object. In this case, when getTotal is called with an object that has quantity and price properties, those values will be extracted and used in the calculation.



checkout(teaOrder);

const students = [
    {
        name: 'tony',
        grade: 90
    },
    {
        name: 'susan',
        grade: 88
    },
    {
        name: 'anna',
        grade: 85
    }
];

const [first, ...losers] = students; // this is called array destructuring, it allows you to extract values from arrays and assign them to variables in a more concise way. The variable names can be anything, but the order must match the order of the elements in the array. In this case, first will be assigned the value of the first element in the students array, and losers will be assigned an array of the remaining elements.

const longJumpResults = ['john', 'bob', 'susan'];
const swimmingResults = ['susan', 'anna', 'tony'];
function awardMedals([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    };
};

let delicious = 'tacos';
let disgusting = 'broccoli';
// let temp = delicous;
// delicous = disgusting;
// disgusting = temp;

let both =[delicious, disgusting];
[disgusting, delicious] = both; // this is called array destructuring with swapping, it allows you to swap the values of two variables without needing a temporary variable. By creating an array with the two variables and then destructuring it in reverse order, you can effectively swap their values in a single line of code.

[delicious, disgusting] = [disgusting, delicious];// this is a more concise way to swap the values of two variables using array destructuring. By directly destructuring an array with the two variables in reverse order, you can swap their values without needing a temporary variable or an intermediate array.


// function raceResults([first,second,third,...rest]){
    
//     return {
//        first,second,third,rest
//     };

// };

//one line version

const raceResults = ([first,second,third,...rest]) => ({first,second,third, rest});

const theMap= new Map();
theMap.set(7, 'seven');
theMap.set('three', 'three string');
theMap.get(7); // this will return 'seven'
//if you want to use an empty array as a key, you must create a variable to hold the array and then use that variable as the key in the map, because each time you create an empty array, it is a new object in memory, and therefore has a different reference. So if you try to use [] as a key directly, it will not work because it will be a different object each time. By creating a variable to hold the empty array, you can ensure that you are using the same reference for the key in the map.

const emptyArr = [];
theMap.set(emptyArr, 'empty array');
theMap.get(emptyArr); // this will return 'empty array' because emptyArr is the same reference used as the key in the map.

const addition = (x,y) => x+y;
const multy = (x,y) => x*y;

const funcCalls = new Map();
funcCalls.set(addition,  1);
funcCalls.set(multy, 9);

console.log(funcCalls);

console.log(funcCalls.get(addition)); // this will return 1
console.log(funcCalls.get(multy)); // this will return 9

const bandData =[
[3,'3 doors down'],
['three','three dog Night'],
['four','four blind mice'],
['eight','eight amigos'],
[41,'sum 41']
];
const bandMap = new Map(bandData);

bandMap.set(182,'blink 182').set('twenty', 'Matchbox twenty');

console.log(bandMap.has(3)); // this will return true because the key 3 exists in the map'

// bandMap.delete(41); // this will delete the key 41 and its associated value from the map

// bandMap.clear(); // this will remove all key-value pairs from the map, leaving it empty. After calling clear(), the map will have no entries and its size will be 0.

// bandMap.keys(); // this will return an iterator**** of all the keys in the map
// [...bandMap.keys()]; // this will return an array***** of all the keys in the map

bandMap.forEach((value,key) => {
    console.log(key + '=>' + value);
});// this will iterate over the map using the forEach method, which takes a callback function that receives the value and key of each entry in the map. The callback function logs the key and value to the console in the format "key => value". This is a convenient way to access both the keys and values of a map without needing to use an iterator or convert it to an array.

for(let [key, value] of bandMap){
    console.log(key, '=', value);
};// this will iterate over the map using a for...of loop, destructuring each entry into key and value variables, and then logging them to the console in the format "key = value". This is a common way to iterate over maps in JavaScript, allowing you to access both the keys and values in a clean and readable manner.

const color = 'teal';

const obj = {};
obj.color = '#2723FF';
// obj['color'] = '#2723FF';

