//deck of cards
//1. pull a card from a new deck
let baseUrl = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1'
axios.get(baseUrl)
    .then(res => {
    let { suit, value } = res.data.cards[0];
    console.log(res.data);
    console.log(`${value} of ${suit}`);
});


//2. make a request to draw another card from the same deck
let firstCard = null;
axios.get(baseUrl)
    .then(res => {
        //capture the first card drawn from the new deck, then draw another card from the same deck
        firstCard = res.data.cards[0];

        let deckId = res.data.deck_id;
        return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    })
    .then(res => {
        //capture the second card drawn from the same deck, then log both cards
        let secondCard = res.data.cards[0];
        [firstCard, secondCard].forEach((card) => {
            console.log(`${card.value} of ${card.suit}`);
            console.log(res.data);
        })
        
    });

    //3. html creation
    let deckId = null;
    let btn = document.querySelector('button');
    let cardSection = document.querySelector('#card-section');

    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res => {
            deckId = res.data.deck_id;
        });

    btn.addEventListener('click', () => {
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then(res => {
                let cardSrc = res.data.cards[0].image;
                let angle = Math.random() * 90 - 45; // random angle between -45 and 45 degrees
                let randomX = Math.random() * 30 - 45;
                let randomY = Math.random() * 30 - 45;

                cardSection.append(Object.assign(document.createElement('img'), {
                    src: cardSrc,
                    style: `transform: rotate(${angle}deg) translate(${randomX}px, ${randomY}px);`
                }));
                // disable the button if no cards are remaining so error won't occur
                if(res.data.remaining === 0) {
                    btn.disabled = true;
                }
            });
    });