const prompt = require('prompt-sync')();

let opcion;


do {
    console.log("\nMenu opciones");
    console.log("1.Programa que realiza el calculo del salario");
    console.log("2.Programa que realiza la busqueda de un libro\n");
    console.log("3.salir\n ");


    opcion = prompt("ingrese una opcion :");

    opcion = parseInt(opcion);



    switch (opcion) {
    case 1:

        console.log("Programa que realiza el calculo del salario final");
        
        let vSalario = prompt("ingrese su salario: ");

        vSalario=parseFloat(vSalario);


        let valorHora = vSalario / 160; // serian los horas extras
            let horasExtras = valorHora * 5;


            let isss = vSalario * 0.03; // calculo del iss 

            let afp = vSalario * 0.0625; // calculo del afp
    


        let Ingresos=[ {Salario: vSalario},{HorasExtras:25},{Isss:13.50},{Afp:29}];

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

        let generoBuscado = prompt("ingrese el genero del libro a buscar: ");

       const libroEncontrado = Biblioteca.find(libro=> libro.genero.toLowerCase() ==generoBuscado.toLowerCase());

       if (libroEncontrado) {
        console.log("\n: el libro encontrado:" + libroEncontrado.libro);
       } else {
         console.log("genero no encontrado ingresar una nuevo");
       }

    break;

    default:
        console.log("Ingrese una opcion correcta ");
        break;
}


} while (opcion !==3);



