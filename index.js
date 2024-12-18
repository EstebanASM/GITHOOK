// Función para convertir de Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Temperatura en Celsius
let temperaturaCelsius = 25;

// Llamada a la función y mostrar resultado
console.log(`La temperatura de ${temperaturaCelsius}°C es igual a ${celsiusToFahrenheit(temperaturaCelsius)}°F`);
