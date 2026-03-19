//LOGICA PARA SELECCION DE PALETAS

//VARIABLES CONSTANTES
const seleccionador = document.getElementById('boton-seleccionador');
const paletas = document.getElementsByClassName('caja-color');
const contenedor_cajas = document.getElementById('contenedor-cajas'); //selecionamos el contenedor de las cajas del DOM
const boton = document.getElementById('boton');

seleccionador.addEventListener('change', function() {
    let hijos_actuales = contenedor_cajas.childElementCount;

    if (this.value === "6-colores") {
        // Si hay más de 6, quitamos las que sobran
        for (let i = hijos_actuales; i > 6; i--) {
            contenedor_cajas.removeChild(contenedor_cajas.lastElementChild);
        }

    } else if (this.value === "8-colores") {
        // Lógica para llegar a 8
        if (hijos_actuales == 6) {
          for (let i = hijos_actuales; i < 8; i++) {
            let nueva_caja = document.createElement('div'); // CREADA ADENTRO
            nueva_caja.innerHTML = '<p>HSL:<br>RGBA:</p>';
            nueva_caja.classList.add("caja-color");
            contenedor_cajas.appendChild(nueva_caja);
            }  
        }else{
            for (let i = hijos_actuales; i > 8; i--) {
            contenedor_cajas.removeChild(contenedor_cajas.lastElementChild);
            }
        }
        

    } else if (this.value === "9-colores") {
        // Lógica para llegar a 9
        for (let i = hijos_actuales; i < 9; i++) {
            let nueva_caja = document.createElement('div'); // CREADA ADENTRO
            nueva_caja.innerHTML = '<p>HSL:<br>RGBA:</p>';
            nueva_caja.classList.add("caja-color");
            contenedor_cajas.appendChild(nueva_caja);
        }
    }
});
//LOGICA PARA RANDOMIZADOR DE COLORES

//RANDOMIZADOR RGBA
var aleatorio_rgba = [];

var alpha = Math.random().toFixed(2)//se toman 2 numeros decimales despues de la coma (,)

