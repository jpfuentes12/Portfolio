var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var balls = document.getElementById("balls");
var textures = document.getElementById("textures");
var fur = document.getElementById("fur");
var gold = document.getElementById("gold");
var grass = document.getElementById("grass");
var leaves = document.getElementById("leaves");
var lines = document.getElementById("lines");
var meat = document.getElementById("meat");
var neon = document.getElementById("neon");
var pyramid = document.getElementById("pyramid");
var sea = document.getElementById("sea");
var sky = document.getElementById("sky");
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
balls.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('balls_ball.png')";
    borders();
    balls.style.border = "solid gray";
}
textures.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('final_texturas2d.png')";
    borders();
    textures.style.border = "solid gray";
}
fur.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('fur_ball.png')";
    borders();
    fur.style.border = "solid gray";
}
gold.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('gold_ball.png')";
    borders();
    gold.style.border = "solid gray";
}
grass.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('grass_ball.png')";
    borders();
    grass.style.border = "solid gray";
}
leaves.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('leaves_ball.png')";
    borders();
    leaves.style.border = "solid gray";
}
lines.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('lines_ball.png')";
    borders();
    lines.style.border = "solid gray";
}
meat.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('meat_ball.png')";
    borders();
    meat.style.border = "solid gray";
}
neon.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('neon_ball.png')";
    borders();
    neon.style.border = "solid gray";
}
pyramid.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pyramid_ball.png')";
    borders();
    pyramid.style.border = "solid gray";
}
sea.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('sea_ball.png')";
    borders();
    sea.style.border = "solid gray";
}
sky.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('sky_ball.png')";
    borders();
    sky.style.border = "solid gray";
}


function borders(){
    balls.style.border = "";
    textures.style.border = "";
    fur.style.border = "";
    gold.style.border = "";
    grass.style.border = "";
    leaves.style.border = "";
    lines.style.border = "";
    meat.style.border = "";
    neon.style.border = "";
    pyramid.style.border = "";
    sea.style.border = "";
    sky.style.border = "";

}