describe('Double Values', function () {
    it('Should double the values passed in the array', function (){
        expect(doubleValues([3,15,23,4,6])).toEqual([6,30,46,8,12]);
    })
});

describe('Only Even Values', function (){
    it('Should return only the even values in the array', function(){
        expect(onlyEvenValues([1,2,4,67,42,81])).toEqual([2,4,42]);
        
    })
});

describe(' Show First and Last', function(){
    it('Should return the first and last characters of each given string', function() {
        expect(showFirstAndLast(['dame', 'marty'])).toEqual(['de','my']);
    })
});

describe('Add Key and Value', function(){
    it('Should return a new key and value added for each object', function() {
        expect(addKeyAndValue([  {name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title','instructor'))
        .toEqual([{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'},{name: 'Colt', title:'instructor'}]);
})
});

describe('Vowel Count', function () {
    it('Should return the count of each vowel in the given string', function (){
        expect(vowelCount('Damond')).toEqual({a: 1, o: 1});
    })
});

describe('Double Values With Map', function() {
    it('Should double the values passed in the array', function (){
        expect(doubleValuesWithMap([1,2,3])).toEqual([2, 4, 6]);
    })
});


describe('Value Times Index', function (){
    it('Should multiply the value passed in the array to its index position', function (){
        expect(valTimesIndex([40,2,5,])).toEqual([0,2,10]);
    })
});

describe('Extract Key', function (){
    it('Should return the value of the key given in then object', function(){
        expect(extractKey([{name: 'Elie'}], 'name')).toEqual(['Elie']);
    })
});

describe('Extract Full Name', function (){
    it('Should return the value of the keys in first and last, then join them', function (){
        expect(extractFullName([{first: 'Damond', last:"Sheffield"}])).toEqual(['Damond Sheffield']);
    })
});


describe('Filter by Value', function(){
    it('Should return all objects that contains the key value passed in', function(){
        expect(filterByValue(
  [
        {first: 'Damond', last: 'Sheffield', ranAround: true},
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia", isCatOwner: true},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele", isCatOwner: true}
],
    'ranAround'
))
    .toEqual([{first: 'Damond', last: 'Sheffield', ranAround: true}]);
 })
})

describe('find', function(){
    it('Should return the first matching value passed in searchValue', function(){
        expect(find([1,2,3,4,5,6], 3)).toEqual([3]);
    })
});

describe('Find in Object', function (){
    it('Should return the first matching value in the array', function(){
        expect(findInObj([{first: 'Damond', last:"Sheffield", ranAround: true}])).toEqual([{first: 'Damond', last:"Sheffield", ranAround: true}]);
    })
})

describe('Remove Vowels', function(){
    it('Should return the string with all the vowels removed', function(){
        expect(removeVowels('Damond')).toEqual('dmnd');
    })
});

describe('Double Odd Numbers', function(){
    it('Should return an array with all the odd numbers doubled', function(){
        expect(doubleOddNumbers([1,2,3,4,5])).toEqual([2,6,10]);
    })
});

