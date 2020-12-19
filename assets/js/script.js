// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
// Charachter Arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","<",">","?",];

// Empty Arrays
var characterArray = [];
var userPasswordArray = [];

// Prompt for user to choose length of their password
var passwordLength = prompt("How long a password (Min 8 - Max 128?");
  // loop to verify user has chosen a length of between 8 and 128 charachters
  while (!passwordLength || parseInt(passwordLength) < 8 || parseInt(passwordLength) >= 129) {
    var passwordLength = parseInt(prompt("How long a password (Min 8 - Max 128?"));
  }
  alert("Your password will be " + passwordLength + " chraracters long.");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);