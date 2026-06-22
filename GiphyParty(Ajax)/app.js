async function getGifsBySearch(phrase){
    const resp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${phrase}&limit=10`);
    const gifFound = document.querySelector('#gifs');
    const results = resp.data.data;
    console.log(resp.data);
    gifFound.innerHTML = '';
    for (let gif of results) {
        gifFound.innerHTML += `<img src="${gif.images.fixed_width.url}">`;
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

// https://developers.giphy.com/docs/api/endpoint/#trending used to learn how to gain access to API used 