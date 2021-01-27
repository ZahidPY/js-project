const slides = document.getElementsByClassName("carousel-item");
const slideNo = document.getElementById("slide-no");
let slidePosition = 0;

const totalSlides = slides.length;
document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide);
document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide);
slideNo.textContent = slidePosition+1;
function hideAllSlides(){
    for(let slide of slides){
 
        slide.classList.remove('carousel-item-visible');
        slide.classList.add("carousel-item-hidden");
        

    }
}

    
let timer = setInterval(function(){
    moveToNextSlide();
        
     },5000);




function moveToNextSlide(){
    hideAllSlides();
    if(slidePosition === totalSlides-1){
        slidePosition = 0;
    }else{
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    slideNo.textContent = slidePosition+1;



}

function moveToPrevSlide(){

    hideAllSlides();
    if(slidePosition === 0 ){
        slidePosition = totalSlides - 1;
    }else{
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");

    slideNo.textContent = slidePosition+1;

}
