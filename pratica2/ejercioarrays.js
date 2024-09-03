console.log("menú de opciones");
console.log("1. propiedades básicas de arrays");
console.log("2. métodos avanzados de arrays");
console.log("combinación de arrays\n");

let opcion = 3;

switch (opcion) {
    case 1:
        console.log("has ingresado a la opción 1");

        /* crear un array */
        let numero =[10, 20, 30, 40, 50, 60];

        /* obtener longitud del array */
        console.log("obtener longitud del arreglo", numero.length); /* 6 */

        /* agregar un elemento al final */
        numero.push(70);
        console.log("arreglo después del push", numero); /* [10, 20, 30, 40, 50, 60, 70] */

        /* eliminar último elemento del arreglo */
        let ultimoElemento = numero.pop();
        console.log("arreglo después del pop", numero); /* [10, 20, 30, 40, 50, 60] */

        break;

    case 2:
        console.log("has ingresado a la opción 2");

        /* crear un arreglo */
        let numeros =[1,2,3,4,5];

        /*map vamos arealizar la multiplicacion por 3 de cada elemento */
        let multiplicacionArray =numeros.map( num => num* 3);
        console.log("multiplicacion * 3 del arreglo",multiplicacionArray,"\n");

        /* filter mostrar los numeros mayores a 2 */

        let numerosFiltrados = numeros.filter( num => num > 2);
        console.log("numeros mayores a 2 :",numerosFiltrados,"\n");
        
        break;

    case 3:
        console.log("Has ingresado a la opción 3");

let letras = ["c", "a", "b", "c", "e", "d"];
let numerosIniciales = [3, 1, 2, 5, 4];

/* Orden alfabético y numérico */
letras.sort();
numerosIniciales.sort((a, b) => a - b);
console.log("Letras ordenadas:", letras);
console.log("Números ordenados:", numerosIniciales, "\n");

/* Combinar arrays */
let combinados = letras.concat(numerosIniciales);
console.log("Arrays combinados:", combinados, "\n");

/* Mostrar invertido del arreglo combinado */
combinados.reverse();
console.log("Arrays combinado inverso:", combinados);

        break;
    default:
        console.log("Debe ingresar una opcion correcta 1 - 3");
        break;
}