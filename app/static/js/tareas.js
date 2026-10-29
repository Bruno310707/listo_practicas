// Contador de caracteres en tiempo real para el título de las tareas
const campoTitulo = document.getElementById("title");
const contador = document.getElementById("contador-caracteres");
const MAX_CARACTERES = 100;

if (campoTitulo && contador) {
    campoTitulo.addEventListener("input", () => {
        const longitudActual = campoTitulo.value.length;
        contador.textContent = `${longitudActual} / ${MAX_CARACTERES} caracteres`;

        if (longitudActual > MAX_CARACTERES) {
            contador.classList.add("text-danger", "fw-bold");
            contador.classList.remove("text-muted");
        } else {
            contador.classList.remove("text-danger", "fw-bold");
            contador.classList.add("text-muted");
        }
    });
}