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

//reviews

let rPrev = document.querySelector('.rPrev'),
    rNext = document.querySelector('.rNext'),
    name = document.getElementsByClassName('name')[0],
    job = document.getElementsByClassName('job')[0],
    comment = document.getElementsByClassName('comment')[0],
    reviewImg = document.getElementsByClassName('reviewImg')[0],
    firstReview = document.querySelector('.firstReview'),
    autoRun = true,
    intTime = 5000,
    reviewSlideInt;

const myReview = [
    {
        name: 'Lorel Asray',
        job: 'Construction Expert',
        comment: 'Doing business with Prolink Distribution has not only made work easier for me but has afforded me the opportunity for quick execution of my projects.',
        img: 'images/reviewTwo.jpg',
    },
    {
        name: 'James Comey',
        job: 'CEO, Global construction Ventures',
        comment: 'No regrets seeking opinion from your team of experts. The have enabled my workers the opportunity to see beyond.',
        img: 'images/reviewThree.jpg',
    },
    {
        name: 'Joyce Makalele',
        job: 'Purchase Manager, Tolome Groups of Company',
        comment: 'Thank you for your services. You make us feel more than business partners.',
        img: 'images/reviewFour.jpg'
    }
]

let count = 0;
window.addEventListener('DOMContentLoaded', function (){
    slideReview();
})
function slideReview(){
    let objIndex = myReview[count];
    name.textContent = objIndex.name;
    job.textContent = objIndex.job;
    comment.textContent = objIndex.comment;
    reviewImg.src = objIndex.img;
}
rPrev.addEventListener('click', function(){
    count--;
    if(count < 0){
        count = (myReview.length-1);
    }
    slideReview();
    clearInterval(reviewSlideInt);
    reviewSlideInt = setInterval(nextReview, intTime);
});
rNext.addEventListener('click', function(){
    count++;
    if(count > (myReview.length-1)){
        count = 0;
    }
    slideReview();
    clearInterval(reviewSlideInt);
    reviewSlideInt = setInterval(nextReview, intTime);
});

function nextReview(){
    let objIndex = myReview[count];
    name.textContent = objIndex.name;
    job.textContent = objIndex.job;
    comment.textContent = objIndex.comment;
    reviewImg.src = objIndex.img;
    count++;
    if(count > (myReview.length-1)){
        count = 0;
    }
}
if(autoRun){
    reviewSlideInt = setInterval(nextReview, intTime);
}