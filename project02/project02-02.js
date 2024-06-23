/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: LaTysha Turner 
      Date:   06/02/2024

      Filename: project02-02.js
 */

function verifyForm() {
    console.log("verifyForm function called");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

if (name && email && phone) {
        window.alert ("Thank you");
}    else {
        window.alert ("Please fill in all fields");
    }

} 
document.getElementById("submit").addEventListener("click", verifyForm); 

