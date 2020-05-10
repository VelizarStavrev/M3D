// JS FILE FOR M3D - INDEX PAGE SPECIFIC
// by V.Stavrev

// CAROUSEL - AUTOSLIDESHOW
let slideIndex = 0;
let myTimeout;
showSlides();

// Dot image controls - NEEDS FIXES
function currentSlide(n) {
  clearTimeout(myTimeout);
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  // Declaring of variables
  let i; // creates the i variable
  let slides = document.getElementsByClassName("mySlides"); // sets the myslides classname
  let dots = document.getElementsByClassName("dot"); // sets the dot class name
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
  myTimeout = setTimeout(showSlides, 5000); // Change image every 5 seconds
} 