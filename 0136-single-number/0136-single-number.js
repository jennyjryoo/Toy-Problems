/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let currentNumber;
    let foundIntegers = {};
    
    for (let i = 0 ; i < nums.length ; i++) {
        currentNumber = nums[i];
        if (foundIntegers[currentNumber] === undefined) {
            foundIntegers[currentNumber] = true;
        } else {
            delete foundIntegers[currentNumber];
        }
    };
  
    return Object.keys(foundIntegers);
};