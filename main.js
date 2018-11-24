function drop(){
    var x = document.getElementById("top-navigation");
    if(x.className === "top-navigation"){
        x.className += " responsive";
    } else {
        x.className = "top-navigation";
    }
}