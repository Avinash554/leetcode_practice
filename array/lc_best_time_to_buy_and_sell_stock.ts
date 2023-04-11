




/** Leetcode: 121.Best Time to Buy and Sell Stock */
/** Solution 1: Using 'for loops' */
/**
let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const buyPrice = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - buyPrice; // consider prices[j] --> sell price
            if (currentProfit > profit) {
                profit = currentProfit;
            }
        }
    }
    return profit;
};
*/

/**
Notes:
    Time complexity: quadratic O(n^2) because of '2 for loops'.
    1-7 = -6
    5-7 = -2
    3-7 = -4
    6-7 = -1
    4-7 = -3
 */
/***************************** Solution 1: End *****************************/
/** Solution 2: Using 'for loop' */
let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    let profit = 0;
    let buyPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (buyPrice > prices[i]) { // consider prices[i] --> sell price
            buyPrice = prices[i];
        }
        const currentProfit = prices[i] - buyPrice;
        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
    return profit;
};

/**
Notes:
    Time complexity: linear-O(n) because of '1 for loop'.
    Loop 1: 
        stockToBuy 7 > 1 then stockToBuy = 1
        currentProfit = 1 - 1; // 0
        profit 0;
    Loop 2:
        stockToBuy 1 > 5 then stockToBuy = 1 // previous loop value
        currentProfit = 5 - 1; // 4
        profit 4;
    Loop 3:
        stockToBuy 1 > 3 then stockToBuy = 1 // previous loop value
        currentProfit = 3 - 1; // 2
        profit 4;
    Loop 4:
        stockToBuy 1 > 6 then stockToBuy = 1 // previous loop value
        currentProfit = 6 - 1; // 5
        profit 5;
    Loop 5:
        stockToBuy 1 > 4 then stockToBuy = 1 // previous loop value
        currentProfit = 4 - 1; // 3
        profit 5;

    https://relatablecode.com/javascript-leetcode-best-time-to-buy-and-sell-stock
 */
/***************************** Solution 2: End *****************************/
/**
Notes:
    Other solutions you can work on:
    Using max and min: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/39267/javascript-solution-if-anyone-is-interested/
 */