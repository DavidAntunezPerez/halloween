/****AQUI ESTAN LAS FUNCIONES DE LA WEBPAGE */
/** Funcion mostrar */
/** Una función es un módulo que ejecuta una sola tarea, eligiendo bien su nombre podremos ejecutar correctamente nuestras funciones: show -> Muestra, hide -> Oculta... JS toma como objetivo principal document, que es la página html actual, tiene una serie de operadores, llamados getters, que seleccionan elementos para su manipulación. Un ejemplo de getter es : getElementById . Un elemento, seleccionado con un getter puede ser modificado: contenido, estilo, atributos... */

function show(batswindow){
    document.getElementById(batswindow).style.visibility="visible";} // al clickar salen los bats

function show(ghost){
    document.getElementById(ghost).style.visibility="visible";} // al clickar sale el fantasma

function show(pumpkin){
    document.getElementById(pumpkin).style.visibility="visible";} // muestra las letras al acercar el raton

function hide(pumpkin){
    document.getElementById(pumpkin).style.visibility="hidden";} // oculta las letras al sacar el raton

function sound(batssound){
    document.getElementById(batssound).play(); // bats sound
} 
function dissapear(cat){
    document.getElementById(cat).style.visibility="hidden";} // esconde al gato vivo
    
function sound(catdeadsound){
    document.getElementById(catdeadsound).play();} // catdeadsound

function show(catdead){
    document.getElementById(catdead).style.visibility="visible";} // show the dead cat

function sound(ghostsound){
    document.getElementById(ghostsound).play(); // bats sound
} 


