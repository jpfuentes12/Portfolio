var video = document.getElementById("video");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var purple = document.getElementById("purple");
var green = document.getElementById("green");
var red = document.getElementById("red");
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var loop = document.getElementById("loop");
var low = document.getElementById("volume_low");
var high = document.getElementById("volume_high");
var mute = document.getElementById("volume_mute");

video.loop = false;
video.volume = 0.5;
yellow.onclick = function(){
    video.src= "build.mp4";
    video.poster= "build.png";
    video.load();
    fondos();
    controles();
    document.getElementById("yellow").style.backgroundImage = "url('yellow_lit.png')";

}
blue.onclick = function(){
    video.src= "earth.mp4";
    video.poster ="earth.png";
    fondos();
    controles();
    document.getElementById("blue").style.backgroundImage = "url('blue_lit.png')";


}
purple.onclick = function(){
    video.src= "flag.mp4";
    video.poster ="flag.png";
    fondos();
    controles();
    document.getElementById("purple").style.backgroundImage = "url('purple_lit.png')";



}
green.onclick = function(){
    video.src= "monkey.mp4";
    video.poster ="monkey.png";
    fondos();
    controles();
    document.getElementById("green").style.backgroundImage = "url('green_lit.png')";


}
red.onclick = function(){
    video.src= "fur.mp4";
    video.poster ="fur.png";
    fondos();
    controles();
    document.getElementById("red").style.backgroundImage = "url('red_lit.png')";


}
function fondos(){
            document.getElementById("yellow").style.backgroundImage = "url('yellow_off.png')";
            document.getElementById("blue").style.backgroundImage = "url('blue_off.png')";
            document.getElementById("purple").style.backgroundImage = "url('purple_off.png')";
            document.getElementById("green").style.backgroundImage = "url('green_off.png')";
            document.getElementById("red").style.backgroundImage = "url('red_off.png')";

}
function controles(){
                    document.getElementById("play").style.backgroundImage = "url('play_button.png')";
                    document.getElementById("pause").style.backgroundImage = "url('pause_button.png')";

}
play.onclick = function(){
    video.play();
    controles();
        document.getElementById("play").style.backgroundImage = "url('play_button_lit.png')";
}
pause.onclick = function(){
    video.pause();
    controles();
            document.getElementById("pause").style.backgroundImage = "url('pause_button_lit.png')";
}
loop.onclick = function(){
    
    if(video.loop == false){
                document.getElementById("loop").style.backgroundImage = "url('load_button_lit.png')";

    video.loop= true;
    } else{
                document.getElementById("loop").style.backgroundImage = "url('load_button.png')";

        video.loop =  false;
    }

}   
low.onclick = function(){
 video.volume = video.volume - 0.1;
}
high.onclick = function(){
 video.volume = video.volume + 0.1;
}
mute.onclick = function(){
    
    if(video.muted == false){
                document.getElementById("volume_mute").style.backgroundImage = "url('volume_mute_button_lit.png')";

    video.muted= true;
    } else{
                document.getElementById("volume_mute").style.backgroundImage = "url('volume_mute_button.png')";

        video.muted =  false;
    }

} 

function mousedown_l(){
    document.getElementById("volume_low").style.backgroundImage = "url('volume_low_button_lit.png')";
}
function mouseup_l(){
    document.getElementById("volume_low").style.backgroundImage = "url('volume_low_button.png')";
}
function mousedown_h(){
    document.getElementById("volume_high").style.backgroundImage = "url('volume_high_button_lit.png')";
}
function mouseup_h(){
    document.getElementById("volume_high").style.backgroundImage = "url('volume_high_button.png')";
}

