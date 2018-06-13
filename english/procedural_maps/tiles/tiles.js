var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var blue = document.getElementById("blue");
var black = document.getElementById("black");
var yellow = document.getElementById("yellow");
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
blue.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('tiles.png')";
    borders();
    blue.style.border = "solid gray";
}
black.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('black_tiles.png')";
    borders();
    black.style.border = "solid gray";
}
yellow.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('yellow_tiles.png')";
    borders();
    yellow.style.border = "solid gray";
}
map.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('Captura.PNG')";
    borders();
    map.style.border = "solid gray";
}
function borders(){
    blue.style.border = "";
    black.style.border = "";
    yellow.style.border = "";
    map.style.border = "";
}
