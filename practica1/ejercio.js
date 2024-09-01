
console.log("menu de opciones");
console.log("1. resultado de notas");
console.log("2. mostrar mayor de 2 numeros\n");

let opcion = 1;  

switch (opcion) {
    case 1:
        console.log("has ingresado opcion 1");
        
         let nota = 8.0;

        if (nota >= 6.0 && nota <= 10.0) {
            console.log("felicidades, has aprobado con " + nota);
        } else {
            console.log("lo siento, has reprobado con " + nota);
        }
        break;

    case 2:
        let numero1 = 10;
        let numero2 = 20;

        if (numero1 > numero2) {
            console.log("el numero mayor es " + numero1);
        } else {
            console.log("el numero mayor es " + numero2);
        }
        break;

    default:
        console.log("debe ingresar una opción correcta: 1 o 2");
        break;
}
