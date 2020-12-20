// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Generate Password Function
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

  var confirmLowerCase = (confirm("Click Okay to include lowercase charachters"));
  
  var confirmUpperCase = (confirm("Click Okay to include UPPERCASE characters"));
   
  var confirmNumbers = (confirm("Click Okay to include numbers"));
  
  var confirmSymbols = (confirm("Click okay to add symbols to your password"));
    // Loop to verify at least one character option was chosen
    while (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSymbols === false){
    alert("You must select Okay for at least 1");
    // Asks again if the user does not select at least 1 character option
    var confirmLowerCase = (confirm("Click Okay to include lowercase charachters"));
  
    var confirmUpperCase = (confirm("Click Okay to include UPPERCASE characters"));
  
    var confirmNumbers = (confrim("Click Okay to include numbers"));
  
    var confirmSymbols = (confirm("Click okay to add symbols to your password"));
  }
  
//If statements to determine which charachter ooptions user has made
//combines empty array with the character arrays based on user input
if (confirmLowerCase){
  characterArray = characterArray.concat(lowercaseArray);
}
if (confirmUpperCase){
  characterArray = characterArray.concat(uppercaseArray);
}
if(confirmNumbers){
  characterArray = characterArray.concat(numbersArray);
}
if (confirmSymbols){
  characterArray = characterArray.concat(symbolsArray);
}
//for loop to generate the random characters for the password
for(var i=0;i<passwordLength;i++){
  userPasswordArray.push(characterArray[Math.floor(Math.random() * characterArray.length)]);
}
// join method return a string from array created for the users password
return userPasswordArray.join("");

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);