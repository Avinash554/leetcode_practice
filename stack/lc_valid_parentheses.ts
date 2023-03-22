/** LeetCode: 20.Valid Parentheses */

/** Solution 1: Using 'for loop' */
const s = "()";

// Array intilization
let expectedBrackets: string[] = [];

for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
        expectedBrackets.push(')');
    } else if (s[i] === '{') {
        expectedBrackets.push('}');
    } else if (s[i] === '[') {
        expectedBrackets.push(']');
    } else if (expectedBrackets.pop() !== s[i]) {
        console.log(false);
        //return false;
    }
}
//if no elements in expectedBrackets array it returns 'true'
console.log(!expectedBrackets.length);
//return !expectedBrackets.length 

/** 
 Loop 1:
 s[0] = '('
 expectedBrackets = [')']

 Loop 2:
 S[1] = ')'
 expectedBrackets = [')']
 expectedBrackets.pop() --> It removes last element from an array and it changes the array.
 return !expectedBrackets.length --> true

 Links:
 Solution 1: https://duncan-mcardle.medium.com/leetcode-problem-20-valid-parentheses-javascript-a75d1744ec0d
*/
/***************************** Solution 1: End *****************************/



