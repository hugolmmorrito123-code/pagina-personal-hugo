
// CAMBIAR MODO OSCURO / CLARO
function cambiarModo() {
    document.body.classList.toggle("oscuro");

    const boton = document.getElementById("modo");

    if (document.body.classList.contains("oscuro")) {
        boton.innerHTML = "☀️";
    } else {
        boton.innerHTML = "🌙";
    }
}

// SALUDO INTERACTIVO
function saludar() {
    const mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "¡Gracias por visitar mi espacio de recuerdos! Un gran saludo. 😊";
}
