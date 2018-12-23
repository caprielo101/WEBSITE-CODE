var slideIndex = 0;
carousel();

// slides without points for home
function carousel(){
    var i;
    var x = document.getElementsByClassName("img-slides");
    for (i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); 
    // image timer for x milliseconds
}
