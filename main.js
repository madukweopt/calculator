const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator')
const currentDisplay = document.querySelector('.current-display');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const previousDisplay = document.querySelector('.previous-display');

let selectedOperator = '';
let secondOperand = '';
let OperatorDisplayValue = '';
let firstOperand = '';
let numberDisplayValue = '';
let lastAnswer = '';

del.addEventListener('click', delDisplay);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', calculate);

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
    return add(a, b);

    } else if (operator === '-') {
       return subtract(a, b);
    }else if (operator === '/') {
       return divide(a, b);
    } else if (operator === '*') {
       return multiply(a, b);
    }
}

function populateNumber() {    // makes number to display when clicked.
    for (let number of numberBtn) {
        number.addEventListener('click', function() {
            const valueOfNumberBtn = number.getAttribute('data-nu');
            numberDisplayValue += valueOfNumberBtn;
            currentDisplay.textContent = numberDisplayValue; 
           
        })
    } 
}

function populateOperator() {    // makes operator to display when clicked.
    operatorBtn.forEach(operator => {
        operator.addEventListener('click', function() {
            if (currentDisplay.textContent == '' && previousDisplay.textContent == '') return
           
            firstOperand = numberDisplayValue;
            const valueOfOperator = operator.getAttribute('data-nu');
            OperatorDisplayValue = valueOfOperator;
            previousDisplay.textContent = `${numberDisplayValue} ${OperatorDisplayValue}`
            numberDisplayValue = ''

            if (currentDisplay.textContent =lastAnswer) {
                firstOperand = lastAnswer
                previousDisplay.textContent = `${lastAnswer} ${OperatorDisplayValue}`
                currentDisplay.textContent = ''
            }
        }) 
    }) 
}

function calculate() {
    if (currentDisplay.textContent == '') return
    selectedOperator = OperatorDisplayValue;
    secondOperand = numberDisplayValue;
    console.log(firstOperand, selectedOperator, secondOperand )
    lastAnswer = operate(selectedOperator, firstOperand, secondOperand);
    currentDisplay.textContent = lastAnswer
    previousDisplay.textContent = `${firstOperand} ${OperatorDisplayValue} ${secondOperand} =` 

} 

function delDisplay() {
    currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1)
    numberDisplayValue = numberDisplayValue.toString().slice(0, -1);
    OperatorDisplayValue = OperatorDisplayValue.toString().slice(0, -1);

}
    
function clearDisplay() {
    currentDisplay.textContent = '';
    numberDisplayValue = '';
    OperatorDisplayValue = '';
    previousDisplay.textContent = '';
    lastAnswer = ''
    firstOperand = ''
}

populateNumber()
populateOperator()
