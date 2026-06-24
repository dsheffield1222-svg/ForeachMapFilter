// lets try to randomize the gifs we get back from the search

const randomizeOffset = (maxOffset) =>{
    return Math.floor(Math.random() * maxOffset)
};

async function getGifsBySearch(phrase){
    //first request to access pagination count
    const resp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${phrase}&limit=1`);
    const randOffsetMax = (resp.data.pagination.total_count);
    const randomOffset = randomizeOffset(randOffsetMax);
    const gifFound = document.querySelector('#gifs');
   

    // we need an offset and a way to randomize the selection.
    const finalResp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${phrase}&limit=10&offset=${randomOffset}`);

     const results = finalResp.data.data;


    for (let gif of results) {
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
