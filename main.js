const numberOperator = document.querySelectorAll('.number, .operator');
const display = document.querySelector('.display')

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    if (operator === '+'){
    return add(a + b);

    } else if (operator === '-') {
       return subtract(a, b);
    }else if (operator === '/') {
       return divide(a, b);
    } else if (operator === '*') {
       return multiply(a, b);
    }
}

//let displayValue = '';

function populate() {
    for (let numOp of numberOperator) {
        numOp.addEventListener('click', function() {
            const buttonNumber = numOp.getAttribute('data-nu');
           // displayValue += buttonNumber
            display.textContent = buttonNumber; 

        })
    } 
}
populate()