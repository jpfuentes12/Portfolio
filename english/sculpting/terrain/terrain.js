var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var terrain = document.getElementById("terrain");
var terrain_pov = document.getElementById("terrain_pov");
var terrain_top = document.getElementById("terrain_top");
var terrain_top_view = document.getElementById("terrain_top_view");
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
terrain.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('terrain.png')";
    borders();
    terrain.style.border = "solid gray";
}
terrain_pov.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('terrain_pov.png')";
    borders();
    terrain_pov.style.border = "solid gray";
}
terrain_top.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('terrain_top.png')";
    borders();
    terrain_top.style.border = "solid gray";
}
terrain_top_view.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('terrain_top_view.png')";
    borders();
    terrain_top_view.style.border = "solid gray";
}
function borders(){
    terrain.style.border = "";
    terrain_pov.style.border = "";
    terrain_top.style.border = "";
    terrain_top_view.style.border = "";
}
