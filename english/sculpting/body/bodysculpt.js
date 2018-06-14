var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var armfront = document.getElementById("armfront");
var armfront2 = document.getElementById("armfront2");
var armback = document.getElementById("armback");
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
armfront.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('arm_front.png')";
    borders();
    armfront.style.border = "solid gray";
}
armback.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('arm_back.png')";
    armback.style.border = "solid gray";
}
armfront2.onclick = function(){
    video.style.opacity = "0";
    borders();
    viewer.style.backgroundImage= "url('arm_front2.png')";
    armfront2.style.border = "solid gray";
}

function borders(){
    armfront.style.border = "";
    armback.style.border = "";
    armfront2.style.border = "";

}