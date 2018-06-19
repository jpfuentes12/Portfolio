var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var rotoscopy = document.getElementById("rotoscopy");
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
rotoscopy.onclick = function(){
    video.src="rotoscopy.mp4";
    video.poster = "../../animation/2d_img.png";
    video.style.opacity = "1";
    borders();
    rotoscopy.style.border = "solid gray";
}
reel.onclick = function(){
    video.src="reel.mp4";
    video.poster = "reel.png";
    video.style.opacity = "1";
    borders();
    reel.style.border = "solid gray";
}
function borders(){
    rotoscopy.style.border = "";
    reel.style.border = "";
}