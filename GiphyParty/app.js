async function getGifsBySearch(phrase){
    const resp = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&tag=${phrase}&rating=pg-13`);
    console.log(resp.data);
        const gifFound = document.querySelector('#gifs');
        const {images} = resp.data.data;
    gifFound.innerHTML += `<img src="${images.fixed_width.url}">`;
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