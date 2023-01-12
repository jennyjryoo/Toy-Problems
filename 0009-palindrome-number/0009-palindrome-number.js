/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let xString = x.toString();
    let y = "";
    
    for (let i = 0 ; i < xString.length ; i++) {
        y = xString.slice(i,i+1) + y;
        console.log(y);
    }
    
    if (xString === y) {
        return true;
    } else {
        return false;
    }
    
};