//pokemon 
//1 make a request to the poke api to get names and URls for every pokemon in the database and console log the results
async function getAllPokemon() {
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1351');
    console.log(res.data.results);
}

//2 make a request to the poke api to get 3 random pokemon and console log the names and data of the selected pokemon
async function getRandomThreePokemon() {
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1351');
    let randomPokemonUrls = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * res.data.results.length);
        let url = res.data.results.splice(randomIndex, 1)[0].url;
        randomPokemonUrls.push(url);
    }
    let pokemonData = await Promise.all(randomPokemonUrls.map(url => axios.get(url)));
    pokemonData.forEach(p => console.log(p.data.name, p.data));
}
    //3 store the name of the selected pokemon, make another request to grab species url and console log the name and description found in the species url
async function getPokemonSpecies() {
    let res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1351');
    let randomPokemonUrls = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * res.data.results.length);
        let url = res.data.results.splice(randomIndex, 1)[0].url;
        randomPokemonUrls.push(url);
    }
    let pokemonData = await Promise.all(randomPokemonUrls.map(url => axios.get(url)));
    pokemonData.forEach(async p => {
        let name = p.data.name;
        let speciesRes = await axios.get(p.data.species.url);
        let descriptionObj = speciesRes.data.flavor_text_entries.find(entry => entry.language.name === 'en');
        let description = descriptionObj ? descriptionObj.flavor_text : 'No description available';
        console.log(`${name}: ${description}`);
    });
    
}
