/**
 * @param {number[]} digits
 * @return {number[]}
 */

/**


O an array
I an array, made up of integers
C 
E 
-last integer in the array is 9

Pseudocode

Variables
digitsAsString
finalInteger
finalArray

Declare variables, if needed
Loop through the array digits and add each integer in the array to the string
Convert the string to the number
Add 1 to the number
Convert the number back to string
Convert the string to an array
Return finalArray

Examples
digits = [1,9]
            ^
digitsAsString = "20"
finalInteger = 19 + 1 = 20
finalArray = [2,0]



Pseudocode

Variables
outputArray
index, length of array minus 1

Declare variables, if needed
Look at index, if it is at least 0, loop through
    in the array, look at the index
        if it is 9, make it 0 and subtract one from index
        if it is not 9, add one and make index -1;
Return outputArray

Examples
digits = [1,9,9]
            
outputArray = [2,0,0]                    
               ^
index = 0

*/

var plusOne = function(digits) {
    // Declare variables, if needed
    let outputArray = digits;
    let index = outputArray.length - 1;

    // Look at index, if it is at least 0, loop through
    while (index >= 0){
        // in the array, look at the index
        //  if it is 9, make it 0 and subtract one from index
        if (outputArray[index] === 9) {
            outputArray[index] = 0;
            index --;
        } else { // if it is not 9, add one and make index -1;
            outputArray[index] = outputArray[index] + 1;
            index = -1;
        }
    }
    
    if (outputArray[0] === 0) {
        outputArray.unshift(1);
    }
    
    // Return outputArray
    return outputArray;
};