// Access the button in HTML with ID of #generate
var generateBtn = document.querySelector("#generate");

// Variable to hold password criteria options
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numbers = "1234567890";
var specialCharacters = "!@#$%&*_";

// Store the password criteria options to include as chosen by the user.
var randomPasswordString = "";
// Value will be updated when user has chosen length of password to generate.
var length = 0;

// 3. The generatePassword function is invoked.
function generatePassword() {

	// alert() user with instructions.
	window.alert(
		"PASSWORD GENERATOR: \nWhen prompted: \n\n1. Enter password length (Min. 8 - Max. 128 characters) \n\n2. Choose at least one password criteria to include.  \n\nClick OK to Start"
	);

	// prompt() to set length of password
	var passwordLength = window.prompt(
		"\nPassword length must be between 8 - 128 characters. \nEnter Password Length:"
	);

	if (passwordLength >= 8 && passwordLength <= 128) {
		// return value is a string. change to number. save to length variable
		+passwordLength;
		length = passwordLength;
	} else {
		alert(
			"Password length must be a minimum of 8 characters and maximum of 128 characters. Please start again."
		);
		return;
	}

	// confirm() criteria to include in password
	var passwordSpecialCharacters = window.confirm(
		"\nPASSWORD CRITERIA \n\nInlcude Special Characters? \n\nOK for Yes or Cancel for No"
	);
	// If return value is true, add the specialCharacters variable to randomPasswordString
	if (passwordSpecialCharacters) {
		randomPasswordString = randomPasswordString.concat(specialCharacters);
	}

	// confirm() criteria to include in password
	var passwordLowerCase = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude lowercase letters? \n\nOK for Yes or Cancel for No"
	);
	// If return value is true, add the lowerCase variable to randomPasswordString
	if (passwordLowerCase) {
		randomPasswordString = randomPasswordString.concat(lowerCase);
	}

	// confirm() criteria to include in password
	var passwordUpperCase = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude UPPERCASE letters? \n\nOK for Yes or Cancel for No"
	);
	// If return value is true, add the upperCase variable to randomPasswordString
	if (passwordUpperCase) {
		randomPasswordString = randomPasswordString.concat(upperCase);
	}

	// confirm() criteria to include in password
	var passwordNumbers = window.confirm(
		"\nPASSWORD CRITERIA \n\nInclude Numbers? \n\nOK for Yes or Cancel for No"
	);
	// If return value is true, add the numbers variable to randomPasswordString
	if (passwordNumbers) {
		randomPasswordString = randomPasswordString.concat(numbers);
	}

	// Validate password criteria is met. If all criteria is false, criteria is not met. Exit the application.
	if (
		!passwordSpecialCharacters &&
		!passwordLowerCase &&
		!passwordUpperCase &&
		!passwordNumbers
	) {
		window.alert(
			"Password cannot be generated if no password criteria is selected. Please start again."
		);
		return;
	};

	// Variable will be given value of the randomly generated password.
	var generateRandomPassword = " ";
	// For loop to loop over randomPasswordString which contains the criteria & randomly generate password
	// For loop condition is set to match the user's chosen password length, held in the length variable
	for (var i = 0; i < length; i++) {
		generateRandomPassword += randomPasswordString.charAt(
			Math.floor(Math.random() * randomPasswordString.length)
		);
	}
	return generateRandomPassword;
}

// 2. The writePassword function is invoked which then invokes the generatePassword function
function writePassword() {
	var password = generatePassword();
	// Write password to the #password input
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
	// Reset the value to empty string to clear previous user selections
	randomPasswordString = "";
}

// 1. On click of HTML button, event listener will call the writePassword function
generateBtn.addEventListener("click", writePassword);
