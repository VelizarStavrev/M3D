// JS FILE FOR M3D - PODUCT PAGE SPECIFIC
// by V.Stavrev

// PRODUCTS
// IMAGE WINDOW
function closeImage() {
    document.getElementById("imagewindow").style.display = "none";
    document.getElementById("sixthimage").classList.add('myImages');
    document.getElementById("sixthdot").classList.add('imagedot');
    currentImage(1);
}
  
function imageWindow(number) {
    document.getElementById("imagewindow").style.display = "grid";
    // close on clicking with the mouse somewhere
    document.getElementById("imageclose").addEventListener("click", closeImage);
    // close on clicking the escape key
    document.addEventListener('keydown', keyEvents);

    switch (number) {
        case 1:
            document.getElementById("productimg1").src = "../images/products/asc-03k/ASC-03K_image-1.png";
            document.getElementById("productimg2").src = "../images/products/asc-03k/ASC-03K_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/asc-03k/ASC-03K_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/asc-03k/ASC-03K_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/asc-03k/ASC-03K_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/asc-03k/ASC-03K_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "ASC-03K";
            document.getElementById("imagetext2").innerHTML = "ASC-03K";
            document.getElementById("imagetext3").innerHTML = "ASC-03K";
            document.getElementById("imagetext4").innerHTML = "ASC-03K";
            document.getElementById("imagetext5").innerHTML = "ASC-03K";
            document.getElementById("imagetext6").innerHTML = "ASC-03K";
            break;

        case 2:
            document.getElementById("productimg1").src = "../images/products/ayc-01m/AYC-01_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/ayc-01m/AYC-01_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/ayc-01m/AYC-01_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/ayc-01m/AYC-01_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/ayc-01m/AYC-01_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/ayc-01m/AYC-01_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "AYC-01M";
            document.getElementById("imagetext2").innerHTML = "AYC-01M";
            document.getElementById("imagetext3").innerHTML = "AYC-01M";
            document.getElementById("imagetext4").innerHTML = "AYC-01M";
            document.getElementById("imagetext5").innerHTML = "AYC-01M";
            document.getElementById("imagetext6").innerHTML = "AYC-01M";
            break;

        case 3:
            document.getElementById("productimg1").src = "../images/products/ucm-05s/UCM-05_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/ucm-05s/UCM-05_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/ucm-05s/UCM-05_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/ucm-05s/UCM-05_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/ucm-05s/UCM-05_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/ucm-05s/UCM-05_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "UCM-05S";
            document.getElementById("imagetext2").innerHTML = "UCM-05S";
            document.getElementById("imagetext3").innerHTML = "UCM-05S";
            document.getElementById("imagetext4").innerHTML = "UCM-05S";
            document.getElementById("imagetext5").innerHTML = "UCM-05S";
            document.getElementById("imagetext6").innerHTML = "UCM-05S";
            break;

        case 4:
            document.getElementById("productimg1").src = "../images/products/ctm-02d/CTM-02_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/ctm-02d/CTM-02_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/ctm-02d/CTM-02_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/ctm-02d/CTM-02_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/ctm-02d/CTM-02_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/ctm-02d/CTM-02_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "CTM-02D";
            document.getElementById("imagetext2").innerHTML = "CTM-02D";
            document.getElementById("imagetext3").innerHTML = "CTM-02D";
            document.getElementById("imagetext4").innerHTML = "CTM-02D";
            document.getElementById("imagetext5").innerHTML = "CTM-02D";
            document.getElementById("imagetext6").innerHTML = "CTM-02D";
            break;

        case 5:
            document.getElementById("productimg1").src = "../images/products/hcm-02/HCM-02_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/hcm-02/HCM-02_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/hcm-02/HCM-02_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/hcm-02/HCM-02_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/hcm-02/HCM-02_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/hcm-02/HCM-02_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "HCM-02";
            document.getElementById("imagetext2").innerHTML = "HCM-02";
            document.getElementById("imagetext3").innerHTML = "HCM-02";
            document.getElementById("imagetext4").innerHTML = "HCM-02";
            document.getElementById("imagetext5").innerHTML = "HCM-02";
            document.getElementById("imagetext6").innerHTML = "HCM-02";
            break;

        case 6:
            document.getElementById("productimg1").src = "../images/products/apmv-02d/APMV-02D_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/apmv-02d/APMV-02D_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/apmv-02d/APMV-02D_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/apmv-02d/APMV-02D_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/apmv-02d/APMV-02D_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/apmv-02d/APMV-02D_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "APMV-02D";
            document.getElementById("imagetext2").innerHTML = "APMV-02D";
            document.getElementById("imagetext3").innerHTML = "APMV-02D";
            document.getElementById("imagetext4").innerHTML = "APMV-02D";
            document.getElementById("imagetext5").innerHTML = "APMV-02D";
            document.getElementById("imagetext6").innerHTML = "APMV-02D";
            break;

        case 7:
            document.getElementById("sixthimage").classList.add('myImages');
            document.getElementById("sixthdot").classList.add('imagedot');
            document.getElementById("productimg1").src = "../images/products/cfi-04s/CFI-04_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/cfi-04s/CFI-04_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/cfi-04s/CFI-04_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/cfi-04s/CFI-04_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/cfi-04s/CFI-04_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/cfi-04s/CFI-04_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "CFI-04S";
            document.getElementById("imagetext2").innerHTML = "CFI-04S";
            document.getElementById("imagetext3").innerHTML = "CFI-04S";
            document.getElementById("imagetext4").innerHTML = "CFI-04S";
            document.getElementById("imagetext5").innerHTML = "CFI-04S";
            document.getElementById("imagetext6").innerHTML = "CFI-04S";
            break;

        case 8:
            document.getElementById("sixthimage").classList.remove('myImages');
            document.getElementById("sixthdot").classList.remove('imagedot');
            document.getElementById("productimg1").src = "../images/products/ctl-311s/CTL-311_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/ctl-311s/CTL-311_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/ctl-311s/CTL-311_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/ctl-311s/CTL-311_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/ctl-311s/CTL-311_image-5.jpg";
            document.getElementById("imagetext1").innerHTML = "CTL-311S";
            document.getElementById("imagetext2").innerHTML = "CTL-311S";
            document.getElementById("imagetext3").innerHTML = "CTL-311S";
            document.getElementById("imagetext4").innerHTML = "CTL-311S";
            document.getElementById("imagetext5").innerHTML = "CTL-311S";
            break;

        case 9:
            document.getElementById("productimg1").src = "../images/products/sf-04s/SF-04_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/sf-04s/SF-04_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/sf-04s/SF-04_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/sf-04s/SF-04_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/sf-04s/SF-04_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/sf-04s/SF-04_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "SF-04S";
            document.getElementById("imagetext2").innerHTML = "SF-04S";
            document.getElementById("imagetext3").innerHTML = "SF-04S";
            document.getElementById("imagetext4").innerHTML = "SF-04S";
            document.getElementById("imagetext5").innerHTML = "SF-04S";
            document.getElementById("imagetext6").innerHTML = "SF-04S";
            break;

        case 10:
            document.getElementById("productimg1").src = "../images/products/swm-500rs/SWM-500_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/swm-500rs/SWM-500_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/swm-500rs/SWM-500_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/swm-500rs/SWM-500_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/swm-500rs/SWM-500_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/swm-500rs/SWM-500_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "SWM-500RS";
            document.getElementById("imagetext2").innerHTML = "SWM-500RS";
            document.getElementById("imagetext3").innerHTML = "SWM-500RS";
            document.getElementById("imagetext4").innerHTML = "SWM-500RS";
            document.getElementById("imagetext5").innerHTML = "SWM-500RS";
            document.getElementById("imagetext6").innerHTML = "SWM-500RS";
            break;

        case 11:
            document.getElementById("sixthimage").classList.remove('myImages');
            document.getElementById("sixthdot").classList.remove('imagedot');
            document.getElementById("productimg1").src = "../images/products/np-02d/NP-02D_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/np-02d/NP-02D_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/np-02d/NP-02D_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/np-02d/NP-02D_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/np-02d/NP-02D_image-5.jpg";
            document.getElementById("imagetext1").innerHTML = "NP-02D";
            document.getElementById("imagetext2").innerHTML = "NP-02D";
            document.getElementById("imagetext3").innerHTML = "NP-02D";
            document.getElementById("imagetext4").innerHTML = "NP-02D";
            document.getElementById("imagetext5").innerHTML = "NP-02D";
            break;

        case 12:
            document.getElementById("productimg1").src = "../images/products/ccm-05d/CCM-05D_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/ccm-05d/CCM-05D_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/ccm-05d/CCM-05D_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/ccm-05d/CCM-05D_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/ccm-05d/CCM-05D_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/ccm-05d/CCM-05D_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "CCM-05D";
            document.getElementById("imagetext2").innerHTML = "CCM-05D";
            document.getElementById("imagetext3").innerHTML = "CCM-05D";
            document.getElementById("imagetext4").innerHTML = "CCM-05D";
            document.getElementById("imagetext5").innerHTML = "CCM-05D";
            document.getElementById("imagetext6").innerHTML = "CCM-05D";
            break;

        case 13:
            document.getElementById("productimg1").src = "../images/products/artc-01/ARTC-01_image-1.jpg";
            document.getElementById("productimg2").src = "../images/products/artc-01/ARTC-01_image-2.jpg";
            document.getElementById("productimg3").src = "../images/products/artc-01/ARTC-01_image-3.jpg";
            document.getElementById("productimg4").src = "../images/products/artc-01/ARTC-01_image-4.jpg";
            document.getElementById("productimg5").src = "../images/products/artc-01/ARTC-01_image-5.jpg";
            document.getElementById("productimg6").src = "../images/products/artc-01/ARTC-01_image-6.jpg";
            document.getElementById("imagetext1").innerHTML = "ARTC-01";
            document.getElementById("imagetext2").innerHTML = "ARTC-01";
            document.getElementById("imagetext3").innerHTML = "ARTC-01";
            document.getElementById("imagetext4").innerHTML = "ARTC-01";
            document.getElementById("imagetext5").innerHTML = "ARTC-01";
            document.getElementById("imagetext6").innerHTML = "ARTC-01";
            break;

        default:
            break;
    }
}
  
