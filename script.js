const seleccionador = document.getElementById('boton-seleccionador');

seleccionador.addEventListener('change', function() {
    // 'this.value' toma el valor del atributo 'value' del option seleccionado
    if (this.value === "6-colores") {
        console.log("Elegiste 6 colores");
    } else if (this.value === "8-colores") {
        console.log("Elegiste 8 colores");
    } else if (this.value === "9-colores") {
        console.log("Elegiste 9 colores");
    }
});

