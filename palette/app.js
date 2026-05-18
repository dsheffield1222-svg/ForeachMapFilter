// const colorsSection = document.querySelector('#colors');
// colorsSection.addEventListener('click', function(e){
//     document.body.style.backgroundColor = e.target.dataset.hex;
// });




// const prefrences = {
//     fontSize: '18px',
//     favColor: 'purple'
// };

// localStorage.setItem('prefrences', JSON.stringify(prefrences));


const { favColor } = JSON.parse(localStorage.prefrences);
document.body.style.backgroundColor = favColor;