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


//slider
let slide = document.querySelectorAll('.slide'),
    
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    auto = true,
    intervalTime = 5000,
    sliderInterval;

function nextSlide(){
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        slide[0].classList.add('current');
    }

}
function prevSlide(){
    let current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        slide[slide.length -1].classList.add('current');
    }
}
next.addEventListener('click', function (){
    nextSlide();
    if(auto){
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});
prev.addEventListener('click', function (){
    prevSlide();
    if(auto){
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, intervalTime);
    }
});

if(auto){
    sliderInterval = setInterval(nextSlide, intervalTime);     
}

