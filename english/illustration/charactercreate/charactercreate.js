var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var colors = document.getElementById("colors");
var poses = document.getElementById("poses");
var poses2 = document.getElementById("poses2");
var shadows = document.getElementById("shadows");
var emotions = document.getElementById("emotions");
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
colors.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('vulture%20colors.png')";
    borders();
    colors.style.border = "solid gray";
}
poses.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('vulture%20poses.png')";
    borders();
    poses.style.border = "solid gray";
}
poses2.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('vulture%20posiciones2.png')";
    borders();
    poses2.style.border = "solid gray";
}
shadows.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('vulture%20sombras.png')";
    borders();
    shadows.style.border = "solid gray";
}
emotions.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('vulture%20emociones2.png')";
    borders();
    emotions.style.border = "solid gray";
}
function borders(){
    colors.style.border = "";
    poses.style.border = "";
    poses2.style.border = "";
    shadows.style.border = "";
    emotions.style.border = "";
}