var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_check = false;
menu.onclick = function(){
    if(menu_check == false){
    menu_cont.style.transform= "translateY(970px)";
    menu_cont.style.opacity = "1";
    menu_cont.style.transition = "0.5s";
    menu_check = true;
    } else{
    menu_cont.style.transform= "translate(0px)";
    menu_cont.style.opacity = "0";
    menu_cont.style.transition = "0.5s";   
    menu_check = false;
    }
    
}