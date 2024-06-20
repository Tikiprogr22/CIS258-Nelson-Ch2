/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: LaTysha Turner
      Date:   06/06/2024

      Filename: project02-04.js
 */ 
// Constants fir the prices
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;

 // Function to displays numeric value as a text string in currency format
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

 // Function to calculate the total cost
 function calcTotal() {

// Declare the cost variable with an initial value of 0
    let cost = 0;

// Declare variables to check if the food items are selected
    let buyChicken =
document.getElementById("chicken").checked;
    let buyHalibut =
document.getElementById("halibut").checked;
    let buyBurger =
document.getElementById("burger").checked;
    let buySalmon =
document.getElementById("salmon").checked;
    let buySalad =
document.getElementById("salad").checked;

// Increase the cost of the variable by the price of the checked items
cost += buyChicken ? CHICKEN_PRICE : 0;
cost += buyHalibut ? HALIBUT_PRICE : 0;
cost += buyBurger ? BURGER_PRICE : 0;
cost += buySalmon ? SALMON_PRICE : 0;
cost += buySalad ? SALAD_PRICE : 0;

// Set the innerHTML property for element with the id "foodTotal"
document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

// Declare tax variable, setting its value equal to the cost multiplied by SALES_TAX
    let tax = cost * SALES_TAX;
document.getElementById("foodTax").innerHTML = formatCurrency(tax);

// Declare the totalCost variable, setting its value equal to the cost plus the tax variable
    let totalCost = cost + tax;

// Set the innerHTML property for the element with the id "totalBill" to the value returned by formatCurrency(totalCost) 
document.getElementById("totalBill").innerHTML = formatCurrency("totalCost"); 
}

// Adding event listeners to the checkboxes to recalculate the total cost when any checkbox is clicked
document.getElementById("chicken").
addEventListener("click", calcTotal);
document.getElementById("halibut").
addEventListener("click", calcTotal);
document.getElementById("burger").
addEventListener("click", calcTotal);
document.getElementById("salmon").
addEventListener("click", calcTotal);
document.getElementById("salad").
addEventListener("click", calcTotal);