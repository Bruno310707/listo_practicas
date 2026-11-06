// 1. Contador de caracteres en tiempo real para el título de las tareas
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

// 2. Confirmación al eliminar tareas
const formulariosEliminar = document.querySelectorAll(".form-eliminar");

formulariosEliminar.forEach((formulario) => {
    formulario.addEventListener("submit", (evento) => {
        if (!confirm("¿Eliminar esta tarea?")) {
            evento.preventDefault();
        }
    });
});

// 3. Filtro de tareas en tiempo real
const buscador = document.getElementById("buscador-tareas");

if (buscador) {
    buscador.addEventListener("input", () => {
        const textoBusqueda = buscador.value.toLowerCase().trim();
        const tareas = document.querySelectorAll("[data-task-item]");

        tareas.forEach((tarea) => {
            const contenido = tarea.textContent.toLowerCase();
            if (contenido.includes(textoBusqueda)) {
                tarea.classList.remove("d-none");
            } else {
                tarea.classList.add("d-none");
            }
        });
    });
}