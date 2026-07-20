const form = document.querySelector('#monkeyform');
form,addEventListener('submit', function(e){
    e.preventDefault();//n ignores normal behaior in form action
    alert('Submitted Form');
})

document.querySelector('a').addEventListener('click', function(e){
    e.preventDefault();
    console.log("HAHAHAHAHAHAHAH NO GOOGLE");
});