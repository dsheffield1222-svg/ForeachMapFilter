async function getStarWarsFilms () {
    console.log('Fetching Star Wars films...');
    res = await axios.get('https://swapi.dev/api/films/');
    //these lines will only run after the axios.get() is resolved
    console.log('Star Wars films fetched successfully!');
    console.log(res);
}

const h1 = document.querySelector('h1');

function changeColor(el, color){
    return new Promise ((run, reject) => {
        setTimeout(() => {
            el.style.color = color;
        run()
        }, 1000)
    })
}

// changeColor(h1, 'teal')
// .then(() => changeColor(h1, 'orange'))
// .then(() => changeColor(h1, 'yellow'))
// .then(() => changeColor(h1, 'blue'))
// .then(() => changeColor(h1, 'green'))
// .then(() => changeColor(h1, 'red'))

async function rainbow(el) {
    await changeColor(el, 'teal')
    await changeColor(el, 'orange')
    await changeColor(el, 'yellow')
    await changeColor(el, 'blue')
    await changeColor(el, 'green')
    await changeColor(el, 'red')
    return 'All done!'
};

const deck = {
    async init() {
      let res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
       this.deckId = res.data.deck_id;
},
async shuffle() {
   let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`);
    console.log(res);
},
async drawCard() {
   let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`);
    console.log(res.data);
}
}

class Pokemon{
    constructor(id){
        this.id = id;
        this.types = [];
    }
    async getInfo(){
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        this.name = res.data.name;
        for (let type of res.data.types){
            this.types.push(type.type.name);
        }
    }
}
const pikachu = new Pokemon(25);
pikachu.getInfo();


function getThreePokemon() {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    axios.get(`${baseUrl}/1`)
        .then(({data}) => {
            console.log(`the first pokemon is ${data.name}`);
            return axios.get(`${baseUrl}/2`);
        })
        .then(({data}) => {
            console.log(`the second pokemon is ${data.name}`);
            return axios.get(`${baseUrl}/3`);
        })
        .then(({data}) => {
            console.log(`the third pokemon is ${data.name}`);
        })
}

// async function getThreePokemonasync() {
//     let baseUrl = 'https://pokeapi.co/api/v2/pokemon';
//     let {data: p1} =await axios.get(`${baseUrl}/1`);
//     console.log(p1.name);
//     let {data: p2} =await axios.get(`${baseUrl}/2`);
//     console.log(p2.name);
//     let {data: p3} =await axios.get(`${baseUrl}/3`);
//     console.log(p3.name);
// }

//parallel requests using async await

async function catchSomeOfThemParallel() {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    let p1Promise = axios.get(`${baseUrl}/1`);
    let p2Promise = axios.get(`${baseUrl}/2`);
    let p3Promise = axios.get(`${baseUrl}/3`);

    let p1 = await p1Promise;
    let p2 = await p2Promise;
    let p3 = await p3Promise;

    console.log(`the first pokemon is ${p1.data.name}`);
    console.log(`the second pokemon is ${p2.data.name}`);
    console.log(`the third pokemon is ${p3.data.name}`);
};


//using promise.all to make parallel requests
async function catchSomeOfThemParallel2() {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon';
    let pokemon = await Promise.all([
        axios.get(`${baseUrl}/1`),
        axios.get(`${baseUrl}/2`),
        axios.get(`${baseUrl}/3`)
    ]);
    console.log(`the first pokemon is ${pokemon[0].data.name}`);
    console.log(`the second pokemon is ${pokemon[1].data.name}`);
    console.log(`the third pokemon is ${pokemon[2].data.name}`);
};