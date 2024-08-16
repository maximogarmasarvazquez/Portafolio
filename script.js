
let menuV = false;
//Funcion ocultar o mostar

function mostrarOcultarMenu(){
    if(menuV){
        document.getElementById("nav").classList="";
        menuV = false ;
    }else{
        document.getElementById("nav").classList = "responsive";
        menuV = true;
    }
}

function seleccionar(){
//el menu se ocuta una vez que selecciono una opcion
  document.getElementById("nav").classList="";
  menuV = false;
}

//funcion que aplica las animaciones



function esPantallaTactil() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }

  function ignorarPrimerClic(event) {
    if (esPantallaTactil() && (!event.target.dataset.primerClic || event.target.dataset.primerClic === "true")) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      event.target.dataset.primerClic = "false";
    }
  }


  window.addEventListener('DOMContentLoaded', function() {
    var enlace = document.querySelectorAll('.enlace');
    enlace.forEach(function(e) {
      e.dataset.primerClic = "true";
      e.addEventListener('click', ignorarPrimerClic);
    });
  });