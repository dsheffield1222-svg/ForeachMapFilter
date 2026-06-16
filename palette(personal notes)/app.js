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

function getHypotenuse(a,b){
    return Math.sqrt(a ** 2 + b **2);
}
function getArea(a,b){
    return (a * b) / 2;
}

const rightTriangle = {
    a:9,
    b:12,
    printThis: function(){
        console.log(this);
    },
    getArea: function(){
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function(){
        this.printThis();
        return Math.sqrt(this.a ** 2 + this.b **2);
    }
} ;


function Triangle(a,b){
    this.a= a;
    this.b= b;
    this.getArea =function(){
        return (this.a * this.b) / 2;
    };
    this.getHypotenuse = function(){
        return Math.sqrt(this.a ** 2 + this.b **2);
    }
}
Triangle.prototype.getArea = function(){
        return (this.a * this.b) / 2;
    };
Triangle.prototype.getHypotenuse = function(){
        this.printThis();
        return Math.sqrt(this.a ** 2 + this.b **2);
    };

const tri1= new Triangle(4,7);
const nums = [1,2,3];
console.log(tri1.getArea());
Array.prototype.push = function(val){
    console.log(`So you want to add ${val}??`);
    console.log(`Nah, I dont feel like it`);
}//able to chaange buuit in methods under prototype 

//classes help us use a same functionality without repeating the same step





class Square{
    constructor(a,b){
        

        console.log(`Huh? I'll try to make this imperfect square for you with ${a} & ${b}`);
        if (!Number.isFinite(a) || a <= 0){
            throw new Error("side a must be a positive number");
        };
            
            
        if (!Number.isFinite(b) || b <= 0){
            throw new Error("side b must be a positive number");
        }
        setTimeout(() => console.log('ClAnK CLanK CLANK'), 2000);
        setTimeout(() => console.log("ZWIP ZWIP"), 5000);
        setTimeout(() => console.log(`ahhhh finally done, you now have a square with 2 sides of ${a} & ${b} each.`), 9000);
            
        this.a = a;
        this.b = b;
    }
    getArea(){
        const {a,b} = this;
        return a *b;//using methods while deconstructuring, avoiding using this repeatedly
    }
    isBig(){
        return this.getArea()> 40;
    }
    display(){
        console.log(`Square with the sides of ${this.a} and ${this.b}`);
    }
};

const firstsqu = new Square(3,4);
// firstsqu.a = 3
// firstsqu.b = 4;
const secondsqu= new Square(9,12);
// secondsqu.a = 9;
// secondsqu.b = 12;

function whatIsThis(){
    console.log("this =", this);
}//global object
const myObj = {
    func: whatIsThis
};

const  dog = {
    name: "Green",
    breed: "Cane Corso",
    dance: function(dance){
        console.log("this is:", this);
        console.log(`ROOF ROOF, I am a ${this.breed} and I like to ${dance} `);
    },
    greet(){
        alert(`${this.name} says ROOF ROOF`);
    }
};

const rocket = {
    name: 'Rocket',
    breed: 'Himalayan'
};

const gDance = dog.dance;
// gDance.call(dog, "spin");
const boundDance = gDance.bind(dog);
const rocketDance = dog.dance.bind(rocket);
console.log(rocketDance("tango"));



function greensDance(danceType){
    return `this is ${this.name} and he likes to ${danceType}`;
}

console.log(greensDance.call(dog, 'spin in circles'));
//to use call the added parameter must be a function or equal to one

const alertBtn =document.querySelector('#btn1').addEventListener('click', dog.greet.bind(dog));

const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg){
    alert("Secret message is " + msg);
}

// btnA.addEventListener('click', function(){
//     popUp('Button A says HI');
// });

btnA.addEventListener('click', popUp.bind(null, 'Button A says HI'));