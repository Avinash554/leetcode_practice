



/** Leetcode: 121.Best Time to Buy and Sell Stock */
/** Solution 1: Using 'for loops' */
let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const priceOfTheDay = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            const profitPrice = prices[j] - priceOfTheDay;
            if (profitPrice > profit) {
                profit = profitPrice;
            }
        }
    }
    return profit;
};
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

/**
Notes:
    Other solutions you can work on
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/2573375/simple-javascript-solution/
    https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/39267/javascript-solution-if-anyone-is-interested/
 */