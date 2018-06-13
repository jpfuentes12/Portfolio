var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var aged_brown = document.getElementById("aged_brown");
var aged_dark = document.getElementById("aged_dark");
var aged_gray = document.getElementById("aged_gray");
var aged_light = document.getElementById("aged_light");
var plane_wood = document.getElementById("plane_wood");
var map = document.getElementById("map");
var pattern = document.getElementById("pattern");
var woodplanks = document.getElementById("woodplanks");

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
aged_brown.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('aged_wood_planks.png')";
    borders();
    aged_brown.style.border = "solid gray";
}
aged_dark.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('dark_aged_wood_planks.png')";
    borders();
    aged_dark.style.border = "solid gray";
}
aged_gray.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('gray_aged_wood_planks.png')";
    borders();
    aged_gray.style.border = "solid gray";
}
aged_light.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('light_aged_wood_planks.png')";
    borders();
    aged_light.style.border = "solid gray";
}
plane_wood.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('woodplane.png')";
    borders();
    plane_wood.style.border = "solid gray";
}
map.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('wood.png')";
    borders();
    map.style.border = "solid gray";
}
pattern.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('wood_pattern.png')";
    borders();
    pattern.style.border = "solid gray";
}
woodplanks.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('woodplanks.png')";
    borders();
    woodplanks.style.border = "solid gray";
}

function borders(){
    aged_brown.style.border = "";
    aged_dark.style.border = "";
    aged_gray.style.border = "";
    aged_light.style.border = "";
    plane_wood.style.border = "";
    map.style.border = "";
    pattern.style.border = "";
    woodplanks.style.border = "";

}