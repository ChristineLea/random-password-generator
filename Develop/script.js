// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacters = "!@#$%&*_";

var length = 0;
var randomPasswordString = "";

function generatePassword() {
	window.alert(
		"Choose at LEAST ONE of the following four password criteria, then enter password LENGTH when prompted. \n\nClick OK to Start"
	);

	var passwordLowerCase = window.confirm(
		"Include \n\nlowercase letters? \n\nSelect OK for Yes or Cancel for No"
	);
  if (passwordLowerCase) {
    randomPasswordString = randomPasswordString.concat(lowerCase);
    console.log(randomPasswordString);
	}

	var passwordUpperCase = window.confirm(
		"Include \n\nUPPERCASE letters? \n\nSelect OK for Yes or Cancel for No"
	);
	if (passwordUpperCase) {
    randomPasswordString = randomPasswordString.concat(upperCase);
    console.log(randomPasswordString);
	}

	var passwordNumbers = window.confirm(
		"Include Numbers? \n\n OK for Yes or Cancel for No"
	);
	if (passwordNumbers) {
    randomPasswordString = randomPasswordString.concat(numbers);
    console.log(randomPasswordString);
	}

	var passwordSpecialCharacters = window.confirm(
		"Inlcude Special Characters? \n\nOK for Yes or Cancel for No"
	);
  if (passwordSpecialCharacters) {
    randomPasswordString = randomPasswordString.concat(specialCharacters);
		console.log(randomPasswordString);
	} else {
		alert("Did not meet password criteria. Please start again.");
		return;
	}

	var passwordLength = window.prompt(
		"Password length must be between 8 - 128 characters. \nEnter Password Length:"
	);

	if (passwordLength >= 8 && passwordLength <= 128) {
		passwordLength = length;
	} else {
		alert(
			"Password length must be a minimum of 8 characters and maximum of 128 characters. Please start again."
		);
		return;
  }
  
};


// join arrays into one array based on criteria that returns true
// for loop to loop over array and randomly output array elements to match # of characters
// .toString() to convert into a string
// output password to generator
// clear password

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
