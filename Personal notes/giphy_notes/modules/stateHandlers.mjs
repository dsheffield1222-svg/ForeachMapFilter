//Anything saved to local strorage etc


/**
 * 
 * @param {Object} gif - The GIF object to save or remove from local storage.
 * @param {string} gif.id - The unique ID of the GIF.
 * @returns {void} 
 */
export const saveRemoveIDToLocalStorage = ({ id }) => {
    //check if if is aslready in local storage
    const savedGifsIDs = JSON.parse(localStorage.getItem('savedGifs')) || [];

    if (savedGifsIDs.includes(id)) {
        console.log(`GIF with ID ${id} is already saved, removing it from local storage`);
        // If the GIF ID is already saved, remove it from the array and update local storage
        const filteredGifs = savedGifsIDs.filter(savedId => savedId !== id);
        localStorage.setItem('savedGifs', JSON.stringify(filteredGifs));
    } else {
        console.log(`Saving GIF with ID ${id}`);
        savedGifsIDs.push(id);
    localStorage.setItem('savedGifs', JSON.stringify(savedGifsIDs));
    }
    
};

export const getGifIdsFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('savedGifs')) || [];
};