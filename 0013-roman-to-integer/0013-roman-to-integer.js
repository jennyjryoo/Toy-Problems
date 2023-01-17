/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let array = s.split("");
    console.log(array);
    let sum = 0;
    
    for (let i = 0 ; i < array.length; i++) {
        
        if (array[i] === "I") {
            if (array[i+1] === "I") {
                sum += 1;
                console.log("here");
            } else if (array[i+1] === "V") {
                sum += 4;
                i++;
            } else if (array[i+1] ==="X") {
                sum += 9;
                i++;
            } else {
                sum +=1;
            }
        } else if (array[i] === "X") {
            if (array[i+1] === "L") {
                sum += 40;
                i++;
            } else if (array[i+1] === "C") {
                sum += 90;
                i++;
            } else {
                sum += 10;
            }
        } else if (array[i] === "C") {
            if (array[i+1] === "D") {
                sum += 400;
                i++;
            } else if (array[i+1] ==="M") {
                sum += 900;
                i++;
            } else {
                sum += 100;
            }
        } else if (array[i] === "V") {
            sum += 5;
        } else if (array[i] === "L") {
            sum += 50;
            
        } else if (array[i] === "D") {
            sum += 500;
        } else if (array[i] === "M") {
            sum += 1000;
        }
    }
    
    return sum;
};