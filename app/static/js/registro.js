// 1. Selección de elementos del DOM
const formulario = document.getElementById("registro");
const campoNombre = document.getElementById("name");
const campoEmail = document.getElementById("email");
const campoClave = document.getElementById("password");
const campoRepetida = document.getElementById("confirm");

// 2. Limpia errores de intentos anteriores
function limpiarErrores() {
    for (const campo of formulario.querySelectorAll(".is-invalid")) {
        campo.classList.remove("is-invalid");
    }
    for (const aviso of formulario.querySelectorAll(".invalid-feedback")) {
        aviso.remove();
    }
}

// 3. Muestra mensaje de error en rojo bajo el campo correspondiente
function mostrarError(campo, mensaje) {
    campo.classList.add("is-invalid");
    const aviso = document.createElement("div");
    aviso.classList.add("invalid-feedback");
    aviso.textContent = mensaje;
    campo.parentElement.appendChild(aviso);
}

// 4. Comprobación en tiempo real de contraseñas
function comprobarClaves() {
    limpiarErrores();
    const escrita = campoRepetida.value !== "";
    const distintas = campoRepetida.value !== campoClave.value;

    campoRepetida.classList.toggle("error", escrita && distintas);
    campoRepetida.classList.toggle("correcto", escrita && !distintas);
}

// 5. Escuchadores de eventos para tiempo real
campoRepetida.addEventListener("input", comprobarClaves);
campoClave.addEventListener("input", comprobarClaves);

// 6. Validación completa al pulsar "Crear cuenta"
formulario.addEventListener("submit", (evento) => {
    limpiarErrores();
    let hayErrores = false;

    if (campoNombre.value.trim() === "") {
        mostrarError(campoNombre, "El nombre es obligatorio.");
        hayErrores = true;
    }
    if (!campoEmail.value.includes("@")) {
        mostrarError(campoEmail, "El correo debe contener una arroba.");
        hayErrores = true;
    }
    if (campoClave.value.length < 6) {
        mostrarError(campoClave, "La contraseña necesita al menos 6 caracteres.");
        hayErrores = true;
    }
    if (campoClave.value !== campoRepetida.value) {
        mostrarError(campoRepetida, "Las contraseñas no coinciden.");
        hayErrores = true;
    }

    if (hayErrores) {
        evento.preventDefault();
    }
});