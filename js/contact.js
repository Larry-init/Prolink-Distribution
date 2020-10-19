//Drop down menu
let menu = document.querySelector('.menu'),
    timesbtn = document.querySelector('.fa-bars'),
    btn = document.querySelector('.timesButton');

btn.addEventListener('click', function(){
    if(menu.classList.contains('menu')){
        menu.classList.toggle('dropDownMenu');
    }
});
timesbtn.addEventListener('click', function(){
    if(timesbtn.classList.contains('fa-bars')){
        timesbtn.classList.toggle('fa-times');
    }
});
