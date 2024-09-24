// Mensaje de consola cuando la página se carga
console.log("Página de Seguridad Informática cargada correctamente.");

// Función para mostrar una alerta en caso de error (puede ser usada en las páginas de error)
function showErrorAlert() {
    alert("Ha ocurrido un error. Por favor, intente nuevamente más tarde.");
}

// Ejemplo de uso en la página de error
if (document.title.includes("Error")) {
    showErrorAlert();
}

// Aquí puedes agregar más funciones y eventos para mejorar la interactividad
