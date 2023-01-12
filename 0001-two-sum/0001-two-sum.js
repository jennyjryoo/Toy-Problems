/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let number = 0;
    let difference = 0;
    let solution = [];
    let testArray = [];

    for ( let i = 0 ; i < nums.length ; i++) {
        number = nums[i];
        difference = target - number;
        // console.log(nums);
        // console.log(number);
        // console.log(difference);

        if (nums.indexOf(difference) > nums.indexOf(number)) {
            solution.push(i);
            solution.push(nums.indexOf(difference));
        } else if (nums.indexOf(difference) === nums.indexOf(number)) {
            testArray = nums.slice();
            testArray.splice(i,1);
            if(testArray.indexOf(difference) >= 0) {
            solution.push(i);
            solution.push(testArray.indexOf(difference)+1);
            }
        }
        if (solution.length > 0) {
            break;
        } 
    }
    return solution;
};