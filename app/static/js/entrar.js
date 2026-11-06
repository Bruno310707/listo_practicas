const formulario = document.getElementById("entrar");
const campoEmail = document.getElementById("email");
const campoClave = document.getElementById("password");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        limpiarErrores(formulario);
        let hayErrores = false;

        if (!campoEmail.value.includes("@")) {
            mostrarError(campoEmail, "El correo debe contener una arroba.");
            hayErrores = true;
        }

        if (campoClave.value.trim() === "") {
            mostrarError(campoClave, "Escribe tu contraseña.");
            hayErrores = true;
        }

        if (hayErrores) {
            evento.preventDefault();
        }
    });
}