const numberOperatorBtn = document.querySelectorAll('.number, .operator');
const display = document.querySelector('.display');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
let displayValue = '';

del.addEventListener('click', delDisplay)
clear.addEventListener('click', clearDisplay);


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


function populate() {
   
    for (let numOp of numberOperatorBtn) {
        numOp.addEventListener('click', function() {
            const valueOfBtn = numOp.getAttribute('data-nu');
            displayValue += valueOfBtn;
            display.textContent = displayValue;  
        })
    } 
}


function delDisplay() {
    display.textContent = display.textContent
    .toString()
    .slice(0, -1)
    displayValue = displayValue.toString().slice(0, -1);
}
    
function clearDisplay() {
    display.textContent = '';
    displayValue = '';
}


populate()


