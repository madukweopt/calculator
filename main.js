const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const currentDisplay = document.querySelector('.current-display');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');
const previousDisplay = document.querySelector('.previous-display');
const decimalPoint = document.querySelector('.point');

let selectedOperator = '';
let secondOperand = '';
let operatorDisplayValue = '';
let numberDisplayValue = ''
let firstOperand = '';
let lastAnswer = '';
let point = '';

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
            numberDisplayValue = number.getAttribute('data-nu');
            currentDisplay.textContent += numberDisplayValue; 

           
        })
    } 
}

function populateOperator() {    // makes operator to display when clicked.
    operatorBtn.forEach(operator => {
        operator.addEventListener('click', function() {
            
            if (firstOperand && numberDisplayValue) {
                calculate()

            }
            firstOperand += currentDisplay.textContent
            operatorDisplayValue = operator.getAttribute('data-nu');
            previousDisplay.textContent =  `${firstOperand} ${operatorDisplayValue}`
            currentDisplay.textContent = firstOperand
            
            numberDisplayValue = ''

            if (currentDisplay.textContent =lastAnswer) {

                firstOperand = lastAnswer
                previousDisplay.textContent = `${lastAnswer} ${operatorDisplayValue}`   
                currentDisplay.textContent = ''
                
            } if (currentDisplay.textContent != '') {
                firstOperand = currentDisplay.textContent
              
            }
        
        }) 
        
    }) 
}

function populatePoint() {
    decimalPoint.addEventListener('click', function () {
        if (currentDisplay.textContent.includes('.')) return
        point += decimalPoint.getAttribute('data-number')
        console.log(point)
        currentDisplay.textContent += point;

       
    })
}

function calculate() {
    if (firstOperand == '') return

    selectedOperator = operatorDisplayValue;
    secondOperand = numberDisplayValue;
    //console.log(firstOperand, selectedOperator, secondOperand )
    lastAnswer = operate(selectedOperator, firstOperand, secondOperand);
    currentDisplay.textContent = lastAnswer
    previousDisplay.textContent = `${firstOperand} ${operatorDisplayValue} ${secondOperand} =`

    if (currentDisplay.textContent == lastAnswer) {
        numberDisplayValue = ''
    } 

} 

function delDisplay() {
    currentDisplay.textContent = currentDisplay.textContent
    .toString()
    .slice(0, -1)
    numberDisplayValue = numberDisplayValue.toString().slice(0, -1);
    OperatorDisplayValue = operatorDisplayValue.toString().slice(0, -1);

}
    
function clearDisplay() {
    currentDisplay.textContent = '';
    numberDisplayValue = '';
    operatorDisplayValue = '';
    previousDisplay.textContent = '';
    lastAnswer = ''
    firstOperand = ''
    point = ''
}

populateNumber()
populateOperator()
populatePoint()