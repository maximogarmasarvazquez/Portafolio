
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

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("bootstrap");
        habilidades[4].classList.add("com");
        habilidades[5].classList.add("responsabilidad");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("aprendizaje");
        habilidades[8].classList.add("creatividad");
    }
}

//detectp el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

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