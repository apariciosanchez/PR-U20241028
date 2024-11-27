function convertir() {
  // Obtener tipo de conversión
  let tipoConversion = document.getElementById('tipo-conversion').value;

  // Obtener la temperatura
  let temperatura = document.getElementById('temperatura').value;

  // Validar la temperatura
  if (isNaN(temperatura) || temperatura === "") {
      document.getElementById('resultado').innerHTML = "Por favor ingrese un número válido.";
      return;
  }

  let resultado;

  // Verificar el tipo de conversión
  if (tipoConversion === "1") {  // Celsius a Fahrenheit
      resultado = (temperatura * 9/5) + 32;
      document.getElementById('resultado').innerHTML = `Resultado: ${temperatura}°C = ${resultado.toFixed(2)}°F`;
  } else if (tipoConversion === "2") {  // Fahrenheit a Celsius
      resultado = (temperatura - 32) * 5/9;
      document.getElementById('resultado').innerHTML = `Resultado: ${temperatura}°F = ${resultado.toFixed(2)}°C`;
  } else {
      document.getElementById('resultado').innerHTML = "Selecciona un tipo de conversión válido.";
  }
}


// tarea realizar la conversion de farenheit a celcius
