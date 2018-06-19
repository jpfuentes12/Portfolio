var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var basket = document.getElementById("basket");
var mujer1 = document.getElementById("mujer1");
var mujer2 = document.getElementById("mujer2");
var radio = document.getElementById("radio");
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
basket.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('basket3.jpg')";
    borders();
    basket.style.border = "solid gray";
}
mujer1.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mujer.jpg')";
    borders();
    mujer1.style.border = "solid gray";
}
mujer2.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mujer.png')";
    borders();
    mujer2.style.border = "solid gray";
}
radio.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('radio.png')";
    borders();
    radio.style.border = "solid gray";
}

function borders(){
    basket.style.border = "";
    mujer1.style.border = "";
    mujer2.style.border = "";
    radio.style.border = "";
}
