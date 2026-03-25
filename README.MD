# 🎨 Generador de Paletas de Colores

Una aplicación web interactiva diseñada para ayudar a Colorfly Studio a generar paletas de colores aleatorias de forma rápida. El proyecto permite visualizar colores en diferentes formatos técnicos y gestionar la cantidad de muestras en pantalla dinámicamente.

## 🚀 Características

- **Generación Aleatoria:** Crea paletas únicas con un solo clic.
- **Formatos de Color:** Soporte para visualizar códigos en **RGBA**, **HSL** y **HEX**.
- **Conversión en Tiempo Real:** Cambia el formato de visualización sin perder el color actual de la paleta.
- **Configuración Dinámica:** Elige entre mostrar 6, 8 o 9 bloques de color simultáneamente.
- **Interfaz Responsiva:** Diseño adaptado al alto de pantalla usando unidades `vh`.

## 🛠️ Tecnologías Utilizadas

- **HTML5:** Estructura semántica.
- **CSS3:** Diseño personalizado, Flexbox para la disposición de cajas y variables de viewport.
- **JavaScript :** Lógica de generación de colores, algoritmos de conversión (RGB a HSL/HEX) y manipulación del DOM.
- **Bootstrap 5:** Utilizado para la base de estilos y componentes responsivos.

## 📋 Cómo Funciona la Lógica

El proyecto utiliza un sistema de **identidad de color persistente** mediante `dataset` en el DOM:

1. Al generar una paleta, se crean valores base en RGB.
2. Estos valores se almacenan internamente en cada elemento HTML.
3. Las funciones de conversión matemática transforman estos valores base al formato deseado (HSL o HEX) sin necesidad de generar un color nuevo al cambiar de opción.

## 🔧 Instalación y Uso

1. Clona este repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/generador-paletas.git](https://github.com/tu-usuario/generador-paletas.git)
   ```
