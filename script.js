// JS FILE FOR M3D - EVERY PAGE SPECIFIC
// by V.Stavrev

// SCROLL TO TOP BUTTON
var topbutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// NAVBAR
function navBar() {
  var navMenu = document.getElementById("navMenu").style.display;
  if (navMenu === "block") {
      document.getElementById("navMenu").style.display = "none";
      document.getElementById("hamburgericon").style.backgroundColor = "rgb(50, 50, 50)";
  } 
  else {
      document.getElementById("navMenu").style.display = "block";
      document.getElementById("hamburgericon").style.backgroundColor = "rgb(100, 100, 100)";
  }
}

// CERTIFICATE MODAL
// Variables
var screenWidth = screen.width;

// Key pressed in the modal
function keyEvents(event) {
  switch (event.keyCode) {
      case 27:
          closeModal();
          closeVideo();
          closeInfo();
          closeImage();
          break;

      case 37:
          plusImages(-1);
          break;

      case 39:
        plusImages(1);
          break;
   }
}

function openModal() {
  document.getElementById("modalwindow").style.display = "grid";
  // close on clicking with the mouse somewhere
  document.getElementById("modalclose").addEventListener("click", closeModal);
  // close on clicking the escape key
  document.addEventListener('keydown', keyEvents); 

  if (screenWidth <= 650) {
    document.getElementById("certificateimg").style.cursor = "auto";
  }
}

function closeModal() {
  document.getElementById("modalwindow").style.display = "none";

  if (screenWidth >= 651) {
  document.getElementById("certificateimg").style.cursor = "zoom-in";
  document.getElementById("certificateimg").style.height = "85vh";
  }
}

function zoomIn() {
  var zoom = document.getElementById("certificateimg").style.cursor;

  if (screenWidth <= 650) {
    document.getElementById("certificateimg").style.cursor = "auto";
  } else {
    if (zoom === "zoom-out") {
      document.getElementById("certificateimg").style.cursor = "zoom-in";
      document.getElementById("certificateimg").style.height = "85vh";
    }
    else {
      document.getElementById("certificateimg").style.cursor = "zoom-out";
      document.getElementById("certificateimg").style.height = "125vh";
    }
  }
}
