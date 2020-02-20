// JS FILE FOR M3D - INDEX PAGE SPECIFIC
// by V.Stavrev

// CAROUSEL - AUTOSLIDESHOW
var slideIndex = 0;
showSlides();

// Dot image controls - NEEDS FIXES
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides() {
  // Declaring of variables
  var i; // creates the i variable
  var slides = document.getElementsByClassName("mySlides"); // sets the myslides classname
  var dots = document.getElementsByClassName("dot"); // sets the dot class name
  // sets the i to 0, i must be in the limits of the length, i gets increased by one each time
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  // if it gets to the last slide, go to the first one
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // Slide transition
  setTimeout(showSlides, 2500); // Change image every 5 seconds
} 