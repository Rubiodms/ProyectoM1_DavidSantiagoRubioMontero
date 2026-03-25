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
    // 1. Guardamos el texto original para no perderlo
    const textoOriginal = this.innerText;

    // 2. Cambiamos el texto inmediatamente al hacer clic
    this.innerText = "Paleta generada!!!!!";
    for (let i = 0; i < paletas.length; i++) {
        // Generamos un color nuevo para cada vuelta del bucle
        let nuevoColor = generarColor();
        
        // Aplicamos el color a la paleta actual [i]
        paletas[i].style.backgroundColor = nuevoColor;
        
        // Opcional: Mostrar el código en el texto del párrafo
        let parrafo = paletas[i].querySelector('p');
        if (parrafo) {
            parrafo.innerText = `Color: ${nuevoColor}`;
            parrafo.classList.add('textcolor');
        }
    }

    // 3. Volvemos al texto original después de 2 segundos (2000 ms)
    setTimeout(() => {
        this.innerText = textoOriginal;
    }, 500);

    
});