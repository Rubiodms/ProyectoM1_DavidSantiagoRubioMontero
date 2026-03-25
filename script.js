//LOGICA PARA SELECCION DE PALETAS

//VARIABLES CONSTANTES
const seleccionador = document.getElementById('boton-seleccionador');
const paletas = document.getElementsByClassName('caja-color');
const contenedor_cajas = document.getElementById('contenedor-cajas'); //selecionamos el contenedor de las cajas del DOM
const boton = document.getElementById('boton');
const formatos = document.getElementById('btn-formato');

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
            let parrafo = nueva_caja.querySelector('p');
            if (parrafo) {
                parrafo.classList.add('textcolor'); 
            }
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
            let parrafo = nueva_caja.querySelector('p');
            if (parrafo) {
                parrafo.classList.add('textcolor'); 
            }
            nueva_caja.classList.add("caja-color");
            contenedor_cajas.appendChild(nueva_caja);
        }
    }
});
//LOGICA PARA RANDOMIZADOR DE COLORES

//RANDOMIZADOR RGBA
// 1. Función para generar UN color RGBA aleatorio
function generarColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let a = Math.random().toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}



// 3. Recorremos la colección de cajas
boton.addEventListener('click', function(){
    
    const textoOriginal = this.innerText;
    this.innerText = "Paleta generada!!!!!";

    for (let i = 0; i < paletas.length; i++) {
        // Generamos un color nuevo para cada vuelta del bucle
        let nuevoColor = generarColor();
        
        // Aplicamos el color a la paleta actual [i]
        paletas[i].style.backgroundColor = nuevoColor;
        
        
        // Mostrar el código en el texto del párrafo
        let parrafo = paletas[i].querySelector('p');
        if (parrafo) {
            parrafo.innerText = `${nuevoColor}`;
            parrafo.classList.add('textcolor');
        }
    }

    setTimeout(() => {
        this.innerText = textoOriginal;
    }, 500);
 
});

//LOGICA DE SELECCION DE FORMATOS
formatos.addEventListener('change', function(){
    if (this.value === "btn-hsl") {
      
    }

    
    
    
});