var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var room = document.getElementById("room");
var room_final = document.getElementById("room_final");
var st_peters = document.getElementById("st_peters");
var room_tv = document.getElementById("room_tv");
var room_windows = document.getElementById("room_windows");
var pool_video = document.getElementById("pool_video");
var uscapitol = document.getElementById("uscapitol");
var pool_final = document.getElementById("pool_final");
var uscapitol_front = document.getElementById("uscapitol_front");
var uscapitol_back = document.getElementById("uscapitol_back");
var uscapitol_side = document.getElementById("uscapitol_side");

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
room.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('room.png')";
    borders();
    room.style.border = "solid gray";
}
room_final.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('room_final.png')";
    borders();
    room_final.style.border = "solid gray";
}
st_peters.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('st_peters.jpg')";
    borders();
    st_peters.style.border = "solid gray";
}
room_tv.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('room_tv.png')";
    borders();
    room_tv.style.border = "solid gray";
}
room_windows.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('room_windows.png')";
    borders();
    room_windows.style.border = "solid gray";
}
pool_video.onclick = function(){
    video.style.opacity = "1";
    video.src= "pool_wire.mp4";
    viewer.style.backgroundImage= "url('pool_video.png')";
    borders();
    pool_video.style.border = "solid gray";
}
uscapitol.onclick = function(){
    video.style.opacity = "1";
    video.src = "uscapitol.mp4";
    viewer.style.backgroundImage= "url('uscapitol.png')";
    borders();
    uscapitol.style.border = "solid gray";
}
pool_final.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('final.png')";
    borders();
    pool_final.style.border = "solid gray";
}
uscapitol_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('uscapitol_front.jpeg')";
    borders();
    uscapitol_front.style.border = "solid gray";
}
uscapitol_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('uscapitol_back.jpeg')";
    borders();
    uscapitol_back.style.border = "solid gray";
}
uscapitol_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('uscapitol_side.png')";
    borders();
    uscapitol_side.style.border = "solid gray";
}


function borders(){
    room.style.border = "";
    room_final.style.border = "";
    st_peters.style.border = "";
    room_tv.style.border = "";
    room_windows.style.border = "";
    pool_video.style.border = "";
    uscapitol.style.border = "";
    pool_final.style.border = "";
    uscapitol_front.style.border = "";
    uscapitol_back.style.border = "";
    uscapitol_side.style.border = "";


}