// These are variables that will be used in order to make the calculator.
const description = {
    name: "Calculator",
    purpose: "Math", 
    Use: "Unlimited",
}
let userInput = '';
let userOperator = '';
let num1 = 0; 
let result = 0;
let calculator = false;
 let num3 = 0;
 

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
// This will be used for user input. 
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
        result = add(num1, num2);

        break; 
        case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break; 
        case '/':
            result = divide(num1, num2);
            break; 
            default:
                result = "Error, please add a symbol and another number, thank you.";
    }
    // Helps with checking a right or wrong answer.
    if (calculator == true) {
        orderDisplay.innerHTML = result;
    } else if (calculator == false) {
        orderDisplay.innerHTML = "Please enter your answer";
        userInput= '';
        
    }
    
}
// Helps with clearing the calculator. 
function clr() {
    orderDisplay.innerHTML = 0;
    userInput = '';
    num1= 0;
    num2 = 0; 
}

// Displays if the answer that the user put is right or not. 
function correct() {
     userInput = orderDisplay.innerHTML;
     
    if (userInput == result) {
        orderDisplay.innerHTML = "Yes!";
        } else {
            orderDisplay.innerHTML = "No!";
        }
        
}
   
// Object to describe what a calculator does. Help from W3Schools.com
document.getElementById("description").innerHTML = description.name + ", " + description.purpose + ", " + description.Use;

// Arrays for loop.
const questions = ['When was the calculator invented?', 'Before electronic calculators, the ________ rule was a common tool for performing calculations.', 'True or False? The more advanced calculators are more expensive than basic calculators.']

// Loop using the for method.
for (let i = 0; i < questions.length; i++ ) {
document.getElementById("q"+i).innerHTML = questions[i];

}
// Checks if an answer is correct.
 function yes() {
  document.getElementById('answer').innerHTML = 'That is correct!!';
 }
 
 // Checks if an answer is wrong.
 function no() {
document.getElementById('answer').innerHTML = 'That is wrong!! Please Try Again!!';
 }
// When was the calculator invented? Around 1642.
// Before electronic calculators, the blank rule was a common tool for performing calculations. Slide.
// True or False? The more advanced calculators are more expensive than basic calculators. True. 

