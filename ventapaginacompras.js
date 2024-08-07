document.addEventListener('DOMContentLoaded', function() {
    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(seccionId) {
        // Ocultar todas las secciones
        var secciones = document.querySelectorAll('section');
        secciones.forEach(function(seccion) {
            seccion.style.display = 'none';
        });

        // Mostrar la sección especificada
        var seccionMostrar = document.getElementById(seccionId);
        if (seccionMostrar) {
            seccionMostrar.style.display = 'block';
        }
    }

    // Obtener todos los enlaces del menú
    var enlacesMenu = document.querySelectorAll('nav ul li a');

    // Asignar event listener a cada enlace del menú
    enlacesMenu.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            // Prevenir el comportamiento por defecto del enlace (navegación)
            event.preventDefault();

            // Obtener el ID de la sección a mostrar desde el atributo href del enlace
            var seccionId = enlace.getAttribute('href').substring(1);

            // Mostrar la sección correspondiente
            mostrarSeccion(seccionId);
        });
    });

    // Mostrar la sección "inicio" por defecto al cargar la página
    mostrarSeccion('inicio');
});
