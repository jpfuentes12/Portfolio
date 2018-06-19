var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var simple = document.getElementById("simple");
var shadows = document.getElementById("shadows");
var textures = document.getElementById("textures");
var glow = document.getElementById("glow");
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
simple.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('simple.png')";
    borders();
    simple.style.border = "solid gray";
}
shadows.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('shadows.png')";
    borders();
    shadows.style.border = "solid gray";
}
textures.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('textured.png')";
    borders();
    textures.style.border = "solid gray";
}
glow.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('glow.png')";
    borders();
    glow.style.border = "solid gray";
}
function borders(){
    simple.style.border = "";
    shadows.style.border = "";
    textures.style.border = "";
    glow.style.border = "";
}