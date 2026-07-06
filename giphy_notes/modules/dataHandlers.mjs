//any data haandlers
 export const randomizeOffset = (maxOffset) => {
    return Math.floor(Math.random() * maxOffset);
};

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