var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var guitar = document.getElementById("guitar");
var handle = document.getElementById("handle");
var mannequin = document.getElementById("mannequin");
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
guitar.onclick = function(){
    video.style.opacity = "1";
    video.src="guitar.mp4";
    video.style.height= "540px";
    viewer.style.backgroundImage= "url('guitar.png')";
    borders();
    guitar.style.border = "solid gray";
}
handle.onclick = function(){
    video.style.opacity = "1";
    video.src="handle.mp4";
    borders();
    guitar.style.border = "solid gray";
}
mannequin.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mannequin.jpg')";
    borders();
    mannequin.style.border = "solid gray";
}

function borders(){
    guitar.style.border = "";
    handle.style.border = "";
    mannequin.style.border = "";


}