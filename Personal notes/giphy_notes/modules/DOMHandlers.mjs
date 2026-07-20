import { handleSaveRemoveClick } from './eventHandlers.mjs';
import { getGifIdsFromLocalStorage } from './stateHandlers.mjs';
//searchform
import { appState } from './AppState.mjs';

const searchForm = document.getElementById('searchform')
const resultsContainer = document.querySelector('#gifs');
const input = document.querySelector('#search-input');

/**
 * Toggle the GIF control's button text and class based on its saved state
 * @param {HTMLButtonElement} button - The button element to update
 * @param {boolean} isSaved - Whether the GIF is saved or not
 * @returns {Void}
 */
export const toggleSaveRemoveButton = (button, isSaved) => {
    if (isSaved) {
        button.textContent = 'Remove';
        button.classList.remove('save-button');
        button.classList.add('remove-button');
    } else {
        button.textContent = 'Save';
        button.classList.remove('remove-button');
        button.classList.add('save-button');
    }
};

/**
 * Create a button to save/remove a GIF from the favorites
 * @param {String} gifId - The ID of the GIF
 * @param {*} savedGifs - The created button element
 * @returns 
 */
export const createSaveRemoveBtn = (gifId, savedGifs) => {
    const button = document.createElement('button');
    button.classList.add('save-remove-ctl');
    button.id = "gif-" + gifId; // Assign a unique ID to the button

    if (savedGifs.includes(gifId)) {
        button.textContent = 'Remove';
        button.classList.add('remove-button');
    } else {
        button.textContent = 'Save';
        button.classList.add('save-button');
    }


    button.addEventListener('click', handleSaveRemoveClick);

    return button;
};

/**
 * Render the fetched 10 random GIFS in the container
 * @param {Array} gifs - The array of GIFS to display
 * @return {void}
 */
 export const displayGifs = (gifs) => {
    resultsContainer.innerHTML = '';
    const savedGifIds = getGifIdsFromLocalStorage();
    gifs.forEach((gif) => {
        const gifElement = document.createElement('div');
        gifElement.id = "container-" + gif.id;
        gifElement.className = 'gif';
        gifElement.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;

        console.log('gif', gif);
        const controlButton = createSaveRemoveBtn(gif.id, savedGifIds);
        gifElement.appendChild(controlButton);
        resultsContainer.appendChild(gifElement);
    });
};

/**
 * Clears the rendered GIFS from inside the container
 */
export const clearBtn = document.querySelector('#clear');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = '';
        input.value = '';
    });
};

//display saved functionaltity

export const cleanupSearchGIFSDom = () => {
    //clear results
    resultsContainer.innerHTML = "";

    //clear input
    input.value = "";

    //hide the search form
    searchForm.style.display = 'none';
};

export const cleanupSavedGIFSDom = () => {
    //clear saved GIFS
    resultsContainer.innerHTML= '';
    //clear search input
    input.value= '';
    //change the search form back to flex
    searchForm.display = 'flex';
}