
let slideIndex = 1;
showSlides(slideIndex);

// Button Container Controls
const currentSlide = (n) => {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slide-item');
    let btns = document.getElementsByClassName('btn');

    if ( n > slides.length ) {
        slideIndex = 1
    }
    if ( n < 1 ) {
        slideIndex = slides.length
    }

    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = 'none';
    }
    for ( i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace('active', '');
    }

    slides[slideIndex-1].style.display = 'flex';
    btns[slideIndex-1].className += ' active';
}

// Automatic Slide Container
let slideIndexAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
    let i;
    let slidesAuto = document.getElementsByClassName('slide-item-auto');
    let btnsAuto = document.getElementsByClassName('btn-auto');

    for ( i = 0; i < slidesAuto.length; i++) {
        slidesAuto[i].style.display = 'none';
    }
    slideIndexAuto++;
    
    if (slideIndexAuto > slidesAuto.length) {
        slideIndexAuto = 1;
    }

    for ( i = 0; i < btnsAuto.length; i++) {
        btnsAuto[i].className = btnsAuto[i].className.replace('active', '');
    }

    slidesAuto[slideIndexAuto-1].style.display = 'flex';
    btnsAuto[slideIndexAuto-1].className += ' active';
    setTimeout(showSlidesAuto, 3000);
}