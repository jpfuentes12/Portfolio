var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var dog = document.getElementById("dog");
var skull1 = document.getElementById("skull1");
var skull2 = document.getElementById("skull2");
var predator = document.getElementById("predator");
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
dog.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('dog.png')";
    borders();
    dog.style.border = "solid gray";
}
skull1.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('skull.jpg')";
    borders();
    skull1.style.border = "solid gray";
}
skull2.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('gray_skull.jpg')";
    borders();
    skull2.style.border = "solid gray";
}
predator.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('predator_skull.jpg')";
    borders();
    predator.style.border = "solid gray";
}
function borders(){
    dog.style.border = "";
    skull1.style.border = "";
    skull2.style.border = "";
    predator.style.border = "";
}