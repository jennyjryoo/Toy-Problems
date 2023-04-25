/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    let currentPrice ;
    let minPrice = prices[0];
    let biggestProfit = 0;
    
    for (let i = 1 ; i < prices.length ; i++) {
        currentPrice = prices[i];
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        } else if (currentPrice - minPrice > biggestProfit) {
            biggestProfit = currentPrice - minPrice;
        }
        
    }
    
    return biggestProfit;

};