// Assignment Code
var generateBtn = document.querySelector("#generate");

//Criteria selection for password//
let length = prompt('How many characters would you like your password to be?');
if (length < 8 || length > 128) {
  alert("Your password must be between 8 and 128 characters");
};
let numbers = confirm('Would you like to include numbers in your password?');
let specials = confirm('Would you like to include symbols on your password?');
let uppercase = confirm('Would you like to include uppercase letters in your password?');
let lowercase = confirm('Would you like to include lowercase letters in your password?');

if (numbers === false && specials === false && uppercase === false & lowercase === false) {
  alert('Your password does not meet the required criteria, you must select at least one option')
}

//options for password criteria//
var numbers2 = '0123456789'
var SpecialSymbols = '!@#$%^&*()+=?<\>-'
var uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);