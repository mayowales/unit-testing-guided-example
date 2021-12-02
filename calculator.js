/* To pass the first tests, open the calculator.js file and complete the sum function.

If you simply return a sum of both arguments from the sum function, you should see at least the first two tests of the "Sum" suite passing. However, a few other tests in the test suite are failing.

For this particular sum function, we don't expect it to simply sum any two values that it is passed. We want a few edge cases to be considered an properly handled.

If the function is called with a single number, and no second argument is passed, the function should act as if the second argument passed equals 0.
If the function is called without any arguments, the function should act as if both arguments passed equal 0.

*/
function sum(a, b) {
 
  if (!a && !b){
    return 0;
  } else if (!b){
    return a;
  } else {
    return a + b;
  }
 
  return 
}

function subtract(a, b) {

  if (!a && !b){
    return 0;
  } else if (!b){
    return a;
  } else {
    return a - b;
  }
 
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('An explanatory error message');
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
