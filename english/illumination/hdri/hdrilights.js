var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var all = document.getElementById("all");
var all2 = document.getElementById("all2");
var all3 = document.getElementById("all3");
var map1 = document.getElementById("map1");
var map2 = document.getElementById("map2");
var map3 = document.getElementById("map3");
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
all3.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('ALL3.png')";
    all3.style.border = "solid gray";
}
all2.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('ALL2.png')";
    all2.style.border = "solid gray";
}
map1.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ESQUEMA1.png')";
    borders();
    map1.style.border = "solid gray";
}
map3.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('ESQUEMA3.png')";
    map3.style.border = "solid gray";
}
map2.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('ESQUEMA2.png')";
    map2.style.border = "solid gray";
}

function borders(){
    all.style.border = "";
    all3.style.border = "";
    all2.style.border = "";
    map1.style.border = "";
    map3.style.border = "";
    map2.style.border = "";

}
