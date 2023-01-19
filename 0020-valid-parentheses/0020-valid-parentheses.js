/**
 * @param {string} s
 * @return {boolean}
 */


/**

O boolean, regarding whether the string is valid
I a string containing (,),{,},[,]
C 
E 
- only contains open/closed brackets, none matching
- string is only 1 character long
- multiple open or closing brackets in a row "(())"

Pseudocode

Variables
stackArray
stringToArray
currentLengthOfArray = -1;

Create an empty array, stackArray
Convert the given string into an array
Check if the first character in the stringToArray is a closed parenthesis, if so return false
create a loop, looping through each chacter in stringToArray
    if stackArray is empty, add the character to the stack. add 1 to currentLengthOfArray
    if stackArray is not empty, check if the current character complements the last character in stackArray
        if it does not, add it to stackArray, at the end. add 1 to currentLengthOfArray.
        if it does, remove the last character in stackArray. remove 1 from currentLengthOfArray.  and continue looping through
if currentLengthOfArray is not 0, return false
otherwise, return true

Example
"({})"

stackArray = []
stringToArray = [(,[,],)]
                       ^
*/
var isValid = function(s) {
    
    let stackArray = [];
    let stringToArray = s.split("");
    let firstCharacter = stringToArray[0];
    let currentLengthOfStackArray = -1;
    let complementingCharacter;

    //Check if the first character in the stringToArray is a closed parenthesis, if so return false
    if (firstCharacter === ")" || firstCharacter === "]" || firstCharacter === "}") {
        return false;
    }
    
    //create a loop, looping through each chacter in stringToArray
    for (let i = 0 ; i < stringToArray.length ; i++) {
        //if stackArray is empty, add the character to the stack. add 1 to currentLengthOfArray
        if (currentLengthOfStackArray === -1) {
            stackArray.push(stringToArray[i]);
            currentLengthOfStackArray++;
        }
        //if stackArray is not empty, check if the current character complements the last character in stackArray
        if (stringToArray[i] === ")") {
            complementingCharacter = "(";
        } else if (stringToArray[i] === "]") {
            complementingCharacter = "[";
        } else if (stringToArray[i] === "}") {
            complementingCharacter = "{";
        } else {
            complementingCharacter = null;
        }
        
        //if it does, remove the last character in stackArray. remove 1 from currentLengthOfArray.  and continue looping through
        // if it does not, add it to stackArray, at the end. add 1 to currentLengthOfArray.
        if (complementingCharacter === stackArray[currentLengthOfStackArray]) {
            stackArray.pop();
            currentLengthOfStackArray--;
        } else {
            stackArray.push(stringToArray[i]);
            currentLengthOfStackArray++;
        }
    }
    
    //if currentLengthOfArray is not 0, return false
    if (currentLengthOfStackArray !== 0) {
        return false;
    } else {
        return true;
    }
    
};