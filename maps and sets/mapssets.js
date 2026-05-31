new Set([1,1,2,2,3,4]);
// this will return a set with the values 1, 2, 3, and 4. The duplicates have been removed.

[...new Set("referee")].join("");
// this will return the string "ref". The duplicates have been removed, and the remaining characters have been joined together.

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// this will create a map with two entries. The keys are two different arrays that happen to have the same contents. The values are true and false.

function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
};
// this function will return true if there are any duplicates in the array, and false if there are not. It does this by creating a set from the array, which removes duplicates, and then comparing the size of the set to the length of the original array.

function vowelCount(str) {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerChar = char.toLowerCase();
        if ("aeiou".includes(lowerChar)) {
            vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1 || 1);
        }
    }
    return vowelMap;
};
// this function will return a map where the keys are vowels and the values are the number of times that vowel appears in the string. It iterates through each character in the string, checks if it's a vowel, and updates the count in the map accordingly.