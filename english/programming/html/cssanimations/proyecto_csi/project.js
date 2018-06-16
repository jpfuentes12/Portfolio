
var cadaver = document.getElementById("cadaver");
var cadaver_sld=false;
var gun = document.getElementById("gun");
var gun_sld=false;
var guitar = document.getElementById("guitar");
var guitar_sld=false;
var tenis_paddles = document.getElementById("tenis_paddles");
var tenis_paddles_sld=false;
var wine_bottle = document.getElementById("wine_bottle");
var wine_bottle_sld=false;
var portrait = document.getElementById("portrait");
var portrait_sld=false;
var safe = document.getElementById("safe");
var safe_sld=false;
var book = document.getElementById("book");
var book_sld=false;
var bra = document.getElementById("bra");
var bra_sld=false;
var mag_glass = document.getElementById("mag_glass");
var mag_glass_sld=false;
var keys = document.getElementById("keys");
var keys_sld=false;
var pencil = document.getElementById("pencil");
var pencil_sld=false;
var tie = document.getElementById("tie");
var tie_sld=false;
var certificate = document.getElementById("certificate");
var certificate_sld=false;
var man = document.getElementById("man");
var woman = document.getElementById("woman");
var boy = document.getElementById("boy");
var popup = document.getElementById("popup");
var popuptxt = document.getElementById("popuptxt");
var popup_select = document.getElementById("popup_select");
var crime_scene = document.getElementById("crime_scene");
var try_again = document.getElementById("try_again");
var weapon = 0;
var murderer = 0;
var clues = 0;
var lives_n = 3;



