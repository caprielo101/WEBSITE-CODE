var slideIndex = 0;
carousel();

// slides without points for home
function carousel(){
    var i;
    var x = document.getElementsByClassName("img-slides");
    var y = document.getElementById("img-slides");

    for (i = 0; i< x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    // x[slideIndex-1].style.display = "block";
    if(window.innerWidth <= 500){
        x[slideIndex-1].style.display = "inline-block";
    } else x[slideIndex-1].style.display = "flex";
    setTimeout(carousel, 2000); 
    // image timer for x milliseconds

    
    
}
