function bringOutMenu(){
    var x = document.getElementsByClassName("menu")[0];
    var y = document.getElementsByClassName("cover")[0];
    if(x.className === "menu"){
        x.className += " appear";
        y.className += " tadaa";
    }
}

function bringBackMenu(){
    var x = document.getElementsByClassName("menu")[0];
    var y = document.getElementsByClassName("cover")[0];
    if (x.className === "menu appear"){
        x.classList.remove("appear");
        y.classList.remove("tadaa");
    }
}