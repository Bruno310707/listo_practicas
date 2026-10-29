// Valida el formulario de registro en el navegador antes de enviarlo
const formulario = document.getElementById("registro");
const listaErrores = document.getElementById("errores");

formulario.addEventListener("submit", (evento) => {
    // 1. Leer lo que ha escrito el usuario
    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const clave = document.getElementById("password").value;
    const claveRepetida = document.getElementById("confirm").value;

    // 2. Aplicar las reglas y acumular los errores
    const errores = [];
    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }
    if (!email.includes("@")) {
        errores.push("El correo debe contener una arroba.");
    }
    if (clave.length < 6) {
        errores.push("La contraseña necesita al menos 6 caracteres.");
    }
    if (clave !== claveRepetida) {
        errores.push("Las contraseñas no coinciden.");
    }

    // 3. Mostrar los errores (borra los del intento anterior)
    listaErrores.innerHTML = "";
    for (const error of errores) {
        const elemento = document.createElement("li");
        elemento.textContent = error;
        listaErrores.appendChild(elemento);
    }

    // 4. Si hay errores, cancelar el envío al servidor
    if (errores.length > 0) {
        evento.preventDefault();
    }
});
```[cite: 89, 90]

3. Guarda el archivo (`Ctrl + S`)[cite: 87].

---

### Paso 2.10 — Pruébalo en el navegador

1. En Firefox, pulsa en **Salir** (si estabas dentro) y ve a la página de **Crear cuenta** (`http://localhost:5000/auth/register`)[cite: 85, 90].
2. Abre la pestaña **Red (Network)** con `F12`[cite: 86].
3. Haz clic en **Crear cuenta** dejando el formulario vacío[cite: 90].

**Qué deberías ver:**
* Aparecen 3 mensajes de error en rojo en la propia página[cite: 89, 90].
* En la pestaña **Red** no aparece ninguna petición `POST`: JavaScript ha bloqueado el envío al servidor[cite: 90].

Avísame cuando hagas la prueba para hacer el commit en Git y pasar al **Ejercicio 3**[cite: 91, 92].