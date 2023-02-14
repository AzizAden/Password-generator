// Assignment code here
document.querySelector("#generate").addEventListener("click", writePassword);

let chooseconfirmLength = "";
let chooseUpperCase;
let chooseLowerCase;
let chooseNumericCharacter;
let chooseSpecialCharacter;
 
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];




function generatePassword() {
  let chooseLength = (prompt("How many characters would you like your password to contain?"));

  
  while(chooseLength <= 7 || chooseLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      let chooseLength = (prompt("How many characters would you like your password to contain?"));
      } 

      alert(`Your password will have ${chooseLength} characters`);

    let chooseowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    let choosepperCase = confirm("Click OK to confirm if you would like to include uppercase characters");  
    let chooseSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    let chooseNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
   
     
      while(chooseUpperCase === false && chooseLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        let chooseLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        let chooseUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");  
        let chooseSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        let chooseNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    } 

     
      let passwordCharacters = []
      
    if (chooseSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (chooseNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (chooseLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (chooseUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      let randomPassword = ""
      
      for (let i = 0; i < chooseLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
