var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var audi_back = document.getElementById("audi_back");
var audi_front = document.getElementById("audi_front");
var audi_side = document.getElementById("audi_side");
var cadillac_back = document.getElementById("cadillac_back");
var cadillac_front = document.getElementById("cadillac_front");
var cadillac_mercedes = document.getElementById("cadillac_mercedes");
var cadillac_photo = document.getElementById("cadillac_photo");
var cadillac_side = document.getElementById("cadillac_side");
var car_video = document.getElementById("car_video");
var cars_textures = document.getElementById("cars_textures");
var ferrari_back = document.getElementById("ferrari_back");
var ferrari_front = document.getElementById("ferrari_front");
var mercedes_front = document.getElementById("mercedes_front");
var mercedes_side = document.getElementById("mercedes_side");
var mercedes_3_4 = document.getElementById("mercedes_3_4");
var mercedes_back = document.getElementById("mercedes_back");
var ferrari_side = document.getElementById("ferrari_side");
var final_cars = document.getElementById("final_cars");
var snow = document.getElementById("snow");
var sunset = document.getElementById("sunset");



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
audi_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('audi_front.png')";
    borders();
    audi_front.style.border = "solid gray";
}
audi_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('audi_side.png')";
    borders();
    audi_side.style.border = "solid gray";
}
cadillac_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_back.png')";
    borders();
    cadillac_back.style.border = "solid gray";
}
cadillac_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_front.png')";
    borders();
    cadillac_front.style.border = "solid gray";
}
cadillac_mercedes.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_mercedes.png')";
    borders();
    cadillac_mercedes.style.border = "solid gray";
}
cadillac_photo.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_photo.png')";
    borders();
    cadillac_photo.style.border = "solid gray";
}
cadillac_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cadillac_side.png')";
    borders();
    cadillac_side.style.border = "solid gray";
}
car_video.onclick = function(){
    video.style.opacity = "1";
    video.src =" car.mp4";
    viewer.style.backgroundImage= "url('car_video.png')";
    borders();
    car_video.style.border = "solid gray";
}
cars_textures.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('cars_textures.png')";
    borders();
    cars_textures.style.border = "solid gray";
}
ferrari_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ferrari_back.png')";
    borders();
    ferrari_back.style.border = "solid gray";
}
ferrari_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('ferrari_front.png')";
    borders();
    ferrari_front.style.border = "solid gray";
}

mercedes_front.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mercedes_front.png')";
    borders();
    mercedes_front.style.border = "solid gray";
}
mercedes_side.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mercedes_side.png')";
    borders();
    mercedes_side.style.border = "solid gray";
}
mercedes_3_4.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mercedes_3_4.png')";
    borders();
    mercedes_3_4.style.border = "solid gray";
}
mercedes_back.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('mercedes_back.png')";
    borders();
    mercedes_back.style.border = "solid gray";
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
snow.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('snow.png')";
    borders();
    snow.style.border = "solid gray";
}
sunset.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('sunset.png')";
    borders();
    sunset.style.border = "solid gray";
}


function borders(){
    audi_back.style.border = "";
    audi_front.style.border = "";
    audi_side.style.border = "";
    cadillac_back.style.border = "";
    cadillac_front.style.border = "";
    cadillac_mercedes.style.border = "";
    cadillac_photo.style.border = "";
    cadillac_side.style.border = "";
    car_video.style.border = "";
    cars_textures.style.border = "";
    ferrari_back.style.border = "";
    ferrari_front.style.border = "";
    mercedes_front.style.border = "";
    mercedes_side.style.border = "";
    mercedes_3_4.style.border = "";
    mercedes_back.style.border = ""; 
    ferrari_side.style.border = "";
    final_cars.style.border = "";
    snow.style.border = "";
    sunset.style.border = "";


}