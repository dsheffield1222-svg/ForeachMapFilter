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