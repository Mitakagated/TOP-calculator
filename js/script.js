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

function operate(operator, a, b) {
    return operator(a, b);
};

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
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
    display.textContent = operate(
        operators[display.textContent.split(' ')[1]],
        Number(display.textContent.split(' ')[0]),
        Number(display.textContent.split(' ')[2])
    )
})

const clear = document.querySelector('.clear')
clear.addEventListener('click', () => {
    display.textContent = ''
})

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', () => {
    if (display.textContent.includes('.')) return
    display.textContent += '.'
})

const negative = document.querySelector('.negative')
negative.addEventListener('click', () => {
    if (display.textContent === '') return;
    if (display.textContent[0] === '-') return display.textContent = display.textContent.slice(1);
    display.textContent = '-' + display.textContent;
})