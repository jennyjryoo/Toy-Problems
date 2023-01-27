/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */


/**
O k, an integer representation the first k number of elements in the sorted array
I array of integers, nums and a value, val
C
- must not create another array, original array must be mutated
- integers are <= 0 and >= 50 
- array is integers
E
- array may be empty
- val does not exist in the array
- all elements in array are the same intger

Pseudocode
Variables
k - integer, initilize as 0
lengthOfNums

create all variables as needed
if  array is empty, return 0
create a loop, iterating through each integer in nums. We are going to check the integer at index k.
    check if the integer is the same as val. 
        if so, remove it from the array, and add it at the back of the array
        if not, k++
    break after iterating through lengthOfNums of times.
return k

Example
nums = [0,1,3,0,4,2,2,2], val = 2
                  ^
k 5
lengthOfNums 8
8

*/

var removeElement = function(nums, val) {
    //create all variables as needed
    let k = 0;
    let lengthOfNums = nums.length;
    let elementToMove;
    
    // if  array is empty, return 0
    
    if (lengthOfNums === 0 ) {
        return k;
    }
    
    // create a loop, iterating through each integer in nums. We are going to check the integer at index k.
    // break after iterating through lengthOfNums of times. 
    for (let i = 0 ; i < lengthOfNums ; i++) {
        // check if the integer is the same as val. 
        if (nums[k] === val) {
            // if so, remove it from the array, and add it at the back of the array
            elementToMove = nums[k];
            nums.splice(k,1);
            nums.push(elementToMove);
        } // if not, k++
        else {
            k++;
        }
    }

// return k
    return k;
    
};