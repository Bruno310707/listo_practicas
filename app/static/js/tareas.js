// 1. Contador de caracteres y Vista Previa en tiempo real para el título
const campoTitulo = document.getElementById("title");
const contador = document.getElementById("contador-caracteres");
const vistaPrevia = document.getElementById("vista-previa"); // 👈 Nuevo: elemento para la vista previa
const MAX_CARACTERES = 100;

if (campoTitulo) {
    campoTitulo.addEventListener("input", () => {
        const longitudActual = campoTitulo.value.length;

        // Actualiza el contador
        if (contador) {
            contador.textContent = `${longitudActual} / ${MAX_CARACTERES} caracteres`;
            if (longitudActual > MAX_CARACTERES) {
                contador.classList.add("text-danger", "fw-bold");
                contador.classList.remove("text-muted");
            } else {
                contador.classList.remove("text-danger", "fw-bold");
                contador.classList.add("text-muted");
            }
        }

        // Actualiza la vista previa usando textContent (evita ataques XSS)[cite: 32, 33]
        if (vistaPrevia) {
            vistaPrevia.textContent = campoTitulo.value; // 👈 Muestra texto plano de forma segura
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