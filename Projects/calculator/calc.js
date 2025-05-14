// Get the display input element
const displayInput = document.getElementById('display');

// Get all the number buttons
const numberButtons = document.querySelectorAll('.clickables button:not(.operations button, #clear, #equal)');

// Get the operation buttons
const operationButtons = document.querySelectorAll('.operations button');

// Get the clear and equal buttons
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

// Add event listener to each number button
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the current value of the display input
        const currentValue = displayInput.value;
        // Append the clicked number to the current value
        displayInput.value = currentValue + button.textContent;
    });
});

// Add event listener to each operation button
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the current value of the display input
        const currentValue = displayInput.value;
        // Append the operation to the current value
        displayInput.value = currentValue + button.textContent;
    });
});

// Add event listener to the clear button
clearButton.addEventListener('click', () => {
    // Clear the display input value
    displayInput.value = '';
});

// Add event listener to the equal button
equalButton.addEventListener('click', () => {
    // Get the current value of the display input
    const currentValue = displayInput.value;

     // Evaluate the expression and update the display input value
    try {
        displayInput.value = eval(currentValue);
    } catch (error) {
        displayInput.value = 'Error';
    }
});