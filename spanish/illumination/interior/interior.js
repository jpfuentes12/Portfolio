var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var all = document.getElementById("all");
var sun = document.getElementById("sun");
var map = document.getElementById("map");
var pool = document.getElementById("pool");
var point = document.getElementById("point");
var ambient = document.getElementById("ambient");
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
    viewer.style.backgroundImage= "url('final.png')";
    borders();
    all.style.border = "solid gray";
}
map.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('esquema.png')";
    map.style.border = "solid gray";
}
sun.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('sun.png')";
    sun.style.border = "solid gray";
}
pool.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pool.png')";
    borders();
    pool.style.border = "solid gray";
}
ambient.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('sky.png')";
    ambient.style.border = "solid gray";
}
point.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('point.png')";
    point.style.border = "solid gray";
}

function borders(){
    all.style.border = "";
    map.style.border = "";
    sun.style.border = "";
    pool.style.border = "";
    ambient.style.border = "";
    point.style.border = "";

}