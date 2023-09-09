const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';
let previousInput = '';

// Add event listeners to all buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        
        if (!isNaN(buttonValue) || buttonValue === '.') {
            // Append numbers and decimal point to the current input
            currentInput += buttonValue;
        } else if (buttonValue === 'C') {
            // Clear the calculator
            currentInput = '';
            operator = '';
            previousInput = '';
        } else if (buttonValue === '=') {
            // Perform the calculation
            if (currentInput && previousInput && operator) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = '';
                previousInput = '';
            }
        } else {
            // Store the operator and previous input
            if (currentInput && previousInput) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = buttonValue;
                previousInput = currentInput;
                currentInput = '';
            } else {
                operator = buttonValue;
                previousInput = currentInput;
                currentInput = '';
            }
        }
        
        result.value = currentInput;
    });
});

// Function to perform the calculation
function calculate(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error';
        default:
            return num2;
    }
}
