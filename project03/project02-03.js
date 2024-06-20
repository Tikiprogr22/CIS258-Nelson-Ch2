/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: LaTysha Turner
      Date:   06/04/2024

      Filename: project02-03.js
 */

//square show feedback


//Attach an onmouseover event handler to the element with id "square" to show feedback
document.getElementById('square').addEventListener('mouseover', function() {
    document.getElementById('feedback').innerHTML = "You're hovering over the square"
});

//Attach a onmouseout event handler to the element with the id "square"
document.getElementById('square').addEventListener('mouseout', function() {
    document.getElementById('feedback').innerHTML = "";
});


//Attach an onmouseover event handler to the element with id "triangle" to show feedback
document.getElementById('triangle').addEventListener('mouseover', function() {
    document.getElementById('feedback').innerHTML = "You're hovering over the triangle"
});

//Attach a onmouseout event handler to the element with the id "triangle"
document.getElementById('triangle').addEventListener('mouseout', function() {
    document.getElementById('feedback').innerHTML = "";
});


//Attach an onmouseover event handler to the element with id "circle" to show feedback
document.getElementById('circle').addEventListener('mouseover', function() {
    document.getElementById('feedback').innerHTML = "You're hovering over the circle"
});

//Attach a onmouseout event handler to the element with the id "circle"
document.getElementById('circle').addEventListener('mouseout', function() {
    document.getElementById('feedback').innerHTML = "";
});

