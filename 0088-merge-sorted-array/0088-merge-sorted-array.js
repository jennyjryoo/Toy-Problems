/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**


O nums1, with elements replaced with merged, sorted array
I nums1, nums2, m, and n
C 
- O(m+n) time
- positive integers
- output must be nums1
E
- m=0 or n=0

Psuedocode
sortedArray
length
nums1Index, starts at 0
nums2Index, starts at 0
nums1Integer
nums2Integer

- determine m + n, set it to length
- Loop through, from 0 to length - 1
-- look at nums1 at nums1Index, set it to nums1Integer
-- look at nums2 at nums2Index, set it to nums2Integer
-- if nums1Index is equal to m
---set sortedArray at index length to nums2 index at nums2Index, increase by 1
-- or if nums2Index is equal to n,
---set sortedArray at index length to nums1 index at nums1Index increase by 1
--else
-- see if nums1Integer or nums2Integer is bigger
-- whichever is smaller, set sortedArray at index length to that integer. if equal, go with nums1
-- set that array's numsIndex to increase by one
- set nums1 to sortedArray

Example

nums1 = [1,2,3,0,0,0], m = 3, 
               ^  
nums2 = [2,5,6], n = 3
             ^
length = 6 
index 0-5: 5
nums1Index 3
nums2Index 3
nums1Integer 3
nums2Integer 5

sortedArray[1,2,2,3,5,6]

*/
var merge = function(nums1, m, nums2, n) {

    // - determine m + n, set it to length
    let length = m + n;
    let sortedArray = [];
    let nums1Index = 0;
    let nums2Index = 0;
    let nums1Integer;
    let nums2Integer;
    
    // - Loop through, from 0 to length - 1
    for (let i = 0 ; i < length ; i++) {
        // -- look at nums1 at nums1Index, set it to nums1Integer
        nums1Integer = nums1[nums1Index];
        // -- look at nums2 at nums2Index, set it to nums2Integer
        nums2Integer = nums2[nums2Index];
        // -- if nums1Index is equal to m
        if (nums1Index === m) {
            // ---set sortedArray at index length to nums2 index at nums2Index, increase by 1
            sortedArray[i] = nums2Integer;
            nums2Index ++;
        } else if (nums2Index === n) {
        // -- or if nums2Index is equal to n,
            // ---set sortedArray at index length to nums1 index at nums1Index increase by 1  
            sortedArray[i] = nums1Integer;
            nums1Index ++;
        } else {
        // --else
        // -- see if nums1Integer or nums2Integer is bigger
        // -- whichever is smaller, set sortedArray at index length to that integer. if equal, go with nums1
        // -- set that array's numsIndex to increase by one    
            if (nums1Integer <= nums2Integer) {
                sortedArray[i] = nums1Integer;
                nums1Index ++;
            } else {
                sortedArray[i] = nums2Integer;
                nums2Index ++
            }
        }
    }
    
    // - set nums1 to sortedArray
    for (let i = 0 ; i < length ; i ++) {
        nums1[i] = sortedArray[i];
    }

};