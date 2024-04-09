// Function to calculate the result
function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;

    let result;
    switch(operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = "Cannot divide by zero!";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Function sa toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
}

// Check if dark mode kay enabled
if (localStorage.getItem('darkModeEnabled') === 'true') {
    document.body.classList.add('dark-mode');
}

// Event listener for dark mode toggle button
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
