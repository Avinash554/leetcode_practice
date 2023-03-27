// console.log();



/***************************** for loop: start *****************************/
/**
 * https://www.udacity.com/blog/2021/01/javascript-for-loop.html
 */

const myString = "Hello World"; //10 values
const myArray = [10, 11, 12, 13, 14]; //4 values
const myObject = {
  'A': '1',
  'B': '2',
  'C': '3',
  'D': '4'
};

/** for loop */
// String(i prints indexes), Array(i prints indexes)
for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}

// Object(i prints indexes)
for (let i = 0; i < Object.keys(myObject).length; i++) {
  console.log(myObject[Object.keys(myObject)[i]]);
}


/** for-in loop */
// String(i prints indexes), Array(i prints indexes), Object(i prints keys)
for (let i in myObject) {
  console.log(myObject[i]);
}


/** for-of loop */
// String(i prints values), Array(i prints values)
for (let i of myArray) {
  console.log(i);
}

// Object(gives key-value pair values)
for (let [key, value] of Object.entries(myObject)) {
  console.log(key, value);
}
/***************************** for loop: End *****************************/
