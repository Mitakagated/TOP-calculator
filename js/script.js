function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, b, operator) {
    return operator(a, b);
};

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');
const operator = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

numbers.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});

operator.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '') {
            return
        }
        if (display.textContent.indexOf(' ') !== -1) {
            return
        }
        display.textContent = display.textContent + ' ' + button.textContent + ' ';
    });
});

const operators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}

const equals = document.querySelector('.equals');
equals.addEventListener('click', () => {
    display.textContent = display.textContent.trimStart();
    display.textContent = display.textContent.trimEnd();
    if (display.textContent.split(' ')[1] == '/' && display.textContent.split(' ')[2] == '0') {
        display.textContent = 'XDXD nice try';
        return;
    }
    display.textContent = operate(
        Number(display.textContent.split(' ')[0]),
        Number(display.textContent.split(' ')[2]),
        operators[display.textContent.split(' ')[1]]
    )
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    display.textContent = ''
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return;
    }
    display.textContent += '.';
})