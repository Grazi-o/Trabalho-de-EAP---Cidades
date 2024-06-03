
let count = 1;
let time = 7000;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, time)

function nextImage(){
    count++;
    if (count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}







//SECRETARIAS
let currentIndex = 0;
const itemsPerPage = 5;
const totalItems = 14;
const carousel = document.querySelector('.carousel');

function moveCarousel(direction) {
    currentIndex += direction * itemsPerPage;
    
    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex >= totalItems) {
        currentIndex = totalItems - itemsPerPage;
    }

    const offset = -(currentIndex * (100 / itemsPerPage));
    carousel.style.transform = `translateX(${offset}%)`;
}















