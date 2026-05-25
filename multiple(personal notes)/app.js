// const removeButtons = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');
// for(let btn of removeButtons){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();// if you do NOT target the parent element, you will only remove the button
//     })
// };


//  form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newFriend = document.createElement('li');
//     const removeButton = document.createElement('button');
//     removeButton.innerText = 'UnFriend';
//     removeButton.addEventListener('click' function(e){
//         e.target.parentElement.remove();
//     });// when adding elements that arent apart of original html, you must add an event listnner for the new target
//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeButton);
//     friendList.appendChild(newFriend);
//     input.value = '';


//  })
 

//event delegation
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

friendList.addEventListener('click', function(e){//targeting the parent at load, listen for events , then do logic
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
} else if(e.target.tagName === 'LI'){
    e.target.classList.add('best-friend');
    const heart = document.createElement('span');
    heart.innerHTML = '&hearts;';// not original html text, usus a code so inner html is needed
    e.target.prepend(heart);
};
})

 form.addEventListener('submit', function(e){
    e.preventDefault();
    const newFriend = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'UnFriend';
    
    newFriend.innerText = input.value;
    newFriend.appendChild(removeButton);
    friendList.appendChild(newFriend);
    input.value = '';


 })
 