cadaver.onclick = function () {
    lits();
    document.getElementById("cadaver").style.backgroundImage = "url('CADAVER_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('CADAVER_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('CADAVER_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
     document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
        document.getElementById("popup_select").style.transform="translateY(0) scale(1)";
    document.getElementById("popup_select").style.backgroundImage="url('nothing.png')";
    document.getElementById("popup_select").style.width = "500px";
    document.getElementById("popup_select").style.height = "250px";
    document.getElementById("popup_select").style.opacity = "0";
    if(cadaver_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        cadaver_sld = true;

}

gun.onclick = function(){
    lits();
    document.getElementById("gun").style.backgroundImage = "url('ARMA_lit.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('ARMA_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('ARMA_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 1;
    if(gun_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        gun_sld = true;
}

guitar.onclick = function(){
    lits();
    document.getElementById("guitar").style.backgroundImage = "url('GUITARRA_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1600px) scale(3.5)";
    document.getElementById("popup").style.backgroundImage="url('GUITARRA_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('GUITARRA_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 2;
    if(guitar_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        guitar_sld = true;
}
tenis_paddles.onclick = function(){
    lits();
    document.getElementById("tenis_paddles").style.backgroundImage = "url('TENNIS_PADDLES_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popup").style.backgroundImage="url('TENNIS_PADDLES_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('TENNIS_PADDLES_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 3;
    if(tenis_paddles_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        tenis_paddles_sld = true;
}

wine_bottle.onclick = function(){
    lits();
    document.getElementById("wine_bottle").style.backgroundImage = "url('WINE_BOTTLE_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('WINE_BOTTLE_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('WINE BOTTLE_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 4;
    if(wine_bottle_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        wine_bottle_sld = true;
}
portrait.onclick = function(){
    lits();
    document.getElementById("portrait").style.backgroundImage = "url('RETRATO_LIT.png')";
        document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popup").style.backgroundImage="url('RETRATO_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
            document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('RETRATO_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    

    if(portrait_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
    portrait_sld = true;
    document.getElementById("man").style.width= "300px";
    document.getElementById("man").style.height= "400px";
    document.getElementById("man").style.backgroundImage= "url('MAN.png')";
    document.getElementById("man").style.border= "solid black";
    document.getElementById("man").style.transition= "2s";
    document.getElementById("woman").style.width= "300px";
    document.getElementById("woman").style.height= "400px";
    document.getElementById("woman").style.backgroundImage= "url('WOMAN.png')";
    document.getElementById("woman").style.border= "solid black";
    document.getElementById("woman").style.transition= "2s";
    document.getElementById("boy").style.width= "300px";
    document.getElementById("boy").style.height= "400px";
    document.getElementById("boy").style.backgroundImage= "url('BOY.png')";
    document.getElementById("boy").style.border= "solid black";
    document.getElementById("boy").style.transition= "2s";
}
safe.onclick = function(){
    lits();
    document.getElementById("safe").style.backgroundImage = "url('CAJA_FUERTE_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1500px) scale(4)";
    document.getElementById("popup").style.backgroundImage="url('CAJA_FUERTE_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('CAJA_FUERTE_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 5;
    if(safe_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        safe_sld = true;

}
book.onclick = function(){
    lits();
    document.getElementById("book").style.backgroundImage = "url('BOOK_lit.png')";
        document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(4)";
    document.getElementById("popup").style.backgroundImage="url('BOOK_cu.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "225px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('BOOK_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";

    weapon = 6;
    if(book_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        book_sld = true;
}
bra.onclick = function(){
    lits();
    document.getElementById("bra").style.backgroundImage = "url('BRA_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(5)";
    document.getElementById("popup").style.backgroundImage="url('BRA_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('BRA_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 7;
    if(bra_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        bra_sld = true;
}
mag_glass.onclick = function(){
    lits();
    document.getElementById("mag_glass").style.backgroundImage = "url('LUPA_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('LUPA_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('LUPA_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 8;
    if(mag_glass_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        mag_glass_sld = true;
}
keys.onclick = function(){
    lits();
    document.getElementById("keys").style.backgroundImage = "url('KEYS_LIT.png')";
        document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('KEYS_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
    document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('KEYS_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 9;
    if(keys_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        keys_sld = true;
}
pencil.onclick = function(){
    lits();
    document.getElementById("pencil").style.backgroundImage = "url('PENCIL_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('PENCIL_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('PENCIL_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 10;
    if(pencil_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        pencil_sld = true;
}
tie.onclick = function(){
    lits();
    variables();
    document.getElementById("tie").style.backgroundImage = "url('CORBATA_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('CORBATA_LIT.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('CORBATA_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";
    document.getElementById("popup_select").style.backgroundImage="url('popup_select_weapon.png')";
    document.getElementById("popup_select").style.width = "200px";
    document.getElementById("popup_select").style.height = "90px";
    document.getElementById("popup_select").style.opacity = "1";
    document.getElementById("popup_select").style.transition = "1s";
     document.getElementById("popup_select").style.transitionDelay = "0.4s";
    weapon = 11;
    if(tie_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        tie_sld = true;
}
certificate.onclick = function(){
    lits();
    variables();
    document.getElementById("certificate").style.backgroundImage = "url('CERTIFICADO_LIT.png')";
    document.getElementById("popup").style.opacity = "1";
    document.getElementById("popup").style.transition= "1s";
    document.getElementById("popup").style.transform="translateX(1700px) scale(3)";
    document.getElementById("popup").style.backgroundImage="url('CERTIFICADO_cu.png')";
                document.getElementById("popuptxt").style.opacity = "1";
    document.getElementById("popuptxt").style.transition= "1s";
    document.getElementById("popuptxt").style.transform="translateX(1700px) scale(3.5)";
    document.getElementById("popuptxt").style.backgroundImage="url('CERTIFICADO_TXT.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
    document.getElementById("popup_select").style.transform="translateY(50px) scale(3.5)";

    weapon = 12;
    if(certificate_sld == false){
   clues = clues +1;
document.getElementById("clues_n").innerHTML = clues + "/14";
    }
        certificate_sld = true;
}
man.onclick = function(){
    lits();
    document.getElementById("woman").style.backgroundImage= "url('WOMAN.png')";
    document.getElementById("boy").style.backgroundImage= "url('BOY.png')";
    document.getElementById("man").style.backgroundImage = "url('MAN_LIT.png')";
    murderer = 1;
    variables();
}
woman.onclick = function(){
    lits();
    document.getElementById("man").style.backgroundImage= "url('MAN.png')";
    document.getElementById("boy").style.backgroundImage= "url('BOY.png')";
    document.getElementById("woman").style.backgroundImage = "url('WOMAN_LIT.png')";
    murderer = 2;
    variables();
}
boy.onclick = function(){
    lits();
    document.getElementById("boy").style.backgroundImage = "url('BOY_LIT.png')";
     document.getElementById("man").style.backgroundImage= "url('MAN.png')";
    document.getElementById("woman").style.backgroundImage= "url('WOMAN.png')";
    murderer = 3;
    variables();
}
popup.onclick = function(){
    lits();
    variables();
    document.getElementById("popup").style.opacity = "0";
    document.getElementById("popup").style.transform="translateX(0) scale(1)";
    document.getElementById("popup").style.backgroundImage="url('nothing.png')";
    document.getElementById("popup").style.width = "500px";
    document.getElementById("popup").style.height = "500px";
        document.getElementById("popuptxt").style.opacity = "0";
    document.getElementById("popuptxt").style.transform="translateX(0) scale(1)";
    document.getElementById("popuptxt").style.backgroundImage="url('nothing.png')";
    document.getElementById("popuptxt").style.width = "500px";
    document.getElementById("popuptxt").style.height = "100px";
        document.getElementById("popuptxt").style.opacity = "0";
    document.getElementById("popup_select").style.transform="translateY(0) scale(1)";
    document.getElementById("popup_select").style.backgroundImage="url('nothing.png')";
    document.getElementById("popup_select").style.width = "500px";
    document.getElementById("popup_select").style.height = "250px";
    document.getElementById("popup_select").style.opacity = "0";

}
popup_select.onclick = function() {
    variables();
    if(weapon == 1){
        document.getElementById("weapon").style.backgroundImage= "url('ARMA.png')";
            document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "400px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 2){
        document.getElementById("weapon").style.backgroundImage= "url('GUITARRA.png')";
        document.getElementById("weapon").style.width = "400px";
        document.getElementById("weapon").style.height = "400px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 3){
        document.getElementById("weapon").style.backgroundImage= "url('TENNIS_PADDLES.png')";
        document.getElementById("weapon").style.width = "400px";
        document.getElementById("weapon").style.height = "400px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 4){
        document.getElementById("weapon").style.backgroundImage= "url('WINE_BOTTLE.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 5){
        document.getElementById("weapon").style.backgroundImage= "url('CAJA_FUERTE.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 6){
        document.getElementById("weapon").style.backgroundImage= "url('BOOK.png')";
        document.getElementById("weapon").style.marginTop = "2600px";
        document.getElementById("weapon").style.width = "400px";
        document.getElementById("weapon").style.height = "180px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 7){
        document.getElementById("weapon").style.backgroundImage= "url('BRA.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 8){
        document.getElementById("weapon").style.backgroundImage= "url('LUPA.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 9){
        document.getElementById("weapon").style.backgroundImage= "url('KEYS.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 10){
        document.getElementById("weapon").style.backgroundImage= "url('PENCIL.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 11){
        document.getElementById("weapon").style.backgroundImage= "url('CORBATA.png')";
        document.getElementById("weapon").style.width = "500px";
        document.getElementById("weapon").style.height = "500px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.transition = "1s";
    }
        if(weapon == 12){
        document.getElementById("weapon").style.backgroundImage= "url('CERTIFICADO.png')";
        document.getElementById("weapon").style.width = "400px";
        document.getElementById("weapon").style.marginTop = "2450px";
        document.getElementById("weapon").style.height = "400px";
        document.getElementById("weapon").style.transition = "1s";
    }
    
}
crime_scene.onclick = function(){
    if(weapon==4 && murderer==3 && clues==14){
        window.location.href= "credits.html";
    } else {
        document.getElementById("crime_scene").style.animation= "crime_scene_correct 0.2s ease-in-out";
        setTimeout(function(){
            document.getElementById("crime_scene").style.animation= "";
        },100)
        lives_n = lives_n-1;
            }
    lives();
    if(lives_n == 0){
        document.getElementById("lives_n").style.backgroundImage = "url('nothing.png')";
        gameover();
        document.getElementById("gameover").style.transform = "scale(130)" ;
        document.getElementById("gameover").style.marginTop = "1500px";
        document.getElementById("gameover").style.opacity= "1";
        document.getElementById("gameover").style.transition="2s";
        document.getElementById("try_again").style.opacity = "1";
        document.getElementById("try_again").style.transform= "scale(40)";
        document.getElementById("try_again").style.transition= "2s";
        document.getElementById("try_again").style.marginTop = "2200px";
    }
}
try_again.onclick = function(){
    location.reload();
}
function variables(){
    if(weapon==4 && murderer==3 && clues==14){
    document.getElementById("crime_scene").style.backgroundImage= "url('crime_scene_correct_true.png')";
    document.getElementById("crime_scene").style.animation = "move 1s ease-in-out alternate-reverse infinite"
}
}
function lives(){
  if(lives_n == 3){
      document.getElementById("lives_n").style.backgroundImage= "url('lives_3.png')";
  }  else 
      if(lives_n ==2){
          document.getElementById("lives_n").style.backgroundImage= "url('lives_2.png')";
      } else 
          if(lives_n == 1){
              document.getElementById("lives_n").style.backgroundImage= "url('lives_1.png')";
          } 
}

function lits() {
    document.getElementById("cadaver").style.backgroundImage = "url('CADAVER.png')";
    document.getElementById("gun").style.backgroundImage = "url('ARMA.png')";
    document.getElementById("guitar").style.backgroundImage = "url('GUITARRA.png')";
    document.getElementById("tenis_paddles").style.backgroundImage = "url('TENNIS_PADDLES.png')";
    document.getElementById("wine_bottle").style.backgroundImage = "url('WINE_BOTTLE.png')";
    document.getElementById("portrait").style.backgroundImage = "url('RETRATO.png')";
    document.getElementById("safe").style.backgroundImage = "url('CAJA_FUERTE.png')";
    document.getElementById("book").style.backgroundImage = "url('BOOK.png')";
    document.getElementById("bra").style.backgroundImage = "url('BRA.png')";
    document.getElementById("mag_glass").style.backgroundImage = "url('LUPA.png')";
    document.getElementById("keys").style.backgroundImage = "url('KEYS.png')";
    document.getElementById("pencil").style.backgroundImage = "url('PENCIL.png')";
    document.getElementById("tie").style.backgroundImage = "url('CORBATA.png')";
    document.getElementById("certificate").style.backgroundImage = "url('CERTIFICADO.png')";

}
function gameover(){
    document.getElementById("screen").style.opacity = "0.5";
    document.getElementById("scene").style.opacity = "0.5";
    document.getElementById("table").style.opacity = "0.5";
    document.getElementById("cadaver").style.opacity = "0.5";
    document.getElementById("gun").style.opacity = "0.5";
    document.getElementById("clock").style.opacity = "0.5";
    document.getElementById("hours").style.opacity = "0.5";
    document.getElementById("minutes").style.opacity = "0.5";
    document.getElementById("seconds").style.opacity = "0.5";
    document.getElementById("light").style.opacity = "0.5";
    document.getElementById("guitar").style.opacity = "0.5";
    document.getElementById("tenis_paddles").style.opacity = "0.5";
    document.getElementById("tenis_ball").style.opacity = "0.5";
    document.getElementById("wine_bottle").style.opacity = "0.5";
    document.getElementById("portrait").style.opacity = "0.5";
    document.getElementById("safe").style.opacity = "0.5";
    document.getElementById("book").style.opacity = "0.5";
    document.getElementById("bra").style.opacity = "0.5";
    document.getElementById("mag_glass").style.opacity = "0.5";
    document.getElementById("keys").style.opacity = "0.5";
    document.getElementById("pencil").style.opacity = "0.5";
    document.getElementById("tie").style.opacity = "0.5";
    document.getElementById("certificate").style.opacity = "0.5";
    document.getElementById("popup").style.opacity = "0.5";
    document.getElementById("popuptxt").style.opacity = "0.5";
    document.getElementById("popup_select").style.opacity = "0.5";
    document.getElementById("scene_name").style.opacity = "0.5";
    document.getElementById("lives").style.opacity = "0.5";
    document.getElementById("lives_n").style.opacity = "0.5";
    document.getElementById("clues").style.opacity = "0.5";
    document.getElementById("clues_n").style.opacity = "0.5";
    document.getElementById("weapon_box").style.opacity = "0.5";
    document.getElementById("weapon").style.opacity = "0.5";
    document.getElementById("murderer_box").style.opacity = "0.5";
    document.getElementById("man").style.opacity = "0.5";
    document.getElementById("woman").style.opacity = "0.5";
    document.getElementById("boy").style.opacity = "0.5";
    document.getElementById("crime_scene_box").style.opacity = "0.5";
    document.getElementById("crime_scene").style.opacity = "0.5";
    document.getElementById("cadaver").style.opacity = "0.5";
}
