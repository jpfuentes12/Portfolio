var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var arms = document.getElementById("arms");
var jaw = document.getElementById("jaw");
var legs = document.getElementById("legs");
var spline = document.getElementById("spline");
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
arms.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ik_arm.gif')";
    borders();
    arms.style.border = "solid gray";
}
jaw.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('jaw.gif')";
    borders();
    jaw.style.border = "solid gray";
}
legs.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('legs.gif')";
    borders();
    legs.style.border = "solid gray";
}
spline.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('spline.gif')";
    borders();
    spline.style.border = "solid gray";
}
function borders(){
    arms.style.border = "";
    jaw.style.border = "";
    legs.style.border = "";
    spline.style.border = "";
}