const filterOdds =  odds => odds.filter(num => num % 2 !== 0);


 const findMin = nums => Math.min(...nums);


const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

function removeRandom(items) {
  const randomIdx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIdx), ...items.slice(randomIdx + 1)];
}

function extend(array1, array2) {
  return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

function removeKey(obj, key) {
  const { [key]: _, ...newObj } = obj;
  return newObj;
}

function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
};

function update(obj, key, val) {
  return { ...obj, [key]: val };
};