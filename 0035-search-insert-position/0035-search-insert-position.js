/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**

O index of the target, or index of where the target should be
I sorted array of unique integers, and a target integer
C 
- O(log n) time complexity
- negative and 0 can be included in the array
E
array only contains 1 number

Pseudocode

Variables
beginSearch
endSearch
searchPoint
searchedValue
targetIndex (initilize as empty string)

given -
nums 
target 

Declare variables as needed
    beginSearch will start at 0 (index 0)
    endSearch will be equal to the length of the array -1 (last index in array)
    searchPoint will be average of beginSearch and endSearch. round up.
Create a loop
    get the integer in nums at the index of search point
        if this integer is equal to the target, 
            set index as targetIndex, then break
        if this integer is lower than the target, 
            set beginSearch as index+1, start next loop
        if this integer is higher than the target,
            set endSearch as index-1
        if beginSearch is equal to endSearch, break
if targetIndex is a number, return targetIndex
if not, set targetIndex as beginSearch + 1, return targetIndex

Example
nums = [1,3,5,6], target = 2
          ^
beginSearch 0
endSearch 1
searchPoint = 2
searchedValue 3
targetIndex (initilize as empty string) = ""

*/
var searchInsert = function(nums, target) {
    
    
    //Declare variables as needed
    let beginSearch = 0;
    let endSearch = nums.length - 1;
    let searchPoint;
    let searchedValue;

  
    while (beginSearch <= endSearch) {
        
        searchPoint = Math.round((beginSearch + endSearch)/2);
        searchedValue = nums[searchPoint];
        
        if (searchedValue > target) {
            endSearch = searchPoint - 1;
        } else if (searchedValue < target) {
            beginSearch = searchPoint + 1;
        } else if (searchedValue === target) {
            return searchPoint; 
        }
    }    
    
    return beginSearch;
    
};