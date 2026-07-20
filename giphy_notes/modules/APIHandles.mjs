//module which holds all API calls and handlers
const API_KEY = '668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

import { pullRandomGifs, randomizeOffset } from './dataHandlers.mjs';



export const fetchGifs = async (query) => {
    try {

        const offsetResp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${query}&limit=1`);
        const ranOffsetMax = offsetResp.data.pagination.total_count;
        const randomOffset = randomizeOffset(ranOffsetMax);

        const finalResp = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=668VAgLLkhdeyYraTFVd0aRUv9zv6ZPA&q=${query}&limit=10&offset=${randomOffset}`);
        const gifs = finalResp.data.data;
        const randomGifs = pullRandomGifs(gifs, 10);

        //planning for error display
        // displayGifs(randomGifs);
       return { success: true, gifs, error: null };
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        return { success: false, gifs: [], error: error.message };
    };
};

/**
 * Get GIFs by IDs
 * @param {Array} ids -array of GIF IDs to fetch
 * @returns {Promise<Object>} - The result object containing success status, GIFs data, and error message (if any)
 */

export const getGifsByIds = async (ids) => {
    try {
        const idsString = ids.join(',');
        const url = `${BASE_URL}?api_key=${API_KEY}&ids=${idsString}`;
        const response = await axios.get(url);
        return { success: true, gifs: response.data.data, error: null };
    } catch (error) {
        console.error('Error fetching GIFs by IDs:', error);
        return { success: false, gifs: [], error: error.message };
    }
};
