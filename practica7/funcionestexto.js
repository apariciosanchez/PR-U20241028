console.log("menu de opciones");
console.log("convertir un string a un array de strings en mayúsculas");
console.log("convertir un string a un array de strings en minúsculas \n");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Has ingresado a la opción 1\n");

        let cadenaNombre = " mauriciO Sanchez";
        let arregloNombre = ["RoxaNa", "juLio", "ApariCio"];

        console.log("Imprimiendo cadena de texto en mayúscula");
        console.log(convertirMayuscula(cadenaNombre));

        console.log("\n");

        console.log("Imprimiendo array de texto en mayúscula");
        console.log(convertirMayuscula(arregloNombre));

        break;

    case 2:
        console.log("Has ingresado a la opción 2\n");

        let textoVehiculo = "MAZDA";
        let arrayVehiculo = ["ToyoTa", "NissaN", "HuydaI", "forD"];

        console.log("Imprimiendo cadena de texto en minúscula");
        console.log(convertirMinuscula(textoVehiculo));

        console.log("\n");

        console.log("Imprimiendo array de texto en minúscula");
        console.log(convertirMinuscula(arrayVehiculo));

        break;

    default:
        console.log("Elija una opción válida entre 1 y 2");
        break;
}

function convertirMayuscula(cadena) {
    if (Array.isArray(cadena)) {

        return cadena.map(item => item.toUpperCase());

    } else if (typeof cadena === 'string') {

        return cadena.toUpperCase();

    } else {

        return 'Error: el dato ingresado debe ser string o un array tipo string';
        
    }
}

function convertirMinuscula(texto) {
    if (Array.isArray(texto)) {

        return texto.map(item => item.toLowerCase());

    } else if (typeof texto === 'string') {

        return texto.toLowerCase();

    } else {

        return 'Error: el dato ingresado debe ser string o un array tipo string';

    }
}
