var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var audi_back = document.getElementById("audi_back");
var cadillac_mercedes = document.getElementById("cadillac_mercedes");
var cadillac_side = document.getElementById("cadillac_side");
var ferrari_front = document.getElementById("ferrari_front");
var mercedes_3_4 = document.getElementById("mercedes_3_4");
var ferrari_side = document.getElementById("ferrari_side");
var final_cars = document.getElementById("final_cars");
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
audi_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('audi_back.png')";
    borders();
    audi_back.style.border = "solid gray";
}
cadillac_mercedes.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_mercedes.png')";
    borders();
    cadillac_mercedes.style.border = "solid gray";
}
cadillac_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_side.png')";
    borders();
    cadillac_side.style.border = "solid gray";
}
ferrari_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ferrari_front.png')";
    borders();
    ferrari_front.style.border = "solid gray";
}

mercedes_3_4.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mercedes_3_4.png')";
    borders();
    mercedes_3_4.style.border = "solid gray";
}
ferrari_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ferrari_side.png')";
    borders();
    ferrari_side.style.border = "solid gray";
}
final_cars.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('final_cars.png')";
    borders();
    final_cars.style.border = "solid gray";
}


function borders(){
    audi_back.style.border = "";
    cadillac_mercedes.style.border = "";
    cadillac_side.style.border = "";
    ferrari_front.style.border = "";
    mercedes_3_4.style.border = ""; 
    ferrari_side.style.border = "";
    final_cars.style.border = "";


}