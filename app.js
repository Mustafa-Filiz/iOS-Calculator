//Variables

const previousElement = document.querySelector(".previous-result");
const currentElement = document.querySelector(".current-result");


const acButton = document.querySelector(".ac");
const posnegButton = document.querySelector(".posneg");
const modButton = document.querySelector(".mod");

const additionButton = document.querySelector(".plus");
const subtractionButton = document.querySelector(".minus");
const divisionButton = document.querySelector(".division");
const multiplicationButton = document.querySelector(".multiply");
const equalButton = document.querySelector(".equal");

const commaButton = document.querySelector(".comma");
const number0 = document.querySelector(".number-0");
const number1 = document.querySelector(".number-1");
const number2 = document.querySelector(".number-2");
const number3 = document.querySelector(".number-3");
const number4 = document.querySelector(".number-4");
const number5 = document.querySelector(".number-5");
const number6 = document.querySelector(".number-6");
const number7 = document.querySelector(".number-7");
const number8 = document.querySelector(".number-8");
const number9 = document.querySelector(".number-9");

const numbersArray = [
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9
]

let previousOperand = "";
let currentOperand = "";
let operation;

//Functions

function displayNumbers() {
    if (operation) {
        previousElement.innerHTML = previousOperand + " " + operation;
    } else {
        previousElement.innerHTML = previousOperand;
    }
    currentElement.innerHTML = currentOperand;
}

function appendNumber(number) {
    if (number === "." && currentOperand.includes(".")) return;
    if (number === 0 && currentOperand === "0") return;

    currentOperand = currentOperand.toString() + number.toString();

    displayNumbers();
}

function chooseOperation(selectedOperation) {
    operation = selectedOperation;
    previousOperand = currentOperand;
    currentOperand = "";

    displayNumbers();
}

function Compute() {
    let computation;
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    switch (operation) {
        case "+":
            computation = previous + current;
            break;
        case "-":
            computation = previous - current;
            break;
        case "*":
            computation = previous * current;
            break;
        case "÷":
            computation = previous / current;
            break;
    
        default:
            break;
    }

    currentOperand = computation;
    previousOperand = "";
    operation = undefined;
    displayNumbers();

    currentOperand = "";
}

function AllClear() {
    previousOperand = "";
    currentOperand = "";
    operation;

    displayNumbers();
}

function PosNeg() {
    currentOperand = currentOperand * -1;

    displayNumbers();
}

function Modulus() {
    currentOperand = currentOperand / 100;

    displayNumbers();
}

//Add event listener to operator buttons

additionButton.addEventListener("click", () => {
    chooseOperation("+");
})

subtractionButton.addEventListener("click", () => {
    chooseOperation("-");
})

divisionButton.addEventListener("click", () => {
    chooseOperation("÷");
})

multiplicationButton.addEventListener("click", () => {
    chooseOperation("*");
})

equalButton.addEventListener("click", () => {
    Compute();
})

// Add event listener to top buttons

acButton.addEventListener("click", () =>{
    AllClear();
})

posnegButton.addEventListener("click", () =>{
    PosNeg();
})

modButton.addEventListener("click", () =>{
    Modulus();
})


// Add event listener to number buttons

for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];
    number.addEventListener("click", () => {
        appendNumber(i);
    })
}

commaButton.addEventListener("click", () => {
    appendNumber(".");
})