/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: LaTysha Turner
      Date:   05/28/2024

      Filename: project02-01.js
 */
    
function FahrenheitToCelsius(degree) {
    return  (degree - 32) / 1.8;
}
function CelsiusToFahrenheit(degree) {
    return (degree * 1.8) + 32;
}
document.getElementById('cValue').onchange = function() {
    // Get the value of the Celsius input field
    var cDegree = parseFloat(document.getElementById('cValue').value);
    
    // Convert Celsius to Fahrenheit using the CelsiusToFahrenheit function
    var fahrenheitValue = CelsiusToFahrenheit(cDegree);
    
    // Update the Fahrenheit input field with the converted value
    document.getElementById('fValue').value = fahrenheitValue.toFixed(2); // fix the number to 2 decimal places
};
document.getElementById('fValue').onchange = function() {
    // Get the value of the Fahrenheit input field
    var fDegree = parseFloat(document.getElementById('fValue').value);
    
    // Convert Fahrenheit to Celsius using the FahrenheitToCelsius function
    var celsiusValue = FahrenheitToCelsius(fDegree);
    
    // Update the Celsius input field with the converted value
    document.getElementById('cValue').value = celsiusValue.toFixed(2); // fix the number to 2 decimal places
};