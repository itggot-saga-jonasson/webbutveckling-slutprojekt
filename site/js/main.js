function mobileDescription(media_class){
    popup = document.getElementsByClassName("popup_descr")[0]
    cover = document.getElementsByClassName("cover")[0]

    if (window.matchMedia("(max-width: 500px)").matches) {
        if(cover.className === "cover"){
            popup.className += " visible";
            cover.className += " visible";

            popup.innerHTML = '<button class="back" onclick=mobileDescription()>X</button>' + document.getElementsByClassName("description " + media_class)[0].innerHTML + '<a href="html/' + media_class + '.html"><button class="watch"><h2>Watch it now!</h2></button></a>'
        } else if(cover.className === "cover invisible"){
            popup.classList.replace("invisible", "visible");
            cover.classList.replace("invisible", "visible");

            popup.innerHTML = '<button class="back" onclick=mobileDescription()>X</button>' + document.getElementsByClassName("description " + media_class)[0].innerHTML + '<a href="html/' + media_class + '.html"><button class="watch"><h2>Watch it now!</h2></button></a>'
        } else if (cover.className === "cover visible"){
            cover.classList.replace("visible", "invisible");
            popup.classList.replace("visible", "invisible");
            
            popup.innerHTML = ""
        }
    } 
    
}

function seasonMenu(){
    list = document.getElementsByClassName("season_list")[0]
    cover = document.getElementsByClassName("cover")[0]

    if(list.className === "season_list"){
        list.className += " visible";
        cover.className += " visible";

    } else if(list.className === "season_list invisible"){
        list.classList.replace("invisible", "visible");
        cover.classList.replace("invisible", "visible");

    } else if(list.className === "season_list visible"){
        cover.classList.replace("visible", "invisible");
        list.classList.replace("visible", "invisible");
    }
}

function hello(){
    console.log("hello")
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

function screenSizeVideo(){

    if(window.matchMedia("(min-width: 1200px)").matches) {
        document.getElementsByTagName("video")[0].style.width = "60%";
    } else if (window.matchMedia("(min-width: 500px)").matches) {
        document.getElementsByTagName("video")[0].style.width = "80%";
    } else {
        document.getElementsByTagName("video")[0].style.width = "100%";
    }

}

function episodeButton(episode){
    selected = document.getElementsByClassName("selected")[0]
    if(selected != 'undefined' && selected != null){
        selected.className = "episode_button"
    }

    document.getElementById(episode).className += " selected"

    season = document.getElementsByClassName("seasons")[0].id;
    episodeName = document.getElementById(episode).getElementsByClassName("episode_name")[0].innerHTML;

    document.getElementsByClassName("episode")[0].innerHTML = season + "/" + episode + " - " + episodeName;
}

function gotSeasonButton(season){
    S1 =[
        'Winter is coming',
        'The Kingsroad',
        'Lord Snow',
        'Cripples, Bastards, and Broken Things',
    ]

    episodeList = document.getElementsByClassName("episode_list")[0];
    episode = document.getElementsByClassName("episode")[0].innerHTML.substr(0, 5);
    seasonId = document.getElementsByClassName("seasons")


    i = 0
    episodeList.innerHTML = ""
    if(season === "S1"){
        seasonId.innerHTML = "Season 1 >"
        seasonId.id = "S1"

       while(i < S1.length){
        episodeList.innerHTML += epGen(i+1, S1[i])
        i +=1
        
        sEp = season + "/E" + i
        console.log(sEp)
        console.log(episode)
        // if(sEp == episode){
        //     document.getElementsByClassName("episode_name")[i].className += " selected"
        // }
       }
    }
}

function epGen(num, title){
    return '<button class="episode_button" id="E' + num + '" onclick=episodeButton(id)> <p>Episode '+ num + ' - </p> <p class="episode_name">' + title +'</p> </button>'
}