const colorsSection = document.querySelector('#colors');
colorsSection.addEventListener('click', function(e){
    document.body.style.backgroundColor = e.target.dataset.hex;
});




const prefrences = {
    fontSize: '18px',
    favColor: 'Silver'
};
localStorage.setItem('prefrences', JSON.stringify(prefrences));


const { favColor } = JSON.parse(localStorage.prefrences);
document.body.style.backgroundColor = favColor;

const color = 'teal';

const obj = {};
obj.color = '#2723FF';
obj[color] = '#2723FF';
obj[-11] = '#2723FF';

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for(let [k,v] of Object.entries(obj)){
    console.log(k,v);
};

const add = (x,y) => x+y;
const mult = (x,y) => x*y;
const square = x => x*x;
const power = (x,y) => x **y;

// const myMath = {}
// myMath.add = add;
// myMath.mult= mult;
// myMath.square = square;
// myMath.power = power;

// const myMath = {add, mult, square, power};

const myMath = {
    add(x,y) {
        return x+y;
    }
};

