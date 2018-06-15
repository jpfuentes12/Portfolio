var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var earth = document.getElementById("earth");
var build = document.getElementById("build");
var flag = document.getElementById("flag");
var fur = document.getElementById("fur");
var monkey = document.getElementById("monkey");

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
earth.onclick = function(){
    video.style.opacity = "1";
    video.src= "earth.mp4";
    viewer.style.backgroundImage= "url('earth.png')";
    borders();
    earth.style.border = "solid gray";
}
build.onclick = function(){
    video.style.opacity = "1";
    video.src= "build.mp4";
    viewer.style.backgroundImage= "url('build.png')";
    borders();
    build.style.border = "solid gray";
}
flag.onclick = function(){
    video.style.opacity = "1";
    video.src= "flag.mp4";
    viewer.style.backgroundImage= "url('flag.png')";
    borders();
    flag.style.border = "solid gray";
}
fur.onclick = function(){
    video.style.opacity = "1";
    video.src= "fur.mp4";
    viewer.style.backgroundImage= "url('fur.png')";
    borders();
    fur.style.border = "solid gray";
}
monkey.onclick = function(){
    video.style.opacity = "1";
    video.src= "monkey.mp4";
    viewer.style.backgroundImage= "url('monkey.png')";
    borders();
    monkey.style.border = "solid gray";
}




function borders(){
    earth.style.border = "";
    build.style.border = "";
    flag.style.border = "";
    fur.style.border = "";
    monkey.style.border = "";



}