/**
 * @param {string} s
 * @return {boolean}
 */


/**


O boolean, indicating if input is a palindrome
I a string with both alphanumeric and non-alphanumeric characters
C 
- does not have to include any alphanumeric characters
- convert to lowercase
E

Psuedocode

make an array/object with all alphanumeric characters
convert input string to lowercase
remove all non-alphanumeric characters
reverse string
check if reversed string is the same, if so, return true

Example
s = "race a car"
raceacar
racaecar

*/

var isPalindrome = function(s) {
    
    const alphanumeric = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    
    let stringLowerCase = s.toLowerCase();
    let stringLowerCaseArray = stringLowerCase.split("");
    let character;
    let filteredString = "";
    let backwardsFilteredString = "";
    
    for (let i = 0 ; i < stringLowerCaseArray.length; i++) {
        character = stringLowerCaseArray[i];
        
        if (alphanumeric.includes(character)) {
            filteredString += character;
            backwardsFilteredString = character + backwardsFilteredString;
        }
        
    }
    
    if (filteredString === backwardsFilteredString) {
        return true;
    } else {
        return false;
    }
    
};