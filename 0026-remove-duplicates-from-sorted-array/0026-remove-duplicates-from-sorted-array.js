/**
 * @param {number[]} nums
 * @return {number}
 */

/**

O an integer, k
I an array nums
C
- we cannot create another array, we must change the original array O(1) extra memory
E
- if array is only 1 number
- if array is repeats of the same number
- no repeats

pseudocode
variables
k, integer (initialize as 1)
length, integer (length of array)
    
create variables as needed
loop through the array. with each iteration
check if the current integer is the same as the previous integer. integer to check is index k-1
    if it is, remove it to the back of the array
    if it is not, k++
    break when k = length
return    
example
[1,2,1]
   ^
 k 3
 length = 3
 
 
*/

var removeDuplicates = function(nums) {
  
    //create variables as needed
    let index = 0;
    let count = 0;
    let length = nums.length;
    let integerToMove;
    
    //loop through the array. with each iteration
    //check if the current integer is the same as the previous integer. integer to check is index k
    
    for (index; index < length; count++) {
        if (nums[index] === nums[index-1]) {
            //if it is, remove it to the back of the array
            integerToMove = nums[index];
            nums.splice(index,1);
            nums.splice(length,0,integerToMove);
        } //if it is not, k++
        else { index++; }
        if ( index === length) {
            break;
        }
        
        if (nums[index] < nums [index-1]) {
            break;
        }
        
        if (count >= length) {
            break;
        }
    }
    
    return index;
    
};