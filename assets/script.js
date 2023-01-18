// Characters for password generator
var passLength = 8
var characters = "";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberS = "1234567890";
var specialCharacter = "!@#$%^&*?><*";
var generateBtn = document.querySelector("#generate");

//This section askes the user for their preference on what characters their password will conatin
function passPreference() {

  characters = "";
 
   passLength = parseInt(prompt("Input the amount of Character in your password. (8 - 128 characters)"));
   
   if(isNaN(passLength) || passLength < 8 || passLength > 128) {
     alert("Character length must be a number between 8 - 128. Please re-enter.");
     return false; 
   }
   if (confirm("Include lower case letters?")) {
     characters = characters.concat(lowerCase);
   }
   if (confirm("Include upper case letters?")) {
     characters = characters.concat(upperCase);
   }
   if (confirm("Include special charaters?")) {
     characters = characters.concat(specialCharacter);
   }
   if (confirm("Include numbers?")) {
     characters = characters.concat(numberS);
   }
   return true;
 }
 

// This section writes the password
function writePassword() {
  var userInput = passPreference();
  var passwordText = document.querySelector("#password");

  if (userInput) {
    var genPass = generatePassword();
    passwordText.value = genPass;
  } else { passwordText.value = "";
  }
}
// This section generates the random password using the information
function generatePassword() {
  var password = "";
  for (var i = 0; i < passLength; i++) {
    var randomCombo = Math.floor(Math.random() * characters.length);
    password = password + characters[randomCombo];
  }
  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
