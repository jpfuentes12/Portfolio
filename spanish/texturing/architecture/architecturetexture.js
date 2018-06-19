var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var room = document.getElementById("room");
var room_final = document.getElementById("room_final");
var room_realistic = document.getElementById("room_realistic");
var room_tv = document.getElementById("room_tv");
var room_windows = document.getElementById("room_windows");
var pool_video = document.getElementById("pool_video");
var pool_diffuse = document.getElementById("pool_diffuse");
var pool_final = document.getElementById("pool_final");
var pool_textures = document.getElementById("pool_textures");
var tiles_texture = document.getElementById("tiles_texture");

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
    viewer.style.backgroundImage= "url('living_room.png')";
    borders();
    room.style.border = "solid gray";
}
room_final.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('living_room_final.png')";
    borders();
    room_final.style.border = "solid gray";
}
room_realistic.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('living_room_realistic.png')";
    borders();
    room_realistic.style.border = "solid gray";
}
room_tv.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('living_room_tv.png')";
    borders();
    room_tv.style.border = "solid gray";
}
room_windows.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('living_room_window.png')";
    borders();
    room_windows.style.border = "solid gray";
}
pool_video.onclick = function(){
    video.style.opacity = "1";
    video.src= "pool.mp4";
    viewer.style.backgroundImage= "url('pool_video.png')";
    borders();
    pool_video.style.border = "solid gray";
}
pool_diffuse.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pool_diffuse.png')";
    borders();
    pool_diffuse.style.border = "solid gray";
}
pool_final.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pool_final.png')";
    borders();
    pool_final.style.border = "solid gray";
}
pool_textures.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pool_textures.png')";
    borders();
    pool_textures.style.border = "solid gray";
}
tiles_texture.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('tiles_texture.png')";
    borders();
    tiles_texture.style.border = "solid gray";
}


function borders(){
    room.style.border = "";
    room_final.style.border = "";
    room_realistic.style.border = "";
    room_tv.style.border = "";
    room_windows.style.border = "";
    pool_video.style.border = "";
    pool_diffuse.style.border = "";
    pool_final.style.border = "";
    pool_textures.style.border = "";
    tiles_texture.style.border = "";


}