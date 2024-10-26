console.log("Función para conversión de formato de fecha");

conversorFecha('12-10-12');

function conversorFecha(fecha) {
    // Convertir el formato a tipo Date
    const fechaFormato = new Date(fecha);

    // Validar si la fecha es válida
    if (isNaN(fechaFormato)) {
        console.log("La fecha no es válida");
        return;
    }

    // Imprimir en diversos formatos
    console.log("Fecha sin modificar: " + fecha); // Fecha original

    console.log("Fecha con formato toString: " + fechaFormato.toString()); // Formato estándar

    console.log("Fecha en formato local: " + fechaFormato.toLocaleString()); // Formato de fecha local

    console.log("Fecha solo con día: " + fechaFormato.toDateString()); // Formato solo fecha

    console.log("Solamente la hora: " + fechaFormato.toTimeString()); // Formato solo hora

}//fin de la funcion

