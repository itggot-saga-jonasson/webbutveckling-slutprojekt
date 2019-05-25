function mobileDescription(media_class){
    popup = document.getElementsByClassName("popup_descr")[0]
    cover = document.getElementsByClassName("cover")[0]

    if (window.matchMedia("(max-width: 500px)").matches) {
        if(cover.className === "cover"){
            popup.className += " visible";
            cover.className += " visible";

            popup.innerHTML = '<button class="back" onclick=noMoreMobileDescription()>X</button>' + document.getElementsByClassName("description " + media_class)[0].innerHTML + '<a href="html/' + media_class + '.html"><button class="watch"><h2>Watch it now!</h2></button></a>'
        } else if(cover.className === "cover invisible"){
            popup.classList.replace("invisible", "visible");
            cover.classList.replace("invisible", "visible");

            popup.innerHTML = '<button class="back" onclick=noMoreMobileDescription()>X</button>' + document.getElementsByClassName("description " + media_class)[0].innerHTML + '<a href="html/' + media_class + '.html"><button class="watch"><h2>Watch it now!</h2></button></a>'
        }
    } 
    
}

function noMoreMobileDescription(){
    if (document.getElementsByClassName("cover")[0].className === "cover visible"){
        document.getElementsByClassName("cover")[0].classList.replace("visible", "invisible");
        document.getElementsByClassName("popup_descr")[0].classList.replace("visible", "invisible");
        
        document.getElementsByClassName("popup_descr")[0].innerHTML = ""
    }
}

function screenSize(){
    x = document.getElementsByClassName("video_path").length
    i = 0

    if (window.matchMedia("(min-width: 500px)").matches) {
        while(i < x){
            link = document.getElementsByClassName("video_path")[i].id;
            document.getElementsByClassName("video_path")[i].href = "html/" + link
            i+=1
        }
    } else {
        while(i < x){
            document.getElementsByClassName("video_path")[i].href = "javascript: void(0)";
            i+=1;
        }
    }
}
