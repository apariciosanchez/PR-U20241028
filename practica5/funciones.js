/* menu de opciones */
console.log("Menu de opciones");
console.log("1. Función para cálculo de salario ");
console.log("2. Función para cálculo de descuento");
console.log("3. Función para cálculo de área de rectángulo \n");

let opcion = 3;

switch (opcion) {
    case 1:
        let argumentoHoras = 45;
        let argumentoprecioHora = 15;
        console.log("El salario total es: $" + calculoSalario(argumentoHoras, argumentoprecioHora));
        break;

    case 2:
        console.log("Ha ingresado a la opción 2\n");
        let argumentoCantidad = 50;
        let argumentoDescuento = 15;
        console.log("El descuento aplicado es " + argumentoDescuento + "%" + " y la cantidad final es: $" + calculoDescuento(argumentoCantidad, argumentoDescuento));
        break;

    case 3:
        console.log("Función para cálculo de área de rectángulo\n");
         
        let argumentoAncho = 5;
        let argumentoAnchoAltura = 10;

        console.log("El área del rectángulo es: " + calcularAreaRectangulo(argumentoAncho,argumentoAnchoAltura));
        

        break;

    default:
        console.log("Elija una opción correcta 1, 2 o 3");
        break;
}

/* Función para calcular el salario */
function calculoSalario(horasTrabajadas, precioHora) {
    let salarioTotal = horasTrabajadas * precioHora;
    return salarioTotal;
}

/*  Función para calcular el descuento */
function calculoDescuento(cantidad, descuento) {
    let prDescuento = descuento / 100;
    let prDescuentoTotal = cantidad * prDescuento;
    let cantidadFinal = cantidad - prDescuentoTotal;
    return cantidadFinal;
}
/*funcion para el area de un rectangulo */
function calcularAreaRectangulo(ancho, altura) {
    let area = ancho * altura;
    return area;
}


