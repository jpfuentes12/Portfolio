var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var texture = document.getElementById("texture");
var texture_combined = document.getElementById("texture_combined");
var map = document.getElementById("map");
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
texture.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('Metal_Floor.png')";
    borders();
    texture.style.border = "solid gray";
}
map.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('rusty_metal_map.PNG')";
    map.style.border = "solid gray";
}
texture_combined.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('rusty_metal_floor.png')";
    texture_combined.style.border = "solid gray";
}

function borders(){
    texture.style.border = "";
    map.style.border = "";
    texture_combined.style.border = "";

}
