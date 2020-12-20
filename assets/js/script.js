// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Generate Password Function
function generatePassword(){
// Character Arrays
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArray = ["!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","}","<",">","?",];

// Empty Arrays
var characterArray = [];
var userPasswordArray = [];

// Prompt for user to choose length of their password
var passwordLength = prompt("How long would you like your password to be? (Min 8 - Max 128)");
  // loop to verify user has chosen a length of between 8 and 128 characters
  while (!passwordLength || parseInt(passwordLength) < 8 || parseInt(passwordLength) >= 129) {
    var passwordLength = parseInt(prompt("How long would you like your password to be? (Min 8 - Max 128)"));
  }
  alert("Thanks. Your password will be " + passwordLength + " chraracters long.");

  var confirmLowerCase = (confirm("Click Okay to include lowercase characters in your password."));
  
  var confirmUpperCase = (confirm("Click Okay to include UPPERCASE characters in your password."));
   
  var confirmNumbers = (confirm("Click Okay to include numbers(0-9) in your password."));
  
  var confirmSymbols = (confirm("Click okay to include special characters like($#&*) in your password."));
    // Loop to verify at least one character option was chosen
    while (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSymbols === false){
    alert("Sorry, you must select Okay for at least 1 type of character.");
    // Asks again if the user does not select at least 1 character option
    var confirmLowerCase = (confirm("Click Okay to include lowercase characters in your password."));
  
    var confirmUpperCase = (confirm("Click Okay to include UPPERCASE characters in your password."));
  
    var confirmNumbers = (confirm("Click Okay to include numbers(0-9) in your password."));
  
    var confirmSymbols = (confirm("Click okay to include special characters like($#&*) in your password."));
  }
  
//If statements to determine which character ooptions user has made
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

const copyToClipboard = str => {
  const el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';                 
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  const selected =            
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

