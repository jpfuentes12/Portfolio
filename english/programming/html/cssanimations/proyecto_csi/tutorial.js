var back = document.getElementById("back");
var next = document.getElementById("next");
var skip = document.getElementById("skip");
var tutorial=0;

next.onclick = function(){
    tutorial = tutorial +1;
    tut();
}
back.onclick = function(){
    tutorial = tutorial -1;
    tut();
}
skip.onclick = function(){
    window.location.href = "noia.html";
}



function tut(){
    if(tutorial == 0){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial.png')";
        document.getElementById("back").style.opacity = 0;
    }
    if(tutorial == 1){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_2.png')";
        document.getElementById("back").style.opacity = "1";
    }
    if(tutorial == 2){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_3.png')";
    }
    if(tutorial == 3){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_4.png')";
    }
    if(tutorial == 4){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_5.png')";
    }
    if(tutorial == 5){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_6.png')";
    }
    if(tutorial == 6){
        document.getElementById("tutorial").style.backgroundImage = "url('tutorial_7.png')";
    }
    if(tutorial == 7){
    window.location.href= "noia.html";
    }
}