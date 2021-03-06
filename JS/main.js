/*Drop down in Navigation Bar when in mobile view*/
function drop(){
    var x = document.getElementById("top-navigation");
    if(x.className === "top-navigation"){
        x.className += " responsive";
    } else {
        x.className = "top-navigation";
    }
}

window.onscroll = function(){
    scrollFunction()
 }
 function scrollFunction(){
    var sn = document.getElementById("top-navigation");
       if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
          sn.style.top = "0"
       }
       else{
          sn.style.top = "104px"
       }
 }

// slider for gallery
var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 2000);
} 