var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var all = document.getElementById("all");
var ambient = document.getElementById("ambient");
var map = document.getElementById("map");
var key = document.getElementById("key");
var rim = document.getElementById("rim");
var fill = document.getElementById("fill");
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
all.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('all.png')";
    borders();
    all.style.border = "solid gray";
}
map.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('esquema.png')";
    map.style.border = "solid gray";
}
ambient.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('ambient.png')";
    ambient.style.border = "solid gray";
}
key.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('key.png')";
    borders();
    key.style.border = "solid gray";
}
fill.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('fill.png')";
    fill.style.border = "solid gray";
}
rim.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('rim.png')";
    rim.style.border = "solid gray";
}

function borders(){
    all.style.border = "";
    map.style.border = "";
    ambient.style.border = "";
    key.style.border = "";
    fill.style.border = "";
    rim.style.border = "";

}