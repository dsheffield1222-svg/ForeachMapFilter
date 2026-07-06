import { handleSaveRemoveClick } from './eventHandlers.mjs';

const resultsContainer = document.querySelector('#gifs');


export const createSaveRemoveBtn = (gifId, savedGifs) => {
    const button = document.createElement('button');
    button.classList.add('save-remove-btn');
    button.id = "gif-" + gifId; // Assign a unique ID to the button

    if (savedGifs.includes(gifId)) {
        button.textContent = 'Remove';
        button.classList.add('remove-button');
    } else {
        button.textContent = 'Save';
        button.classList.add('save-button');
    }

    button.addEventListener('click', (e) => handleSaveRemoveClick(e));

    return button;
};

 export const displayGifs = (gifs) => {
    resultsContainer.innerHTML = '';

    gifs.forEach((gif) => {
        const gifElement = document.createElement('div');
        gifElement.className = 'gif';
        gifElement.innerHTML = `<img src="${gif.images.fixed_height.url}" alt="${gif.title}">`;

        console.log('gif', gif);
        const controlButton = createSaveRemoveBtn(gif.id, []);
        gifElement.appendChild(controlButton);
        resultsContainer.appendChild(gifElement);
    });
};

export const clearBtn = document.querySelector('#clear');
if (clearBtn) {
    clearBtn.addEventListener('click', () => {
        resultsContainer.innerHTML = '';
        input.value = '';
    });
};

