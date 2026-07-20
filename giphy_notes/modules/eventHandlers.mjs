//event handlers
import { getGifIdsFromLocalStorage, saveRemoveIDToLocalStorage,} from './stateHandlers.mjs';

import { displayGifs, toggleSaveRemoveButton } from './DOMHandlers.mjs';

import { getGifsByIds } from './APIHandles.mjs';

import { cleanupSearchGIFSDom, cleanupSavedGIFSDom } from './DOMHandlers.mjs';

import { appState } from './AppState.mjs';

let savedGifs = [];

export const handleSaveRemoveClick = (e) => {
    // const savedGifs = JSON.parse(localStorage.getItem('savedGifs')) || [];

    //save gif to local storage
    const button = e.target;
    const gifId = button.id.split('-')[1]; // Extract the GIF ID from the button's ID
    
    if (button.classList.contains('save-button')) {
        // Save the GIF

        // edit the button DOM
        toggleSaveRemoveButton(button, true);
        saveRemoveIDToLocalStorage({ id: gifId });
    } else {
        // Remove the GIF from DOM
        if (appState.currentView === 'saved' ){
        
            const gifElement = document.getElementById('container-' + gifId);
        if (gifElement) {
            gifElement.remove();
        }
        //updated local storage after removing
        saveRemoveIDToLocalStorage({ id: gifId });
        return;
    }
    
        // edit the button DOM
        toggleSaveRemoveButton(button, false);
        saveRemoveIDToLocalStorage({ id: gifId });
        
    }
};

export const handleGetSavedGifsClick = async (e) => {
    const gifIds = getGifIdsFromLocalStorage();

    appState.currentView = 'saved';
    //cleanup searched GIFs
    cleanupSearchGIFSDom();


    if (gifIds.length === 0) {
        console.log('No saved GIFs found in local storage.');
        return;
    }
    console.log('fetching saved GIFs with IDs:', gifIds);
    const { success, gifs, error } = await getGifsByIds(gifIds);
    
    if (success) {
        console.log('Fetched saved GIFs:', gifs);
        //display the saved gis in here
        displayGifs(gifs);
    } else {
        console.error('Error fetching saved GIFs:', error);
    }
}

export const handleGoToSearch = () => {
    appState.currentView = 'search';
    cleanupSavedGIFSDom();
    console.log('Should redraw search GIFs page')
};