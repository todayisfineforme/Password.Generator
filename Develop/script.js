// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var selected = '';
var myPassword = '';
var passwordLength = 0;

// function to prompt user to select options
function options(){
    while (selected === '') {
        
        var hasSpecialCharacters = confirm('Do you want to include Special Characters')
        var hasLowerCaseLetters = confirm('Do you want to include lowercase')
        var hasUpperCaseLetters = confirm('Do you want to include UPPERCASE letters.')
        var hasNumbers = confirm('Do you want to include numbers')

        if(hasNumbers ===true){
            alert("You selected numbers");
            selected = selected + '0123456789';
        }
        if(hasLowerCaseLetters===true){
            alert("You selected lower case letters");
            selected = selected + 'abcdefghijklmnopqrstuvwxyz';
        }
        if(hasUpperCaseLetters===true){
            alert("You selected upper case letters");
            selected = selected + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if(hasSpecialCharacters===true){
            alert("You selected special characters");
            selected = selected + '\!\%\*\@\$\#\^\*\&\'\(\)\+\-\;\:\<\ \.\/\=\>\?\[\]\_\`\{\|\}\~\\';
        }
    }
    return selected
}

// function to prompt user to indicate how long the passowrd should be
function lengthDecider(passwordLength){
    while(passwordLength < 8 || passwordLength > 128){  
        passwordLength = parseInt(prompt("how many total characters would you like your password to contain? (8-128 characters)"));
        }
    return passwordLength;    
}

// function to generate the password itself, which itself uses the two preceeding functions
function generatePassword(){
    //ensures that the user will be able to re-select options each time they click the button
    selected = '';

    var characters = options(selected);
    var length = lengthDecider(passwordLength);
	var selectedLength = characters.length;
    for (var i = 0; i < length; i++) {
        myPassword += characters.charAt(Math.floor(Math.random() * selectedLength));
    }
    return myPassword;
}

// function to write the generated password into the #password textarea
function writePassword(myPassword) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// event listener for the button

generateBtn.addEventListener("click", writePassword);

