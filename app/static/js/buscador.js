const buscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sin-resultados");

if (buscador !== null) {
    // 1. Filtrado y resaltado en tiempo real al escribir
    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLowerCase();
        let visibles = 0;

        for (const tarea of document.querySelectorAll("[data-task-item]")) {
            const titulo = tarea.querySelector(".task-title").textContent.toLowerCase();
            const coincide = titulo.includes(texto);

            // Oculta las que no coinciden y resalta las que sí cuando hay texto
            tarea.classList.toggle("d-none", !coincide);
            tarea.classList.toggle("coincide", coincide && texto !== "");

            if (coincide) {
                visibles++;
            }
        }

        // Muestra el mensaje si no hay resultados visibles
        sinResultados.classList.toggle("d-none", visibles > 0);
    });

    // 2. Atajo de teclado: la tecla '/' enfoca el buscador (como en GitHub)
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "/" && document.activeElement !== buscador) {
            evento.preventDefault();
            buscador.focus();
        }
    });
}