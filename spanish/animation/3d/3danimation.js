var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var pantomime = document.getElementById("pantomime");
var mary = document.getElementById("mary");
var mary2 = document.getElementById("mary2");
var lift = document.getElementById("lift");
var fight = document.getElementById("fight");
var reel = document.getElementById("reel");
var menu_check = false;
menu.onclick = function(){
    if(menu_check == false){
   menu_cont.style.transform= "translateY(970px)";

    menu_cont.style.transition = "0.5s";
            menu_cont.style.opacity = "1";
    menu_check = true;
        
    } else{
    menu_cont.style.transform= "translate(0px)";
 
    menu_cont.style.transition = "0.5s";
           menu_cont.style.opacity = "0";
    menu_check = false;
    }
}
pantomime.onclick = function(){
    video.src="pantomime.mp4";
    video.poster = "pantomime.png";
    video.style.opacity = "1";
    borders();
    pantomime.style.border = "solid gray";
}
mary.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage = "url('mary.jpg')";
    borders();
    mary.style.border = "solid gray";
}
mary2.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage = "url('mary2.jpg')";
    borders();
    mary2.style.border = "solid gray";
}
lift.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage = "url('lift.png')";
    borders();
    lift.style.border = "solid gray";
}
fight.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage = "url('fight.png')";
    borders();
    fight.style.border = "solid gray";
}
reel.onclick = function(){
    video.src="reel.mp4";
    video.poster = "reel.png";
    video.style.opacity = "1";
    borders();
    reel.style.border = "solid gray";
}
function borders(){
    pantomime.style.border = "";
    mary.style.border = "";
    mary2.style.border = "";
    lift.style.border = "";
    fight.style.border = "";
    reel.style.border = "";
}