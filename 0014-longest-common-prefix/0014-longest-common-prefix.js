/**
 * @param {string[]} strs
 * @return {string}
 */

/*

O; string, the longest common prefix or ""

I: strs, an array of strings

C

E
- there is no common prefix
- array just contains repeats of the same string
- array that just contains empty strings

Pseudocode

currentlyAvailablePrefixes
stringToArray
returnString = ""

Create a new object, currentlyAvailablePrefixes
Populate the object with key / value pairs from the first word in strs
    key = index of the letter in the word
    value = letter
Create a loop, looping through each word in strs, after the first word
    update stringToArray from the word I am looking at, with each character separate form one another
    compare the key/value pairs against the index and letter in the stringToArray
    if key and value, no change is made to the object
    if key and value do not match, set the value to null
        break;
conditional statement to check if currentlyAvailablePrefixes is empty, if so return returnString
Create a loop, looping through all key/value pairs until we hit a null value, then stop. Add all available values to returnString. Return returnString.

Example
strs = ["flower","flow","flight"]
                    ^
{
 0: f 
 1: l 
 2: o < null
 3: w 
 4: e < null
 5: r 
}

[f,l,o,w]
[f,l,i,g,h,t]

fl

*/
var longestCommonPrefix = function(strs) {
  
    let currentlyAvailablePrefixes = {};
    let firstString;
    let stringToArray = [];
    let returnString = "";
    let keyToStop = 0;
    
    firstString = strs[0].split("");
    
    for (let i = 0 ; i < firstString.length ; i++) {
        currentlyAvailablePrefixes[i] = firstString[i];
    }
    
    for (let j = 1 ; j < strs.length ; j++){
        stringToArray = strs[j].split("");
        for (let i = 0 ; i < firstString.length ; i ++) {
            console.log(stringToArray[i]);
            console.log(currentlyAvailablePrefixes[i]);
            if (stringToArray[i] !== currentlyAvailablePrefixes[i]) {
                currentlyAvailablePrefixes[i] = null;
                console.log(currentlyAvailablePrefixes[i]);
                break;
            }
            keyToStop = i;
        }
    }
    
    console.log(currentlyAvailablePrefixes);

    
    if (!currentlyAvailablePrefixes[0]) {
        return returnString;
    } else {
        for (key in currentlyAvailablePrefixes) {
            console.log(key);
            console.log(keyToStop);
            if (!currentlyAvailablePrefixes[key] || key > keyToStop ) {
                break;
            } else {
                returnString += currentlyAvailablePrefixes[key];
            }
        }
    }
    return returnString;
};