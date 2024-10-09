

/* practica # 6 funciones */
console.log("menu de opciones");
console.log("1.mostrar el numero mayro de un arraglo de una lista");
console.log("inprimir el total de vocales y mostrar cueles son de una cadena");

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("has ingresado ala opcion 1\n");

     let number = [2,22,45,3,66,90,40];
     
     NumeroMayorarray(number);
        
        break;
    case 2:
        console.log("has ingresado ala opcion 2\n");

        let texto = "mauricio"
        let resultado = ContarVocales(texto);

        console.log("el total de vocales son " + texto + "es:" + resultado.cantidadVocales);
        console.log("las vocales encontradas sin repetir" + texto + "son:" + resultado.Vocales);
        
        break;
    default:
        console.log("ingrese una opcion validad"),
        break;
}

function NumeroMayorarray(numeros){
  
    let maximo = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}

console.log(`El número máximo es: ${maximo}`);
} //fin de la funcion

function ContarVocales(cadena) {

    let  Vocales = ["a","e","i","o","u"];
    let contador = 0;
    let VocalesEncontradas =[];

    for(let letras of cadena.toLowercase()){
        if(Vocales.includes(letras))
            contador ++;
        VocalesEncontradas.push(letras);


    }//fin del for

    let vocalesunicas =[ new set(VocalesEncontradas)];

    return {
        cantidadVocales: contador,
        Vocales: vocalesunicas
    }

    
}