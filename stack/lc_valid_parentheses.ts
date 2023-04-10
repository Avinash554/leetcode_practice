



/** LeetCode: 20.Valid Parentheses */
/** Solution 1: Using 'for loop' */
/*
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
        // return false;
    }
}
// if no elements in expectedBrackets array it returns 'true'
console.log(!expectedBrackets.length);
// return !expectedBrackets.length
*/

/**
Notes:
    Loop 1:
    s[0] = '('
    expectedBrackets = [')']

    Loop 2:
    S[1] = ')'
    expectedBrackets = [')']
    expectedBrackets.pop() --> It removes last element from an array and it changes the array.
    return !expectedBrackets.length --> true

    https://duncan-mcardle.medium.com/leetcode-problem-20-valid-parentheses-javascript-a75d1744ec0d
*/
/***************************** Solution 1: End *****************************/

/** Solution 2: Using 'Object' */
const s = '()';
const bracketsObj = {
    '(': ')',
    '{': '}',
    '[': ']'
};
let expectedBrackets: string[] = [];

// Using 'for loop'
for (let i = 0; i < s.length; i++) {
    if (bracketsObj[s[i]]) {
        expectedBrackets.push(bracketsObj[s[i]])
    } else if (expectedBrackets.pop() !== s[i]) {
        console.log(false);
        // return false;
    }
}
console.log(true);
// return !expectedBrackets.length

// Using 'for-in' loop
/*
for (let i in s) {
    if (bracketsObj[s[i]]) {
        expectedBrackets.push(bracketsObj[s[i]]);
    } else if (expectedBrackets.pop() !== s[i]) {
        console.log(false);
        // return false;
    }
}
console.log(true);
// return !expectedBrackets.length;
*/

// Using 'for-of' loop
/*
for (let char of s) {
    if (bracketsObj[char]) {
        expectedBrackets.push(bracketsObj[char]);
    } else if (expectedBrackets.pop() !== char) {
        console.log(false);
        // return false;
    }
}
console.log(true);
// return !expectedBrackets.length;
*/

/**
Notes:
    https://leetcode.com/problems/valid-parentheses/solutions/1512374/javascript-solution/
    https://leetcode.com/problems/valid-parentheses/solutions/980783/javascript-stack/
 */
/***************************** Solution 2: End *****************************/