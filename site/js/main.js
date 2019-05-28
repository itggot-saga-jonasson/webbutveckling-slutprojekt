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
    S1 = [
        'Winter is coming',
        'The Kingsroad',
        'Lord Snow',
        'Cripples, Bastards, and Broken Things',
        'The Wolf and the Lion',
        'A Golden Crown',
        'You Win or You Die',
        'The Pointy End',
        'Baelor',
        'Fire and Blood'
    ]

    S2 = [
        "The North Remembers",
        "The Night Lands",
        "What Is Dead May Never Die",
        "Garden of Bones",
        "The Ghost of Harrenhal",
        "The Old Gods and the New",
        "A Man Without Honor",
        "The Prince of Winterfell",
        "Blackwater",
        "Valar Morghulis"
    ]

    S3 = [
        "Valar Dohaeris",
        "Dark Wings, Dark Words",
        "Walk of Punishment",
        "And Now His Watch Is Ended",
        "Kissed by Fire",
        "The Climb",
        "The Bear and the Maiden Fair",
        "Second Sons",
        "The Rains of Castamere",
        "Mhysa"
    ]

    S4 = [
        "Two Swords",
        "The Lion and the Rose",
        "Breaker of Chains",
        "Oathkeeper",
        "First of His Name",
        "The Laws of Gods and Men",
        "Mockingbird",
        "The Mountain and the Viper",
        "The Watchers on the Wall",
        "The Children"
    ]

    S5 = [
        "The Wars to Come",
        "The House of Black and White",
        "High Sparrow",
        "Sons of the Harpy",
        "Kill the Boy",
        "Unbowed, Unbent, Unbroken",
        "The Gift",
        "Hardhome",
        "The Dance of Dragons",
        "Mother's Mercy"
    ]

    S6 = [
        "The Red Woman",
        "Home",
        "Oathbreaker",
        "Book of the Stranger",
        "The Door",
        "Blood of My Blood",
        "The Broken Man",
        "No One",
        "Battle of the Bastards",
        "The Winds of Winter"
    ]

    S7 = [
        "Dragonstone",
        "Stormborn",
        "The Queen's Justice",
        "The Spoils of War",
        "Eastwatch",
        "Beyond the Wall",
        "The Dragon and the Wolf"
    ]

    S8 = [
        "Winterfell",
        "A Knight of the Seven Kingdoms",
        "The Long Night",
        "The Last of the Starks",
        "The Bells",
        "The Iron Throne"
    ]

    episodeList = document.getElementsByClassName("episode_list")[0];
    episode = document.getElementsByClassName("episode")[0].innerHTML.substr(0, 5);
    seasonId = document.getElementsByClassName("seasons")[0];

    i = 0
    episodeList.innerHTML = ""



    seasonId.getElementsByTagName("h2")[0].innerHTML = "Season " + season.substr(1,season.length) + " > "
    seasonId.id = season
    if(season === "S1"){

       while(i < S1.length){
        episodeList.innerHTML += epGen(i+1, S1[i])
        i +=1
        
        if(season + "/E" + i == episode){
            document.getElementsByClassName("episode_button")[i-1].className += " selected"
        }
        
       }
    } else if(season === "S2"){

       while(i < S2.length){
        episodeList.innerHTML += epGen(i+1, S2[i])
        i +=1
        
        if(season + "/E" + i == episode){
            document.getElementsByClassName("episode_button")[i-1].className += " selected"
        }

       }
    } else if(season === "S3"){

        while(i < S3.length){
         episodeList.innerHTML += epGen(i+1, S3[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    } else if(season === "S4"){

        while(i < S4.length){
         episodeList.innerHTML += epGen(i+1, S4[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    } else if(season === "S5"){

        while(i < S5.length){
         episodeList.innerHTML += epGen(i+1, S5[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    } else if(season === "S6"){

        while(i < S6.length){
         episodeList.innerHTML += epGen(i+1, S6[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    } else if(season === "S7"){

        while(i < S7.length){
         episodeList.innerHTML += epGen(i+1, S7[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    } else if(season === "S8"){

        while(i < S8.length){
         episodeList.innerHTML += epGen(i+1, S8[i])
         i +=1
         
         if(season + "/E" + i == episode){
             document.getElementsByClassName("episode_button")[i-1].className += " selected"
         }
 
        }

    }


}

function epGen(num, title){
    return '<button class="episode_button" id="E' + num + '" onclick=episodeButton(id)> <p>Episode '+ num + ' - </p> <p class="episode_name">' + title +'</p> </button>'
}