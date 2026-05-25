
describe('Has Odd Number', function(){
    it('Should return true if the array contains at least one odd number', function(){
        expect(hasOddNumber([1,2,4,6])).toEqual(true);
    })
});

describe('Has A Zero', function(){
    it('Should return true if the number contains at least one zero', function(){
        expect(hasAZero(123)).toEqual(false);
    })
});

describe('Has Only Odd Numbers', function(){
    it('Should return true if every value in the array is an odd number', function(){
        expect(hasOnlyOddNumbers([1,3,5,7])).toEqual(true);
    })
});

describe('Has No Duplicates', function(){
    it('Should return true if there are no duplicate values in the array', function(){
        expect(hasNoDuplicates([1,2,3,4])).toEqual(true);
    })
});

describe('Has Certain Key', function(){
    it('Should return true if every object in the array contains the key', function(){
        expect(hasCertainKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')).toEqual(true);
    })
});

describe('Has Certain Value', function(){
    it('Should return true if every object in the array contains the value for the key', function(){
        expect(hasCertainValue([{name: 'Elie', isInstructor: true}, {name: 'Tim', isInstructor: true}, {name: 'Matt', isInstructor: true}, {name: 'Colt', isInstructor: true}], 'isInstructor', true)).toEqual(true);
    })
});