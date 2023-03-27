



/** LeetCode: 1.Two Sum */
const nums = [2, 7, 11, 15];
const target = 9;

/** Solution 1: Using 'for loops' */
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log([i, j]);
            // return ([i, j]);
        }
    }
}

/** 
Notes:
    'nums.length' gives value '4';
    Loop 1(i=0):
    j=1: 2+7
    j=2: 2+11
    j=3: 2+15
    j=4: loop breaks

    Loop 2(i=1):
    j=2: 7+11
    j=3: 7+15
    j=4: loop breaks

    loop 3(i=2):
    j=3; 11+15
    j=4; loop breaks
*/

/***************************** Solution 1: End *****************************/