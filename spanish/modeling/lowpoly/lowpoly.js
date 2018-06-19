var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var logo_wire = document.getElementById("logo_wire");
var plane = document.getElementById("plane");
var plane_wire = document.getElementById("plane_wire");
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
logo_wire.onclick = function(){
    video.style.opacity = "1";
    video.src="logo_wire.mp4";
    video.style.height="540px";
    viewer.style.backgroundImage= "url('logo_wire.png')";
    borders();
    logo_wire.style.border = "solid gray";
}
plane.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('low.png')";
    borders();
    plane.style.border = "solid gray";
}
plane_wire.onclick = function(){
    video.style.opacity = "1";
    video.src="plane_wire.mp4";
    viewer.style.backgroundImage= "url('plane_wire.png')";
    borders();
    plane_wire.style.border = "solid gray";
}

function borders(){
    logo_wire.style.border = "";
    plane.style.border = "";
    plane_wire.style.border = "";


}
