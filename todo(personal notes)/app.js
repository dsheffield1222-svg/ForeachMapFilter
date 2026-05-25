const toggleSwitch = document.querySelector('input[type="checkbox"]'); 
if(localStorage.getItem('darkModeEnabled')){
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}// if the setting in local starage is true, this function will load the page with the correct class list 'dark'.


toggleSwitch.addEventListener('click', function(e){
    const { checked } = toggleSwitch;
    if(checked){
        localStorage.setItem('darkModeEnabled',true);
    }else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark': '';
    
})//dark mode

const form = document.querySelector('#addEvent');
const input = document.querySelector('#event');
const list  = document.querySelector('#eventlist');

function renderTodo(value) {
    const newEvent = document.createElement('li');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'X';

    newEvent.textContent = value;
    newEvent.appendChild(removeButton);
    list.appendChild(newEvent);
}

function loadTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '{}');
    todos.append(renderTodo);
}

list.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
    } else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('done');
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;

    renderTodo(value);

    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
    input.value = '';
})

loadTodos();

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   const value = input.value;
//   if (!value) return;

//   const todos = JSON.parse(localStorage.getItem('todos') || '[]');
//   todos.push(value);
//   localStorage.setItem('todos', JSON.stringify(todos));

//   const newEvent = document.createElement('li');
//   const removeButton = document.createElement('button');
//   removeButton.innerText = 'X';
//   newEvent.textContent = value;
//   newEvent.appendChild(removeButton);
//   list.appendChild(newEvent);

//   input.value = '';
// });
