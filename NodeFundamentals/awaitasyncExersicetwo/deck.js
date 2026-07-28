//deck of cards
//1. pull a card from a new deck and console log the value and suit of the card
async function drawCard() {
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    let { suit, value } = res.data.cards[0];
    console.log(`${value} of ${suit}`);
}
//2. make a request to draw another card from the same deck and console log the value and suit of both cards
async function drawTwoCards() {
    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    let firstCard = res.data.cards[0];
    let deckId = res.data.deck_id;
    res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
    let secondCard = res.data.cards[0];
    [firstCard, secondCard].forEach((card) => {
        let { suit, value } = card;
        console.log(`${value} of ${suit}`);
    });
}
//3 html creation
async function drawCardHtml() {
    let btn = document.querySelector('button');
    let cardSection = document.querySelector('#card-section');

    let res = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1');
    let deckId = res.data.deck_id;

    btn.addEventListener('click', async function () {
         let res = await axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        let cardImg = document.createElement('img');
        cardImg.src = res.data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 25 - 10;
        let randomY = Math.random() * 25 - 10;
        cardSection.append(Object.assign(document.createElement('img'), {
                    src: cardImg.src,
                    style: `transform: rotate(${angle}deg) translate(${randomX}px, ${randomY}px);`
                }));
       
    });
    if (res.data.remaining === 0) {
        btn.disabled = true;
    }
}

drawCardHtml();


