/****AQUI ESTAN LAS FUNCIONES DE LA WEBPAGE */
/** Funcion mostrar */
function show (batswindow){
    document.getElementById(batswindow).style.visibility="visible";} // al clickar salen los bats
function show (ghost){
    document.getElementById(ghost).style.visibility="visible";} // al clickar sale el fantasma
function show (pumpkin){
    document.getElementById(pumpkin).style.visibility="visible";} // muestra las letras al acercar el raton
function hide(pumpkin){
    document.getElementById(pumpkin).style.visibility="hidden";}    // oculta las letras al sacar el raton

function sound (bgmusic){
    document.getElementById(bgmusic).audio.play();}
