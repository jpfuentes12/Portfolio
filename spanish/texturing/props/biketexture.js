var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var all = document.getElementById("all");
var bike = document.getElementById("bike");
var bike_back = document.getElementById("bike_back");
var bike_back_bottom = document.getElementById("bike_back_bottom");
var bike_front = document.getElementById("bike_front");
var lightsaber = document.getElementById("lightsaber");
var normal = document.getElementById("normal");
var plane = document.getElementById("plane");
var props_textures = document.getElementById("props_textures");

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
bike.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bike.png')";
    borders();
    bike.style.border = "solid gray";
}
bike_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bike_back.png')";
    borders();
    bike_back.style.border = "solid gray";
}
bike_back_bottom.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bike_back_bottom.png')";
    borders();
    bike_back_bottom.style.border = "solid gray";
}
bike_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bike_front.png')";
    borders();
    bike_front.style.border = "solid gray";
}
lightsaber.onclick = function(){
    video.style.opacity = "1";
    video.src= "lightsaber.mp4";
    viewer.style.backgroundImage= "url('lightsaber.png')";
    borders();
    lightsaber.style.border = "solid gray";
}
normal.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('normal.png')";
    borders();
    normal.style.border = "solid gray";
}
plane.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('plane.png')";
    borders();
    plane.style.border = "solid gray";
}
props_textures.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('props_textures.png')";
    borders();
    props_textures.style.border = "solid gray";
}



function borders(){
    all.style.border = "";
    bike.style.border = "";
    bike_back.style.border = "";
    bike_back_bottom.style.border = "";
    bike_front.style.border = "";
    lightsaber.style.border = "";
    normal.style.border = "";
    plane.style.border = "";
    props_textures.style.border = "";


}