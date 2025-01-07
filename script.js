// These are variables that will be used in order to make the calculator.
let userInput = '';
let userOperator = '';
let num1 = 0; 

// This will show how the calculator is going to work by displaying its elements. 
const orderDisplay = document.getElementById('orderDisplay');
function addToNum(num) {
    userInput += num;
    orderDisplay.innerHTML = userInput;
 }
// This helps with getting the operations to work. 
// function addToNum(num) {
//     const orderDisplay = document.getElementById('orderDisplay');  
// order = order + item + " ";
// orderDisplay.innerHTML = userInput;

// }
// This is will be used for user input. 
function operator(op) {
    userOperator = op; 
    num1 = parseInt(userInput); 
    userInput = '';
}

// Helps with adding elements. 
function add(num1, num2) {
    return num1 + num2;
}
// Helps with subtracting elements. 
function subtract(num1, num2) {
    return num1 - num2;
}
// Helps with multiplying elements. 
function multiply(num1, num2) {
    return num1 * num2;
}
// Helps with dividing elements. 
function divide(num1, num2) {
    return num1 / num2;
}
// All of this helps with getting the result of two elements. 
function calculate() {
    let num2 = parseInt(userInput);

    switch(userOperator) {
        case '+':
        orderDisplay.innerHTML = add(num1, num2);
        break; 
        case '-':
        orderDisplay.innerHTML = subtract(num1, num2);
        break;
      case '*':
        orderDisplay.innerHTML = multiply(num1, num2);
        break; 
        case '/':
            orderDisplay.innerHTML = divide(num1, num2);
            break; 
            default:
                orderDisplay.innerHTML = "ERROR";
    }
}
// Helps with clearing the calculator. 
function clr() {
    orderDisplay.innerHTML = 0;
    userInput = '';
}
