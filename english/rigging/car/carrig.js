var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var move = document.getElementById("move");
var bounce = document.getElementById("bounce");
var hood = document.getElementById("hood");
var tires = document.getElementById("tires");
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
move.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('move_car.gif')";
    borders();
    move.style.border = "solid gray";
}
bounce.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('side_move_car.gif')";
    borders();
    bounce.style.border = "solid gray";
}
hood.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('hood.gif')";
    borders();
    hood.style.border = "solid gray";
}
tires.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('tires.gif')";
    borders();
    tires.style.border = "solid gray";
}
function borders(){
    move.style.border = "";
    bounce.style.border = "";
    hood.style.border = "";
    tires.style.border = "";
}