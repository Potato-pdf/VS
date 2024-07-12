// script.js

// Función para mostrar un mensaje de bienvenida
function showWelcomeMessage() {
    alert("Bienvenido a Mi Sitio Web");
}

// Función para validar el formulario de contacto
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }
    alert("Formulario enviado con éxito.");
    return true;
}

// Ejecutar función al cargar la página
window.onload = function() {
    showWelcomeMessage();
};

// Función para cambiar la imagen del banner al pasar el mouse
function changeBannerImage() {
    document.getElementById("banner").src = "images/banner2.jpg";
}

function revertBannerImage() {
    document.getElementById("banner").src = "images/banner1.jpg";
}
