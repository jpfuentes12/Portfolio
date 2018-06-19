var menu = document.getElementById("menu");
var menu_cont = document.getElementById("menu_cont");
var menu_father = document.getElementById("menu_father");
var viewer = document.getElementById("viewer");
var video = document.getElementById("video");
var bigben = document.getElementById("bigben");
var bigboss = document.getElementById("bigboss");
var brushes = document.getElementById("brushes");
var buildings = document.getElementById("buildings");
var dragon = document.getElementById("dragon");
var dragonfly = document.getElementById("dragonfly");
var face = document.getElementById("face");
var godofwar = document.getElementById("godofwar");
var kaz = document.getElementById("kaz");
var kratos = document.getElementById("kratos");
var latin_art = document.getElementById("latin_art");
var love = document.getElementById("love");
var metallica = document.getElementById("metallica");
var phoenix = document.getElementById("phoenix");
var pinkfloyd = document.getElementById("pinkfloyd");
var pinkfloydhand = document.getElementById("pinkfloydhand");
var portrait = document.getElementById("portrait");
var predator = document.getElementById("predator");
var scorpion = document.getElementById("scorpion");
var fourportrait = document.getElementById("fourportrait");
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
bigben.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bigben.jpg')";
    borders();
    bigben.style.border = "solid gray";
}
bigboss.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('bigboss.jpg')";
    borders();
    bigboss.style.border = "solid gray";
}
brushes.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('brushes.png')";
    borders();
    brushes.style.border = "solid gray";
}
buildings.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('buildings.jpg')";
    borders();
    buildings.style.border = "solid gray";
}
dragon.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('dragon.png')";
    borders();
    dragon.style.border = "solid gray";
}
dragonfly.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('dragonfly.jpg')";
    borders();
    dragonfly.style.border = "solid gray";
}
face.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('face.png')";
    borders();
    face.style.border = "solid gray";
}
godofwar.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('godofwar.jpg')";
    borders();
    godofwar.style.border = "solid gray";
}
kaz.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('kaz.jpg')";
    borders();
    kaz.style.border = "solid gray";
}
kratos.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('kratos.jpg')";
    borders();
    kratos.style.border = "solid gray";
}
latin_art.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('latin_art.jpg')";
    borders();
    latin_art.style.border = "solid gray";
}
love.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('love.png')";
    borders();
    love.style.border = "solid gray";
}
metallica.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('metallica.jpg')";
    borders();
    metallica.style.border = "solid gray";
}
phoenix.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('phoenix.jpg')";
    borders();
    phoenix.style.border = "solid gray";
}
pinkfloyd.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pinkfloyd.png')";
    borders();
    pinkfloyd.style.border = "solid gray";
}
pinkfloydhand.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('pinkfloydhand.jpg')";
    borders();
    pinkfloydhand.style.border = "solid gray";
}
portrait.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('portrait.png')";
    borders();
    portrait.style.border = "solid gray";
}
predator.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('predator.jpg')";
    borders();
    predator.style.border = "solid gray";
}
scorpion.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('scorpion.jpg')";
    borders();
    scorpion.style.border = "solid gray";
}
fourportrait.onclick = function(){
    video.style.opacity = "0";
    viewer.style.backgroundImage= "url('4portrait.png')";
    borders();
    fourportrait.style.border = "solid gray";
}

function borders(){
    bigben.style.border = "";
    bigboss.style.border = "";
    brushes.style.border = "";
    buildings.style.border = "";
    dragon.style.border = "";
    dragonfly.style.border = "";
    face.style.border = "";
    godofwar.style.border = "";
    kaz.style.border = "";
    kratos.style.border = "";
    latin_art.style.border = "";
    love.style.border = "";
    pinkfloyd.style.border = "";
    metallica.style.border = "";
    phoenix.style.border = "";
    pinkfloydhand.style.border = "";
    portrait.style.border = "";
    predator.style.border = "";
    scorpion.style.border = "";
    fourportrait.style.border = "";

}