var imageIndex = 1;
showImages(imageIndex);
  
// Next/previous controls
function plusImages(n) {
    console.log(n);
    showImages(imageIndex += n);
}
  
// Thumbnail image controls
function currentImage(n) {
    showImages(imageIndex = n);
}
  
function showImages(n) {
    var i;
    var images = document.getElementsByClassName("myImages");
    var imagedots = document.getElementsByClassName("imagedot");
    if (n > images.length) {imageIndex = 1}
    if (n < 1) {imageIndex = images.length}
    for (i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    for (i = 0; i < imagedots.length; i++) {
        imagedots[i].className = imagedots[i].className.replace(" imageactive", "");
    }
    images[imageIndex-1].style.display = "block";
    imagedots[imageIndex-1].className += " imageactive";
} 
  
// INFO WINDOW
function closeInfo() {
    document.getElementById("infowindow").style.display = "none";
    document.getElementById("infoarea1").style.display = "none";
    document.getElementById("infoarea2").style.display = "none";
    document.getElementById("infoarea3").style.display = "none";
    document.getElementById("infoarea4").style.display = "none";
    document.getElementById("infoarea5").style.display = "none";
    document.getElementById("infoarea6").style.display = "none";
    document.getElementById("infoarea7").style.display = "none";
    document.getElementById("infoarea8").style.display = "none";
    document.getElementById("infoarea9").style.display = "none";
    document.getElementById("infoarea10").style.display = "none";
    document.getElementById("infoarea11").style.display = "none";
    document.getElementById("infoarea12").style.display = "none";
    document.getElementById("infoarea13").style.display = "none";
}
  
function infoWindow(number) {
    document.getElementById("infowindow").style.display = "grid";
    // close on clicking with the mouse somewhere
    document.getElementById("infoclose").addEventListener("click", closeInfo);
    // close on clicking the escape key
    document.addEventListener('keydown', keyEvents);
  
    // SWITCHING BETWEEN LINKS
    switch (number) {
      case 1:
        document.getElementById("infoarea1").style.display = "block";
        break;
  
      case 2:
        document.getElementById("infoarea2").style.display = "block";
        break;
  
      case 3:
        document.getElementById("infoarea3").style.display = "block";
        break;
  
      case 4:
        document.getElementById("infoarea4").style.display = "block";
        break;
  
      case 5:
        document.getElementById("infoarea5").style.display = "block";
        break;
  
      case 6:
        document.getElementById("infoarea6").style.display = "block";
        break;
  
      case 7:
        document.getElementById("infoarea7").style.display = "block";
        break;
  
      case 8:
        document.getElementById("infoarea8").style.display = "block";
        break;
  
      case 9:
        document.getElementById("infoarea9").style.display = "block";
        break;
  
      case 10:
        document.getElementById("infoarea10").style.display = "block";
        break;
  
      case 11:
        document.getElementById("infoarea11").style.display = "block";
        break;
  
      case 12:
        document.getElementById("infoarea12").style.display = "block";
        break;
  
      case 13:
        document.getElementById("infoarea13").style.display = "block";
        break;
  
      default: 
        document.getElementById("infoarea1").style.display = "block";
        break;
    }
}
  
// VIDEO WINDOW
function closeVideo() {
    document.getElementById("videowindow").style.display = "none";
    document.getElementById("currentvideo").src = "";
}
  
function videoWindow(number) {
    document.getElementById("videowindow").style.display = "grid";
    // close on clicking with the mouse somewhere
    document.getElementById("videoclose").addEventListener("click", closeVideo);
    // close on clicking the escape key
    document.addEventListener('keydown', keyEvents);
  
    // SWITCHING BETWEEN LINKS
    switch (number) {
      case 1:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/cK-IdZwmaqs";
        break;
  
      case 2:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/XCC4yhjCOko";
        break;
  
      case 3:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/-LcXKNmX5CM";
        break;
  
      case 4:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/MwstRbIlvQs";
        break;
  
      case 5:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/1y43X5LHzqA";
        break;
  
      case 6:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/sXc8KAh-zxw";
        break;
  
      case 7:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/wc-JyoQehFQ";
        break;
  
      case 8:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/RCBLAYZ-KAU";
        break;
  
      case 9:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/Woz36V2q39Y";
        break;
  
      case 10:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/SRbtMeqW6iw";
        break;
  
      case 11:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/_5aaqVu3vdM";
        break;
  
      case 12:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/Q6BfM5GCKhw";
        break;
  
      case 13:
        document.getElementById("currentvideo").src = "https://www.youtube.com/embed/i10zW8n8clE";
        break;
  
      default: 
        document.getElementById("currentvideo").src = "";
        break;
    }
}