// lets try to randomize the gifs we get back from the search

const randomizeOffset = (maxOffset) =>{
    return Math.floor(Math.random() * maxOffset)
};

const pullRandomGifs = (gifs, count = 10) => {
    //a random set to return
    //while randmo set is less than count, push a random gif to the array
    const randomGifs = [];
    while(randomGifs.length < count){
        const randomIndex = Math.floor(Math.random() * gifs.length);
        //check if the gif is already in the new array
        if(!randomGifs.includes(gifs[randomIndex])){
            randomGifs.push(gifs[randomIndex]);
        }
    }

    return randomGifs;
};


async function getGifsBySearch(phrase){
    //first request to access pagination count
    const offsetResp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${phrase}&limit=1`);
    const randOffsetMax = (offsetResp.data.pagination.total_count);
    const randomOffset = randomizeOffset(randOffsetMax);
    const gifFound = document.querySelector('#gifs');
   

    // we need an offset and a way to randomize the selection.
    const finalResp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${phrase}&limit=10&offset=${randomOffset}`);

    
    const results = finalResp.data.data;
    const randomGifs = pullRandomGifs(results, 10);
    for (let gif of randomGifs) {
        gifFound.innerHTML += `<img src="${gif.images.fixed_height.url}"> `;
    }
};

const form = document.querySelector('#searchform');
const input = document.querySelector('#search');
form.addEventListener('submit', function(e){
    e.preventDefault();
   getGifsBySearch(input.value);
    input.value = '';
});

const clearGifs = document.querySelector('#clear');
clearGifs.addEventListener('click', function(e){
    const gifFound = document.querySelector('#gifs');
    e.preventDefault();
    gifFound.innerHTML = ``;
});



