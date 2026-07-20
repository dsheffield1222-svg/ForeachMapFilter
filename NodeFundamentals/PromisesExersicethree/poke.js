//first assignment api website not working properly
//pokemon
//1. get every pokemon from the API
let baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=1351';
axios.get(baseUrl)
    .then(res => {
        console.log(res.data);
    });

    //2. pick 3 random pokemon from the list to display
    axios.get(baseUrl)
    .then(data => {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.data.results.length);
            let url = data.data.results.splice(randomIndex, 1)[0].url;
            randomPokemonUrls.push(url);
        }
        return Promise.all(randomPokemonUrls.map(url => axios.get(url)));
    })
    .then(pokemon => {
        pokemon.forEach(p => console.log(p));
    });

    //3. store the name of the selected pokemon, make another request to grab species URL
    let names = null;
    axios.get(baseUrl)
    .then(data => {
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex = Math.floor(Math.random() * data.data.results.length);
            let url = data.data.results.splice(randomIndex, 1)[0].url;
            randomPokemonUrls.push(url);
        }
        return Promise.all(randomPokemonUrls.map(url => axios.get(url)));
    })
    .then(pokemon => {
        names = pokemon.map(p => p.data.name);
        return Promise.all(pokemon.map(p => axios.get(p.data.species.url)));
    })
    .then(pokemon => {
        let descriptions =  pokemon.map(d => {
            let descriptionObj = d.data.flavor_text_entries.find(entry => entry.language.name === 'en');
            return descriptionObj ? descriptionObj.flavor_text : 'No description available';
        });
        descriptions.forEach((desc, index) => {
            console.log(`${names[index]}: ${desc}`);
        });
    });