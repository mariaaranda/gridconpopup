"use stric"

// NODOS

//Botones
nodoBtnTodos   = document.querySelector ("#btntodos");
nodoBtnTierra  = document.querySelector ("#btntierra");
nodoBtnAgua    = document.querySelector ("#btnagua");
nodoBtnFuego   = document.querySelector ("#btnfuego");

//Listas
nodoListaImg     = document.querySelectorAll (".contain");
nodoListaTierra  = document.querySelectorAll (".imgtierra");
nodoListaAgua    = document.querySelectorAll (".imgagua");
nodoListaFuego   = document.querySelectorAll (".imgfuego");

// Overlays
listaOverlays   = document.querySelectorAll (".overlay");
nodoOverlay     = document.querySelector (".overlaymodal");
nodoModal       = document.querySelector (".modal"); 




// EVENTOS

let listaImg = nodoListaImg;


nodoBtnTierra.addEventListener ("click", function () {
    console.log ("Click en Tierra");
    for ( let i = 0 ; i < nodoListaImg.length; i++) {
        listaImg [i].classList.add ("off");    
    }
    
    for ( let i = 0; i < nodoListaTierra.length; i++) {
        nodoListaTierra [i].classList.remove ("off");
    }
})

nodoBtnAgua.addEventListener ("click", function () {
    console.log ("Click en Agua");
    for ( let i = 0 ; i < nodoListaImg.length; i++) {
        listaImg [i].classList.add ("off");    
    }
    
    for (let i = 0; i < nodoListaAgua.length; i++) {
        nodoListaAgua [i].classList.remove ("off");
    }
})

nodoBtnFuego.addEventListener ("click", function () {
    console.log ("Click en Fuego");
    for ( let i = 0 ; i < nodoListaImg.length; i++) {
        listaImg [i].classList.add ("off");    
    }
    for ( let i = 0; i < nodoListaFuego.length; i++) {
        nodoListaFuego [i].classList.remove ("off");
    }
})

nodoBtnTodos.addEventListener ("click", function () {
    for ( let i = 0; i < nodoListaImg.length; i++) {
        listaImg [i].classList.remove ("off");
    }
})

// CLICK OVERLAY IMAGEN

for ( let i = 0; i < listaOverlays.length; i++) {

    listaOverlays[i].addEventListener ( "click", function (){
        console.log ("Click en cada elemento");

        //ON Overlay Modal
        nodoOverlay.classList.remove ("off");
        let nodoPadre = this.parentNode;
            console.log(nodoPadre)
        let miImg = nodoPadre.querySelector("img")
            console.log (miImg)
        let srcClicado = miImg.src
       
        cambioImg (srcClicado);
    }); 

    
}
function cambioImg (srcClicado) {
    let nodoCambio = document.createElement ("img");
    nodoCambio.src = srcClicado
    nodoModal.innerHTML = "";
    nodoModal.appendChild (nodoCambio);
    console.log (nodoCambio)

    //Alternativa
    // nodoFoto.innerHTML = "<img src=" + srcClicado + ">"
}

nodoOverlay.addEventListener ("click", function () {
    nodoOverlay.classList.add ("off");
});







