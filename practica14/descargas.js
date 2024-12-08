function descargarArchivo(nombreArchivo) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando la descarga de ${nombreArchivo} . . .`);
        const tiempoDescarga = Math.floor(Math.random() * 3000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(` ☑️ Descarga completa de ${nombreArchivo}`);
            } else {
                reject(` ❌ Error de descarga de ${nombreArchivo}`);
            }
        }, tiempoDescarga);
    });
}

async function gestionarDescargas(archivos) { 
    try {
        console.log("Comenzando las descargas...");
        for (const archivo of archivos) {  
            const resultado = await descargarArchivo(archivo);
            console.log(resultado);
        }
        console.log("Todas las descargas completadas");
    } catch (error) {
        console.error("Ocurrió un problema", error);
    }
}

const listaDeArchivos = ["foto1.jpg", "documento.pdf", "video.mp4", "presentacion.pptx"];

gestionarDescargas(listaDeArchivos);
