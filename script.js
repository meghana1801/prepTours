// -----Javascript for Toggle Menu --
var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right = "0px";
}
function hideMenu(){
    navLinks.style.right = "-200px";
}

//FOR TOGGLE ONLY BUT 
// let menu = document.querySelector('#menu-btn');
// let navbar = document.querySelector('.header .nav');

// menu.onclick = () =>{
//    menu.classList.toggle('fa-times');
//    navbar.classList.toggle('active');
// };

// window.onscroll = () =>{
//    menu.classList.remove('fa-times');
//    navbar.classList.remove('active');
// };

 // Javascript for sliding in home page
 var slide_index = 1;  
 displaySlides(slide_index);  
 function nextSlide(n) {  
     displaySlides(slide_index += n);  
 }  
 function currentSlide(n) {  
     displaySlides(slide_index = n);  
 }  
 function displaySlides(n) {  
     var i;  
     var slides = document.getElementsByClassName("showSlide");  
     if (n > slides.length) { slide_index = 1 }  
     if (n < 1) { slide_index = slides.length }  
     for (i = 0; i < slides.length; i++) {  
         slides[i].style.display = "none";  
     }  
     slides[slide_index - 1].style.display = "block";  
 } 
//  let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }
// 
// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }


// var swiper = new Swiper(".reviews-slider", {
//     grabCursor:true,
//     loop:true,
//     autoHeight:true,
//     spaceBetween: 20,
//     breakpoints: {
//        0: {
//          slidesPerView: 1,
//        },
//        700: {
//          slidesPerView: 2,
//        },
//        1000: {
//          slidesPerView: 3,
//        },
//     },
//  });
 