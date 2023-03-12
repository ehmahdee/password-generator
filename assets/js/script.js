var length;
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!@#$%^&*()_+=?";
var numbers = "1234567890";
var userChoice = "";


// Write password to the #password input
function generatePassword () {
  length = prompt ("Please choose a length for password.");
  if (length < 8 || length > 128 || isNaN(length)  ) {
  alert ("Please chooose a number between 8 and 128 characters.");    
  generatePassword(); 
  }

  userPreference();
  var password = "";
  for (var i = 0; i < length; i++) {
    let index = Math.floor(Math.random () *
    userChoice.length);

    password += userChoice[index];
  }

  console.log("done");
  return password;
}

function userPreference () {
    var userUpperCase = confirm ("Do you want uppercase letters?");
    if (userUpperCase === true) {
      userChoice += upperCase;
    }
    var userLowerCase = confirm ("Do you want lowercase letters?");
    if (userLowerCase === true) {
      userChoice += lowerCase;
    }
    var userSpecialCharacters = confirm ("Do you want special characters?");
    if (userSpecialCharacters === true) {
      userChoice += specialCharacters;
    }
    var userNumbers = confirm ("Do you want numbers?");
    if (userNumbers === true) {
      userChoice += numbers;
    }
    console.log(userChoice.length);
    console.log("userChoice", userChoice);
    
    if (userChoice.length === 0) {
      alert ("Please make at least one selection");
      userPreference();
    } else {
      (!userChoice);
    }

}

function writePassword() {
  userChoice = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// needs to have at least 8 characters, less than 128

// pw box needs to be clickable and typable

// user needs to be prompted for pw criteria

// user should select desired criteria

// should prompt user to select lower, upper, numeric, and/or special characters

// when all prompts are answered, input should be validated

// final password should be displayed in an alert

//ability to copy password to clipboard