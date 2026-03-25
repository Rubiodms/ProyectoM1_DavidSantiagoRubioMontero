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

//FUNCION DE CONVERSION DE COLORES
// Convierte R, G, B a Hexadecimal
function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('').toUpperCase();
}

// Convierte R, G, B a HSL
function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

//Logica de boton actualizada
boton.addEventListener('click', function() {
    const textoOriginal = this.innerText;
    this.innerText = "Paleta generada!!!!!";

    for (let i = 0; i < paletas.length; i++) {
        // Generamos números base
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        // Guardamos los valores en la caja para que el selector de formato pueda usarlos
        paletas[i].dataset.r = r;
        paletas[i].dataset.g = g;
        paletas[i].dataset.b = b;

        // Pintamos la caja y los textos
        actualizarInterfazCaja(paletas[i]);
    }

    setTimeout(() => {
        this.innerText = textoOriginal;
    }, 500);
});

function actualizarInterfazCaja(caja) {
    const r = parseInt(caja.dataset.r);
    const g = parseInt(caja.dataset.g);
    const b = parseInt(caja.dataset.b);
    const formatoSeleccionado = formatos.value; // El select de RGBA/HSL

    let textoFormato = "";
    let hex = rgbToHex(r, g, b);

    // Decidimos qué mostrar arriba
    if (formatoSeleccionado === "btn-hsl") {
        textoFormato = rgbToHsl(r, g, b);
    } else {
        textoFormato = `rgba(${r}, ${g}, ${b}, 1)`;
    }

    // Aplicamos el color de fondo (siempre usamos el formato seleccionado para el estilo)
    caja.style.backgroundColor = textoFormato;

    // Imprimimos en el párrafo
    let parrafo = caja.querySelector('p');
    if (parrafo) {
        parrafo.classList.add('textcolor');
        // Usamos innerHTML para el salto de línea y la negrita en HEX
        parrafo.innerHTML = `${textoFormato}<br><strong>${hex}</strong>`;
    }
}

// LOGICA DE SELECCION DE FORMATOS
// Cuando el usuario cambie de RGBA a HSL, actualizamos todas las cajas sin cambiar el color
formatos.addEventListener('change', function() {
    for (let i = 0; i < paletas.length; i++) {
        if (paletas[i].dataset.r) {
            actualizarInterfazCaja(paletas[i]);
        }
    }
});