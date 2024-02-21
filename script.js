//Criteria selection for password//
let length = window.prompt('How many characters would you like your password to be?');
if (length < 8 || length > 128) {
  alert("Your password must be between 8 and 128 characters");
};
let numbers = window.confirm('Would you like to include numbers in your password?');
let specials = window.confirm('Would you like to include symbols on your password?');
let uppercase = window.confirm('Would you like to include uppercase letters in your password?');
let lowercase = window.confirm('Would you like to include lowercase letters in your password?');

//options for password criteria//
var numbers2 = '0123456789'
var SpecialSymbols = '!@#$%^&*()+=?<\>-'
var uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);