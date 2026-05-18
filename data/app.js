const ul = document.querySelector('#cars');
ul.addEventListener('click', function(e){
    console.log(e.target.getAttribute('data-id'));// different ways to access stored information needed for developer
    console.log(e.target.dataset);
    console.log(e.target.dataset.year);
    e.target.dataset.sold = 'true';
});