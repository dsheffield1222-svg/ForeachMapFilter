let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // this will print 8
console.log(yearNeptuneDiscovered); // this will print 1846





let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ? this will print {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}





function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? this will print "Your name is Alejandro and you like purple"
getUserData({firstName: "Melissa"}) // ? this will print "Your name is Melissa and you like green"
getUserData({}) // ? this will print "Your name is undefined and you like green"




let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // this will print "Maya"
console.log(second); // this will print "Marisa"
console.log(third); // this will print "Chi"






let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // this will print "Raindrops on roses"
console.log(whiskers); // will print "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // this will print ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]






let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // this will print [10, 30, 20]




var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b;
/* Write an ES2015 Version */


var {numbers: {a, b}} = obj;

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
/* Write an ES2015 Version */

[arr[0], arr[1]] = [arr[1], arr[0]];


function raceResults([first,second,third,...rest]){
    
    return {
        first,second,third,...rest
    };

}

const raceResults = ([first,second,third,...rest]) => ({first,second,third, rest});