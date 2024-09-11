console.log("Menu opciones");
console.log("1.Programa que realiza el calculo del salario");
console.log("2.Programa que realiza la busqueda de un libro\n");


let opcion =2;



switch (opcion) {
    case 1:

        console.log("Programa que realiza el calculo del salario final");

        let Ingresos=[ {Salario:450},{HorasExtras:25},{Isss:13.50},{Afp:29}];

        let SalarioPago = (Ingresos[0].Salario+Ingresos[1].HorasExtras)-(Ingresos[2].Isss+Ingresos[3].Afp);

        console.log("Total a pagar es : " +SalarioPago);

        if (SalarioPago > 365.00) {
            console.log("tu salario  neto es mayor al minimo");

        }
       else if (SalarioPago >= 500){
        console.log("here agente de retencion de renta");
       }
       
       else{
        console.log("tu salario es menor al minimo");
       }

        break;

    case 2:

        console.log("Programa que selecciona el libro buscado\n");

        let Biblioteca =[{libro:"Risitos de Oro", genero:"Cuentos"},
        {libro:"Harry Potter y la piedra filosofal",genero:"Magico"},
        {libro:"Comer, amar, rezar", genero: "Romance"},
        {libro:"Cura Mortal",genero:"Ficcion"}];

        console.log("Busqueda de libro por genero\n");

        let generoBuscado ="Magico";
       const libroEncontrado = Biblioteca.find(libro=> libro.genero.toLowerCase() ==generoBuscado.toLowerCase());

       if (libroEncontrado) {
        console.log("\n: el libro encontrado:" + libroEncontrado.libro);
       } else {
         console.log("genero no encontrado ingresar una nuevo");
       }


        
    /* if(Biblioteca[0].genero == generoBuscado){
    console.log("el libro buscado es:"+Biblioteca[0].libro);
     }

     else if (Biblioteca[1].genero == generoBuscado){
        console.log("el libro buscado es:"+Biblioteca[1].libro);
         }

     else if (Biblioteca[2].genero == generoBuscado){
            console.log("el libro buscado es:"+Biblioteca[2].libro);
          }

     else if (Biblioteca[3].genero == generoBuscado){
                console.log("el libro buscado es:"+Biblioteca[3].libro);
          }  
          
          else{
            console.log("ingrese un genero valido");
          } */

    break;

    default:
        console.log("Ingrese una opcion correcta ");
        break;
}