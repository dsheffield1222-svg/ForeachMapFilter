//api handlers
import { fetchGifs } from './modules/APIHandles.mjs';
import { appState } from './modules/AppState.mjs';
//data handlers
import { pullRandomGifs } from './modules/dataHandlers.mjs';
//dom handlers
import {  displayGifs } from './modules/DOMHandlers.mjs';
// event listeners
import { handleGetSavedGifsClick, handleGoToSearch } from './modules/eventHandlers.mjs';

const form = document.querySelector('#searchform');
const input = document.querySelector('#search-input');
const resultsContainer = document.querySelector('#gifs');


const getSavedGifsBtn = document.querySelector('#go-to-saved');
const getSearchGifsBtn = document.querySelector('#go-to-search');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (query) {
        const { success, gifs, error } = await fetchGifs(query);
        if (success) {
            const randomizedGifs = pullRandomGifs(gifs, 10);
             displayGifs(randomizedGifs);
        } else {
            resultsContainer.innerHTML = `<p>Error: ${error}</p>`;
        }
    } else {
        resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
    }
    });

getSavedGifsBtn.addEventListener('click', handleGetSavedGifsClick);
getSearchGifsBtn.addEventListener('click', handleGoToSearch);















