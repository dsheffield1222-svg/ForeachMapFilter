describe("extractValue", function(){
    it('Should return an array of the values of the key passed in', function(){
        expect(extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt']);
    })
});

describe('vowelCount', function(){
    it('Should return an object with the keys as the vowel and the values as the number of times the vowel appears in the string', function(){
        expect(vowelCount('Elie')).toEqual({e: 2, i: 1});
    })
});

describe('addKeyAndValue', function(){
    it('Should return the array of objects passed in with each object including the new key and value passed in', function(){
        expect(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')).toEqual([{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'},{name: 'Colt', title:'instructor'}]);
    })
});

describe('partition', function(){
    it('Should return an array with two subarrays inside. The function provided should return true for values in the first subarray, and false for values in the second subarray', function(){
        function isEven(val){
            return val % 2 === 0;
        }
        expect(partition([1,2,3,4,5,6], isEven)).toEqual([[2,4,6], [1,3,5]]);
    })  
});