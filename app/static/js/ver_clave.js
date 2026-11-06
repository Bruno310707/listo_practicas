document.addEventListener("DOMContentLoaded", () => {
    const botonOjo = document.getElementById("toggle-password");
    const campoClave = document.getElementById("password");

    if (botonOjo && campoClave) {
        botonOjo.addEventListener("click", (evento) => {
            evento.preventDefault();

            // Cambia el tipo de input entre password y text
            const esPassword = campoClave.type === "password";
            campoClave.type = esPassword ? "text" : "password";

            // Cambia el icono del ojo
            const icono = botonOjo.querySelector("i");
            if (icono) {
                icono.classList.toggle("bi-eye", !esPassword);
                icono.classList.toggle("bi-eye-slash", esPassword);
            }
        });
    }
});