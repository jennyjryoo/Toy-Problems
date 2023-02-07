/**
 * @param {number} x
 * @return {number}
 */


/**

O an integer, square root of x (rounded down)
I an integer, x
C
- cannot use any built in exponent function or operator
- max is 46341^2
E
- edge

Psuedocode
Variables
min
max
half
sqRoot

Declare variables
    min would be 0
    max would be 46341
    sqRoot is "empty"
    half would be average min and max, rounded down
Do a binary search
    if x is equal to half^2, set sqRoot to half and break
    if x is higher than half^2, then set min to half
    if x is lower than half^2, then set max to half
    recalculate half
    if max - min is 1, set sqRoot to min and break
Return sqRoot
        
Example
x = 8

min 2
max 3
half 2
sqRoot = 2

*/
var mySqrt = function(x) {
    // Declare variables
    let min = 0;
    let max = 46341;
    let half = Math.floor((min + max)/2);
    let sqRoot;
    
    // Do a binary search
    
    while (max > min) {
    //     if x is equal to half^2, set sqRoot to half and break
        if (x === half*half) {
            sqRoot = half;
            break;
        }
    //     if x is higher than half^2, then set min to half
        else if (x > half * half) {
            min = half;
        } 
    //     if x is lower than half^2, then set max to half
        else if (x < half * half) {
            max = half;
        }
    //     recalculate half
        half = Math.floor((min+max)/2);
    //     if max - min is 1, set sqRoot to min and break
        if ((max - min) === 1) {
            sqRoot = min;
            break;
        }
    }
    
    // Return sqRoot
    return sqRoot;
};