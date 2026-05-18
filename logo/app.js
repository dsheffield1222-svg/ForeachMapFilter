const form = document.querySelector('#logoform');
const brandInput = document.querySelector('input[name="brand name"]');
const colorInput = document.querySelector('input[name="color"]');
const fontsizeInput = document.querySelector('input[name="fontsize"]');
const results = document.querySelector('#results');
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Submit');
     const newLogo = makeLogo(brandInput.value, colorInput.value, fontsizeInput.value);
     results.appendChild(newLogo);
});

function makeLogo(text, color, size){
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + "px";
    return logo;
}
