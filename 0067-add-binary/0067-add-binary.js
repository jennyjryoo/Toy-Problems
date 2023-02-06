/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/**

O binary string, sum of input strings
I two binary strings
C 
E 
- leading zero
- strings of different lengths
  
Psuedocode
Variables
characterLong
characterShort
carry
indexLong
indexShort
arrayLong
arrayShort
finalArray

General: Logic in adding binary strings to add the characters together. Max it can go is 1. If higher than 1, carry 1 to the next chracter in front of it.

Declare all variables as needed
    Depending on which string is longer, make that arrayLong and set length based on that
Loop through each character in arrayLong, starting at the end of the array. With each loop, subtract one from the index
    find value of characterLong and characterShort
            if indexShort is less than 0, set characterShort to 0
    compare characterLong and characterShort. 
        If the sum of characterLong, characterShort and carry is 1 or less, 
            add the sum to the beginning of finalArray
            make carry 0
            substract one from indexShort
        If the sum of characterLong, characterShort and carry is greater than 1, 
            add 0 to the beginning of finalArray
            make carry 1
            substract one from indexShort
After looping through the longer string, if carry is 1, add that to the begining of finalArray
Convert finalArray to string, and return

Example
a = "111"
b = "10"
arrayLong [1,1,1]
           ^
arrayShort [1,0]
        ^
carry 1
indexLong 0
indexShort -2
arrayLong [1,1,1]
arrayShort [1,0]
finalArray = [1,0,0,1]
*/

var addBinary = function(a, b) {
    // Declare all variables as needed
    let characterLong;
    let characterShort;
    let carry = 0;
    let finalArray = [];
    let arrayLong;
    let arrayShort;
    let sum = 0;
    // Depending on which string is longer, make that arrayLong and set length based on that
    if (a.split("").length >= b.split("").length){
        arrayLong = a.split("");
        arrayShort = b.split("");
        } else {
        arrayLong = b.split("");
        arrayShort = a.split("");
        }
    let indexLong = arrayLong.length - 1;
    let indexShort = arrayShort.length -1;
 
    // Loop through each character in arrayLong, starting at the end of the array. With each loop, subtract one from the index
    for (let i = indexLong ; i >= 0 ; i--) {
        //     find value of characterLong and characterShort
        characterLong = arrayLong[i];
        //if indexShort is less than 0, set characterShort to 0
        if (indexShort < 0) {
            characterShort = 0;
        } else {
            characterShort = arrayShort[indexShort];
        }
        console.log("characterLong"+characterLong);
        console.log("characterShort"+characterShort);
        // compare characterLong and characterShort
        // If the sum of characterLong, characterShort and carry is 1 or less, 
        sum = parseInt(characterLong) + parseInt(characterShort) + carry;
        console.log("sum"+sum);
        if (sum <= 1){
            // add the sum to the beginning of finalArray
            finalArray.unshift(sum);
            //make carry 0
            carry = 0;
        }         
        // If the sum of characterLong, characterShort and carry is greater than 1, 
        else if (sum > 1){
             //add 0 to the beginning of finalArray
             if (sum%2 === 0){
                finalArray.unshift(0);
             } else if (sum%2 === 1){
                 finalArray.unshift(1);
             }
             //make carry 1
             carry = 1;
         }
        //substract one from indexShort    
        indexShort --;
        console.log(finalArray)
        console.log(carry)
    }
    
    // After looping through the longer string, if carry is 1, add that to the begining of finalArray
    if (carry === 1) {
        finalArray.unshift(1);
    }
    // Convert finalArray to string, and return
    return finalArray.join("");
    
};