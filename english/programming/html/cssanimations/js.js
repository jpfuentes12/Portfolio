
var navalla = document.getElementById("navalla");
var navalla_selected = false;
var cadira = document.getElementById("cadira");
var cadira_selected = false;
var carta = document.getElementById("carta");
var carta_selected = false;
var flor = document.getElementById("flor");
var flor_selected = false;
var paper = document.getElementById("paper");
var paper_selected = false;
var poster_1 = document.getElementById("poster_1");
var poster_1_selected = false;
var poster_2 = document.getElementById("poster_2");
var poster_2_selected = false;
var poster_3 = document.getElementById("poster_3");
var poster_3_selected = false;
var rata = document.getElementById("rata");
var rata_selected = false;
var mort = document.getElementById("mort");
var mort_selected = false;
var weapon = document.getElementById("weapon");
var weapon_selected = false;
var popup_select = document.getElementById("popup_select");
var crime_scene = document.getElementById("crime_scene");
var back = document.getElementById("back");
var try_again = document.getElementById("try_again");

var weapon_number = 0;
var murderer = 0;
var clues = 0;
var lives_number = 3;


navalla.onclick = function(){
    weapon_number = 1;
    if(navalla_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    navalla_selected = true;
    
    variables();
    butset();
}
cadira.onclick = function(){
    weapon_number = 2;
    if(cadira_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    cadira_selected = true;
    
    variables();
    butset();
}
carta.onclick = function(){

    weapon_number = 3;
    if(carta_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    carta_selected = true;
    butset();
    variables();
}
flor.onclick = function(){

    weapon_number = 4;
    if(flor_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    flor_selected = true;
       
    document.getElementById("petal").style.animation = "petal 3s ";
    setTimeout(function () {
        document.getElementById("petal").style.animation = "";
    }, 3000)
    butset();
    variables();
}
paper.onclick = function(){

    weapon_number = 5;
    if(paper_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    paper_selected = true;
    butset();
    variables();
}
poster_1.onclick = function(){

    weapon_number = 6;
    if(poster_1_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    poster_1_selected = true;
    butset();
    variables();
}
poster_2.onclick = function(){

    weapon_number = 7;
    if(poster_2_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    poster_2_selected = true;
    butset();
    variables();
}
poster_3.onclick = function(){

    weapon_number = 8;
    if(poster_3_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    poster_3_selected = true;
    butset();
    variables();
}
rata.onclick = function(){

    weapon_number = 9;
    if(rata_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10"; 
    }
    rata_selected = true;
    butset();
    variables();
}
mort.onclick = function(){

    if(mort_selected == false){
        clues = clues +1;
        document.getElementById("clues_n").innerHTML = clues + "/10";
    }
    document.getElementById("murderer").style.backgroundImage="url('mort.png')";
    mort_selected = true;
    variables();

}



popup_select.onclick = function(){

    if(weapon_number == 1){
        document.getElementById("weapon").style.backgroundImage = "url('navalla.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 2){
        document.getElementById("weapon").style.backgroundImage = "url('cadira.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    } 
    if(weapon_number == 3){
        document.getElementById("weapon").style.backgroundImage = "url('carta.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 4){
        document.getElementById("weapon").style.backgroundImage = "url('flor.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 5){
        document.getElementById("weapon").style.backgroundImage = "url('paper.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 6){
        document.getElementById("weapon").style.backgroundImage = "url('poster_1.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 7){
        document.getElementById("weapon").style.backgroundImage = "url('poster_2.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 8){
        document.getElementById("weapon").style.backgroundImage = "url('poster_3.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 9){
        document.getElementById("weapon").style.backgroundImage = "url('rata.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";
    }
    if(weapon_number == 10){
        document.getElementById("weapon").style.backgroundImage = "url('mort.png')";
        document.getElementById("weapon").style.backgroundsize = "100%";
        document.getElementById("weapon").style.width = "300px";
        document.getElementById("weapon").style.height = "300";
        document.getElementById("weapon").style.transition = "1s";  
    }
}
back.onclick = function(){
    butset_normal();
}

function variables(){
    if(weapon_number == 1 && clues ==10){
        document.getElementById("crime_scene").style.backgroundImage = "url('crime_scene_correct_true.png')";
        
    }
}


crime_scene.onclick = function(){
    if(weapon_number == 1 && clues == 10){
       
        window.location.href = "project.html";
    } else {
        lives_number = lives_number -1;
        document.getElementById("crime_scene").style.animation = "crime_scene_correct 0.2s ease-in-out"
        setTimeout(function(){
            document.getElementById("crime_scene").style.animation = "";
        }, 100)
    }
    lives();
}
try_again.onclick = function(){
    location.reload();
}

function lives(){
      if(lives_number == 3){
      document.getElementById("lives_n").style.backgroundImage= "url('lives_3.png')";
  }  else 
      if(lives_number ==2){
          document.getElementById("lives_n").style.backgroundImage= "url('lives_2.png')";
      } else 
          if(lives_number == 1){
              document.getElementById("lives_n").style.backgroundImage= "url('lives_1.png')";
          } else if(lives_number == 0){
              document.getElementById("lives_n").style.backgroundImage= "url('nothing.png')";
              gameover();
          }
}
function butset(){
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "105px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
    document.getElementById("popup_select").style.transitionDelay = "0.4s";
    
    document.getElementById("back").style.transform="scale(2)";
    document.getElementById("back").style.backgroundImage="url('back.png')";
    document.getElementById("back").style.width = "200px";
    document.getElementById("back").style.height = "95px";
    document.getElementById("back").style.opacity = "1";
    document.getElementById("back").style.transition = "1s";
    document.getElementById("back").style.transitionDelay = "0.4s";
}
function butset_normal(){
    document.getElementById("popup_select").style.transform="translateY(0px) scale(1)";
    document.getElementById("popup_select").style.backgroundImage="url('nothing.png')";
    document.getElementById("popup_select").style.width = "100px";
    document.getElementById("popup_select").style.height = "53px";
    document.getElementById("popup_select").style.opacity = "0";
    document.getElementById("popup_select").style.transition = "1s";
    document.getElementById("popup_select").style.transitionDelay = "0.4s";
    
    document.getElementById("back").style.transform="translateY(0px) scale(1)";
    document.getElementById("back").style.backgroundImage="url('nothing.png')";
    document.getElementById("back").style.width = "100px";
    document.getElementById("back").style.height = "53px";
    document.getElementById("back").style.opacity = "0";
    document.getElementById("back").style.transition = "1s";
    document.getElementById("back").style.transitionDelay = "0.4s";
}
function gameover(){
    document.getElementById("popup_select").style.opacity="0";
    document.getElementById("scene_name").style.opacity="0.5";
    document.getElementById("lives").style.opacity="0.5";
    document.getElementById("lives_n").style.opacity="0.5";
    document.getElementById("clues").style.opacity="0.5";
    document.getElementById("clues_n").style.opacity="0.5";
    document.getElementById("weapon_box").style.opacity="0.5";
    document.getElementById("weapon").style.opacity="0.5";
    document.getElementById("murderer_box").style.opacity="0.5";
    document.getElementById("screen").style.opacity="0.5";
    document.getElementById("fons").style.opacity="0.5";
    document.getElementById("mort").style.opacity="0.5";
    document.getElementById("cadira").style.opacity="0.5";
    document.getElementById("carta").style.opacity="0.5";
    document.getElementById("flor").style.opacity="0.5";
    document.getElementById("navalla").style.opacity="0.5";
    document.getElementById("paper").style.opacity="0.5";
    document.getElementById("petal").style.opacity="0.5";
    document.getElementById("poster_1").style.opacity="0.5";
    document.getElementById("poster_2").style.opacity="0.5";
    document.getElementById("poster_3").style.opacity="0.5";
    document.getElementById("rata").style.opacity="0.5";
    document.getElementById("crime_scene_box").style.opacity="0.5";
    document.getElementById("crime_scene").style.opacity="0.5";
    document.getElementById("back").style.opacity="0";
    document.getElementById("murderer").style.opacity="0.5";
    document.getElementById("gameover").style.width= "2300px";
    document.getElementById("gameover").style.height= "2300px";
    document.getElementById("gameover").style.opacity= "1";
    document.getElementById("gameover").style.scale= "80";
    document.getElementById("try_again").style.width= "2000px";
    document.getElementById("try_again").style.height= "750px";
    document.getElementById("try_again").style.opacity= "1";
    document.getElementById("try_again").style.scale= "80";
}
