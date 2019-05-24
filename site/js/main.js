function mobileDescription(){
    // var x = document.getElementsByClassName("menu")[0];
    // var y = document.getElementsByClassName("cover")[0];
    // if(x.className === "menu"){
    //     x.className += " appear";
    //     y.className += " tadaa";
    // }
    console.log("yup it works")
}

// function bringBackMenu(){
//     var x = document.getElementsByClassName("menu")[0];
//     var y = document.getElementsByClassName("cover")[0];
//     if (x.className === "menu appear"){
//         x.classList.remove("appear");
//         y.classList.remove("tadaa");
//     }
// }

function screenSize(){
    x = document.getElementsByClassName("video_path").length
    i = 0

    if (window.matchMedia("(min-width: 500px)").matches) {
        console.log("Desktop mode");
        while(i < x){
            link = document.getElementsByClassName("video_path")[i].id;
            document.getElementsByClassName("video_path")[i].href = "html/" + link
            i+=1
        }
    } else {
        console.log("Mobile mode");
        while(i < x){
            document.getElementsByClassName("video_path")[i].href = "javascript: void(0)";
            i+=1;
        }
    }
}
