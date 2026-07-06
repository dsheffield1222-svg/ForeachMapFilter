//event handlers
import { saveRemoveIDToLocalStorage } from './dataHandlers.mjs';

let savedGifs = [];

export const handleSaveRemoveClick = (e) => {
    const savedGifs = JSON.parse(localStorage.getItem('savedGifs')) || [];

    //save gif to local storage
    const button = e.target;
    const gifId = button.id.split('-')[1]; // Extract the GIF ID from the button's ID

    if (button.classList.contains('save-button')) {
        console.log(`Saving GIF with ID: ${gifId}`);
        savedRemoveIDToLocalStorage({ id: gifId });
    } else {
        // Remove the GIF
        console.log(`Removing GIF with ID: ${gifId}`);
        saveRemoveIDToLocalStorage({ id: gifId });
    }
};