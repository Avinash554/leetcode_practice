// console.log();



/***************************** Github: Start *****************************/
/** Github */

/**
Notes:
  To show ‘Github’ contributions:
    git config --global user.email 'email'
    https://linuxize.com/post/how-to-configure-git-username-and-email/
 */
/***************************** Github: End *****************************/
/** for loop */
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

/**
Notes:
  https://www.udacity.com/blog/2021/01/javascript-for-loop.html
 */
/***************************** for loop: End *****************************/
/** Methods */

/**
Notes:
  push() :
    The push() method adds a new items to the end of an array and return new length of array. 
    The push() method changes the length of an array.
    push(element0, element1, ..... , elementN);
   https://www.w3schools.com/jsref/jsref_push.asp
---------------------------------------------------------------------------------
  pop() :
    The pop() method removes and returns last element of an array.
    The pop() method changes original array.
    The removed item can be 'string', 'number', 'array' or any other type allowed in an array.
    https://www.w3schools.com/jsref/jsref_pop.asp
---------------------------------------------------------------------------------
  filter() :
    The filter() method creates a new array filled with elements that pass the test provided by a function.
    The filter() method does not change the original array.
    If no elements pass the test it returns an empty array.
    filter((currentValue/element, index, array) => { code statments here });
    https://www.w3schools.com/jsref/jsref_filter.asp
---------------------------------------------------------------------------------
  map() :
    The map() method creates a new array calling a function for eavery array element.
    The map() method does not change the original array.
    map((currentValue/element, index, array) => {code statments here});
    https://www.w3schools.com/jsref/jsref_map.asp
---------------------------------------------------------------------------------
 */

/***************************** Methods: End *****************************/
/** Data structure: Stack */

/**
Notes:
  The data structure stack is a collection of sequential items and follows the principle LIFO.
  LIFO: Last In First Out --> The last element inserted into the stack/array(push) is first element to removed(pop)

  https://www.youtube.com/watch?v=a1fyufVlLmk&ab_channel=Codevolution
 */
/***************************** Stack: End *****************************/
/** Time complexity */

/**
Notes:
  Time complexity is the amount of time required for a program to run, as a function of 'input size'.
  Performance based 'in terms of input size'.
  Time complexity notation: Big-O - Worst case complexity

  1. Big-O Notation(O-notation) - Worst case complexity
  2. Omega Notation (Ω-notation) - Best case complexity (Ignore for beginner)
  3. Theta Notation(θ-notation) - Avergae case complexity (Ignore for beginner)

  Time complexity types:-
  Constant O(1):
    for the given input 'n' the statement in the program runs only once.
    Good to consider while writing code.
  Liner O(n): 
    Example: 1 'for/nested' loop
    Fair to consider while writing code.
  Qudaratic O(n^2):
    Example: 2 'for/nested' loop's
  Cubic O(n^3):
    Example: 3 'for/nested' loop's
  logarithmic O(log n): 
    If input size reduces by half every iteration.
    Good to consider while writing code.
  
  https://javascript.plainenglish.io/what-is-time-complexity-1211eeb70f69
  https://www.youtube.com/watch?v=Fo2Qnw5pMGo&ab_channel=Codevolution 
  https://www.youtube.com/watch?v=3yUuo7TqMW8&ab_channel=Codevolution | Horrible -> Bad -> Fair -> Good -> Excellent

---------------------------------------------------------------------------------
Objects - Big-O:
  An object is collection of key-value pairs
  Insert, Remove, Access - O(1)
  Search, Object.keys(), Object.values(), Object.entries() - O(n)

Arrays - Big-O:
  An array is an ordered collection of values.
  Insert/remove at end, Access - O(1)
  Insert/remove at begining - O(n) because index has to be reset for every remaining element in an array.
  Search - O(n)
  push/pop - O(1)
  shift/unshift/concat/slice/splice - O(n)
  filter/map/forEach/reduce - O(n) (It can be O(n^2) if callback function has for loop)

  https://www.youtube.com/watch?v=XkhLTlFXxbI&ab_channel=Codevolution
 */
/***************************** Time complexity: End *****************************/
/** Space complexity */
/**
Notes:
  Space complexity is amount of memory required for a programm to run, as a function of 'input size'.
  If app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity

  Space complexity types:-
  Constant O(1):
  Liner O(n): 
  logarithmic O(log n): 
 */
/***************************** Space complexity: End *****************************/