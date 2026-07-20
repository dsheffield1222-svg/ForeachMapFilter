//any data haandlers
/**
 * Get a random offset value for pagination.
 * @param {number} maxOffset - The maximum offset value.
 * @returns {number} A random offset value between 0 and maxOffset.
 */
 
 export const randomizeOffset = (maxOffset) => {
    return Math.floor(Math.random() * maxOffset);
};

/**
 * pull random gifs fom the provided array
 * @param {Array} gifs - The array of GIFs to pull returned from GIPHY API
 * @param {Number} count - The number of random GIFS to pull default 10
 * @returns {Array} - An array of random GIFs
 */

export const pullRandomGifs = (gifs, count = 10) => {
    const randomGifs = [];
    while (randomGifs.length < count && gifs.length > 0) {
        const randomIndex = Math.floor(Math.random() * gifs.length);

        if (!randomGifs.includes(gifs[randomIndex])) {
            randomGifs.push(gifs[randomIndex]);
        }
    }
    return randomGifs;
};