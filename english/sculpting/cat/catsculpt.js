var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var curious = document.getElementById("curious");
var relaxed = document.getElementById("relaxed");
var scared = document.getElementById("scared");
var sit = document.getElementById("sit");
var sleeping = document.getElementById("sleeping");
var stand = document.getElementById("stand");
var skull = document.getElementById("skull");
var skullopen = document.getElementById("skullopen");

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
curious.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_curious.png')";
    borders();
    curious.style.border = "solid gray";
}
relaxed.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_relaxed.png')";
    borders();
    relaxed.style.border = "solid gray";
}
scared.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_scared.png')";
    borders();
    scared.style.border = "solid gray";
}
sit.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_sit.png')";
    borders();
    sit.style.border = "solid gray";
}
sleeping.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_sleeping.png')";
    borders();
    sleeping.style.border = "solid gray";
}
stand.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cat_stand.png')";
    borders();
    stand.style.border = "solid gray";
}
skull.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('catskull.png')";
    borders();
    skull.style.border = "solid gray";
}
skullopen.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('catskull_open.png')";
    borders();
    skullopen.style.border = "solid gray";
}

function borders(){
    curious.style.border = "";
    relaxed.style.border = "";
    scared.style.border = "";
    sit.style.border = "";
    sleeping.style.border = "";
    stand.style.border = "";
    skull.style.border = "";
    skullopen.style.border = "";

}