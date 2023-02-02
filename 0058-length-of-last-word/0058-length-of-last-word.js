/**
 * @param {string} s
 * @return {number}
 */

/**

O integer, length of last word in the string
I string, consisting of words and space
C
E
- there is a space at the end of the string


Pseudocode

Given
s

Variables
length = 0
stringToArray

Declare variables, if needed
Create a loop, iterating through the stringToArray. Start at the end the array and work towards the start
    if we see a space
        if we have not found any words yet, ie length = 0, nothing
        if we have found a word, break
    if the character at the index is not a space, add 1 to length
Return length

Example
s = " the moon  "
stringToArray = [ ,t,h,e, ,m,o,o,n, , ]
                         ^
length 4

*/

var lengthOfLastWord = function(s) {
    
    // Declare variables, if needed
    let length = 0;
    const stringToArray = s.split("");
    
    // Create a loop, iterating through the stringToArray. Start at the end the array and work towards the start
    for (let i = stringToArray.length - 1 ; i >= 0 ; i--) {
        //if we see a space
        if (stringToArray[i] === " "){
            // else, break
            if (length > 0) {
                break;
            }             
        } else { // if the character at the index is not a space, add 1 to length
            length ++;
        }
    }
    // Return length
    return length;

    
};